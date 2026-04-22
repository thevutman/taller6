import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Bucket name for audio storage
const BUCKET_NAME = 'make-8c79cdcb-audio';

// Initialize storage bucket on startup
(async () => {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    
    if (!bucketExists) {
      await supabase.storage.createBucket(BUCKET_NAME, { public: false });
      console.log(`Created bucket: ${BUCKET_NAME}`);
    }
  } catch (error) {
    console.error('Error initializing storage bucket:', error);
  }
})();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8c79cdcb/health", (c) => {
  return c.json({ status: "ok" });
});

// Upload and process audio story
app.post("/make-server-8c79cdcb/upload-story", async (c) => {
  try {
    const formData = await c.req.formData();
    const audioFile = formData.get('audio') as File;
    
    if (!audioFile) {
      return c.json({ error: 'No se proporcionó archivo de audio' }, 400);
    }

    // Read OpenAI API key from environment
    const openaiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiKey) {
      return c.json({ error: 'OpenAI API key no configurada' }, 500);
    }

    // Convert audio to ArrayBuffer (needed for storage later)
    const audioBytes = await audioFile.arrayBuffer();

    // Step 1: Transcribe audio using Whisper
    console.log('Transcribiendo audio con Whisper...');

    const whisperFormData = new FormData();
    whisperFormData.append('file', audioFile);
    whisperFormData.append('model', 'whisper-1');
    whisperFormData.append('language', 'es');

    const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
      },
      body: whisperFormData,
    });

    if (!whisperResponse.ok) {
      const error = await whisperResponse.text();
      console.error('Error en Whisper API:', error);
      return c.json({ error: 'Error al transcribir el audio' }, 500);
    }

    const whisperData = await whisperResponse.json();
    const transcripcion = whisperData.text;

    console.log('Transcripción obtenida, procesando con GPT...');
    
    // Step 2: Analyze and moderate using GPT-4
    const systemPrompt = `Eres el moderador y editor de un proyecto cultural llamado 'Chismógrafo'. Tu tarea es:

1. FILTRO DE SEGURIDAD: Analiza el texto en busca de lenguaje de odio explícito, amenazas, discriminación grave o groserías extremadamente ofensivas. Si la historia viola estas reglas, debes rechazarla. (Nota: Las groserías coloquiales o regionales que sean parte natural de la forma de hablar se pueden permitir si no son un ataque directo a alguien).

2. RESUMEN ESTILO 'CHISME' Y TITULACIÓN: Si la historia es aprobada, debes generar:
   - Un Título Intrigante (Máximo 6 palabras) que suene como el titular de un chisme jugoso.
   - Un Resumen Estilo 'Chisme' (Máximo 3 oraciones). NO hagas un resumen técnico ni aburrido. Redáctalo como si le estuvieras contando un secreto fascinante a un amigo al oído. Usa un tono coloquial, intrigante y muy narrativo. Comienza con frases como 'Imagínate que...', 'Resulta que...', 'Cuentan por ahí que...' o 'No vas a creer que...'.
   - Un par de Palabras Clave/Etiquetas (Ej: Romance, Nostalgia, Chisme de barrio).

3. CORRECCIÓN: Corrige errores menores de puntuación en la transcripción.

Devuelve tu respuesta ÚNICAMENTE en el siguiente formato JSON estricto:
{
  "aprobado": true/false,
  "motivo_rechazo": "Explicación breve si fue rechazado (o null si es aprobado)",
  "titulo": "El título generado",
  "resumen": "El resumen breve",
  "etiquetas": ["etiqueta1", "etiqueta2"],
  "transcripcion_limpia": "La transcripción completa con correcciones menores"
}`;

    const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Analiza esta transcripción:\n\n${transcripcion}` },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    });

    if (!gptResponse.ok) {
      const error = await gptResponse.text();
      console.error('Error en GPT API:', error);
      return c.json({ error: 'Error al analizar el contenido' }, 500);
    }

    const gptData = await gptResponse.json();
    const analysis = JSON.parse(gptData.choices[0].message.content);

    // Step 3: Handle rejection or approval
    if (!analysis.aprobado) {
      console.log('Chisme rechazado:', analysis.motivo_rechazo);
      return c.json({
        approved: false,
        rejection_reason: analysis.motivo_rechazo,
      });
    }

    // Step 4: Save audio to Supabase Storage
    console.log('Guardando audio en storage...');
    const fileName = `${Date.now()}-${crypto.randomUUID()}.webm`;
    
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, audioBytes, {
        contentType: audioFile.type,
      });

    if (uploadError) {
      console.error('Error al subir audio:', uploadError);
      return c.json({ error: 'Error al guardar el audio' }, 500);
    }

    // Get signed URL (valid for 1 year)
    const { data: urlData } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 31536000);

    // Step 5: Save to database
    const storyId = crypto.randomUUID();
    const storyData = {
      id: storyId,
      fecha: new Date().toISOString(),
      titulo: analysis.titulo,
      resumen: analysis.resumen,
      transcripcion: analysis.transcripcion_limpia,
      etiquetas: analysis.etiquetas,
      audio_url: urlData?.signedUrl || '',
      audio_filename: fileName,
    };

    await kv.set(`story:${storyId}`, storyData);

    console.log('Chisme guardado exitosamente:', storyId);
    return c.json({
      approved: true,
      story: storyData,
    });

  } catch (error) {
    console.error('Error procesando historia:', error);
    return c.json({ error: 'Error interno del servidor', details: String(error) }, 500);
  }
});

// Get all approved stories
app.get("/make-server-8c79cdcb/stories", async (c) => {
  try {
    const stories = await kv.getByPrefix('story:');
    
    // Sort by date (newest first)
    const sortedStories = stories.sort((a: any, b: any) => 
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );

    return c.json({ stories: sortedStories });
  } catch (error) {
    console.error('Error obteniendo historias:', error);
    return c.json({ error: 'Error al obtener historias' }, 500);
  }
});

// Get single story by ID
app.get("/make-server-8c79cdcb/stories/:id", async (c) => {
  try {
    const id = c.req.param('id');
    const story = await kv.get(`story:${id}`);
    
    if (!story) {
      return c.json({ error: 'Historia no encontrada' }, 404);
    }

    return c.json({ story });
  } catch (error) {
    console.error('Error obteniendo historia:', error);
    return c.json({ error: 'Error al obtener la historia' }, 500);
  }
});

Deno.serve(app.fetch);