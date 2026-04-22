import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Mic, Square, Upload, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import svgPaths from "../../../imports/svg-ffn9u4s4vz";

type RecordingState = "idle" | "recording" | "stopped" | "uploading" | "success" | "rejected";

interface CabinaProps {
  onBack: () => void;
}

export default function Cabina({ onBack }: CabinaProps) {
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [storyData, setStoryData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [isRecordingActive, setIsRecordingActive] = useState(false);
  const [waitingForPermission, setWaitingForPermission] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Get supported mime type
  const getSupportedMimeType = () => {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/mpeg',
      'audio/wav'
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        console.log('Using mime type:', type);
        return type;
      }
    }

    console.warn('No supported mime type found, using default');
    return '';
  };

  const startRecording = async () => {
    try {
      setErrorMessage("");
      setRecordingTime(0);
      setWaitingForPermission(true);

      console.log('Iniciando grabación...');

      // Check browser support
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setErrorMessage("Tu navegador no soporta la grabación de audio. Por favor usa Chrome, Firefox, Safari o Edge.");
        setWaitingForPermission(false);
        return;
      }

      console.log('Navegador compatible');

      // Request microphone permission with simpler constraints
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      setWaitingForPermission(false);

      console.log('Permiso de micrófono concedido');
      console.log('Tracks de audio:', stream.getAudioTracks().length);

      // Check if we got a valid stream
      if (!stream || stream.getAudioTracks().length === 0) {
        setErrorMessage("No se pudo acceder al micrófono. Por favor verifica que esté conectado.");
        return;
      }

      // Store stream reference
      streamRef.current = stream;

      // Get supported mime type
      const mimeType = getSupportedMimeType();
      const options = mimeType ? { mimeType } : {};

      console.log('🎵 Opciones de MediaRecorder:', options);

      const mediaRecorder = new MediaRecorder(stream, options);

      console.log('MediaRecorder creado');
      console.log('Estado inicial:', mediaRecorder.state);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        console.log('Datos disponibles:', event.data.size, 'bytes');
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log('Grabación detenida');
        console.log('Chunks recolectados:', audioChunksRef.current.length);

        const totalSize = audioChunksRef.current.reduce((acc, chunk) => acc + chunk.size, 0);
        console.log('Tamaño total:', totalSize, 'bytes');

        if (audioChunksRef.current.length === 0 || totalSize === 0) {
          setErrorMessage("No se grabó ningún audio. Por favor intenta de nuevo y habla cerca del micrófono.");
          setRecordingState("idle");
          setIsRecordingActive(false);
          if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
          }
          if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
          }
          return;
        }

        const blob = new Blob(audioChunksRef.current, {
          type: mimeType || 'audio/webm'
        });

        console.log('Blob creado:', blob.size, 'bytes, tipo:', blob.type);

        setAudioBlob(blob);
        setRecordingState("stopped");
        setIsRecordingActive(false);

        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }

        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      };

      mediaRecorder.onstart = () => {
        console.log('Grabación iniciada');
        setIsRecordingActive(true);
      };

      mediaRecorder.onerror = (event: any) => {
        console.error("MediaRecorder error:", event);
        setErrorMessage("Error durante la grabación. Por favor intenta de nuevo.");
        setRecordingState("idle");
        setIsRecordingActive(false);
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }
      };

      // Start recording
      mediaRecorder.start(100); // Collect data every 100ms
      console.log('start() llamado, estado:', mediaRecorder.state);

      setRecordingState("recording");

      // Start timer
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error: any) {
      console.error("Error al acceder al micrófono:", error);
      setWaitingForPermission(false);

      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setErrorMessage(
          "Permiso de micrófono denegado. Para grabar tu chisme:\n\n" +
          "1. Haz clic en el ícono de candado 🔒 o información ℹ️ en la barra de direcciones\n" +
          "2. Busca 'Micrófono' y cambia el permiso a 'Permitir'\n" +
          "3. Recarga la página y vuelve a intentar\n\n" +
          "Si estás en un dispositivo móvil, verifica los permisos en la configuración de tu navegador."
        );
      } else if (error.name === 'NotFoundError') {
        setErrorMessage("No se encontró ningún micrófono conectado. Por favor conecta un micrófono y vuelve a intentar.");
      } else if (error.name === 'NotReadableError') {
        setErrorMessage("El micrófono está siendo usado por otra aplicación. Por favor cierra otras aplicaciones que puedan estar usando el micrófono.");
      } else if (error.name === 'OverconstrainedError') {
        setErrorMessage("Tu dispositivo no soporta los ajustes de audio solicitados. Intenta con otro dispositivo.");
      } else if (error.name === 'SecurityError') {
        setErrorMessage("Error de seguridad. Asegúrate de estar usando HTTPS o localhost.");
      } else {
        setErrorMessage(`Error desconocido: ${error.message || error.name}. Por favor intenta de nuevo o contacta soporte.`);
      }
    }
  };

  const stopRecording = () => {
    console.log('Intentando detener grabación...');
    if (mediaRecorderRef.current) {
      console.log('Estado del MediaRecorder:', mediaRecorderRef.current.state);
      if (mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
        console.log('stop() llamado');
      } else {
        console.warn('MediaRecorder no está en estado "recording":', mediaRecorderRef.current.state);
      }
    } else {
      console.error('mediaRecorderRef.current es null');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const uploadStory = async () => {
    if (!audioBlob) return;

    setRecordingState("uploading");
    setResponseMessage("");

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.webm");

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8c79cdcb/upload-story`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.approved) {
        setRecordingState("success");
        setStoryData(result.story);
        setResponseMessage(
          "¡Tu chisme fue aprobada y publicada!\n\n" +
          "Puedes verla ahora en el Historias.\n\n" +
          "Vuelve al índice y selecciona 'Mapa de memorias' para ver tu chisme junto con todas las demás chismes de la comunidad."
        );
      } else {
        setRecordingState("rejected");
        setResponseMessage(
          "Tu chisme fue rechazada por el moderador.\n\n" +
          "Razón: " + (result.rejection_reason || "Contenido no apropiado") + "\n\n" +
          "Puedes intentar grabar una nueva chisme."
        );
      }
    } catch (error) {
      console.error("Error al subir la chisme:", error);
      setErrorMessage("Error al subir la grabación. Por favor intenta de nuevo.");
      setRecordingState("stopped");
    }
  };

  const reset = () => {
    setRecordingState("idle");
    setAudioBlob(null);
    setResponseMessage("");
    setStoryData(null);
    setErrorMessage("");
    setRecordingTime(0);
    setIsRecordingActive(false);

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    console.log('Reset completo');
  };

  return (
    <motion.div
      key="chismografo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex"
    >
      {/* Left Page */}
      <div className="w-1/2 bg-[#f2e8dc] relative px-12 py-12">
        <h2
          className="text-[32px] font-bold leading-[48px] text-[#677a5f] mb-4"
          style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Cabina de Grabación
        </h2>

        <p
          className="text-[16px] leading-[26px] text-[#4a3428] mb-4"
          style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Graba tu chisme anónima sobre tus memorias en Santa Fe de Antioquia.
          El sistema transcribirá y moderará automáticamente tu audio.
        </p>

        <div className="bg-[rgba(139,157,131,0.1)] rounded-[14px] p-4 mb-8 border border-[#8b9d83]">
          <div className="flex gap-3">
            <div className="text-[#8b9d83] shrink-0"></div>
            <p
              className="text-[13px] leading-[20px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              <strong>Importante:</strong> Cuando hagas clic en "Grabar", tu navegador te pedirá permiso para acceder al micrófono.
              Debes hacer clic en <strong>"Permitir"</strong> para poder grabar tu chisme.
            </p>
          </div>
        </div>

        {/* Recording Controls */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {waitingForPermission && (
            <div className="flex flex-col items-center gap-4 py-4">
              <Loader2 size={48} className="animate-spin text-[#677a5f]" />
              <div className="text-center">
                <p
                  className="text-xl font-bold mb-2 text-[#677a5f]"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Esperando permisos...
                </p>
                <p
                  className="text-sm text-[#6d5347]"
                  style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Por favor haz clic en "Permitir" cuando te lo pida el navegador
                </p>
              </div>
            </div>
          )}

          {!waitingForPermission && recordingState === "idle" && (
            <>
              <motion.button
                onClick={startRecording}
                className="flex items-center gap-3 bg-[#677a5f] hover:bg-[#4e5f47] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mic size={24} />
                Grabar Chisme
              </motion.button>
              {errorMessage && (
                <motion.button
                  onClick={() => setErrorMessage("")}
                  className="text-[14px] text-[#8b9d83] hover:text-[#677a5f] underline"
                  style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Cerrar mensaje de error
                </motion.button>
              )}
            </>
          )}

          {recordingState === "recording" && (
            <div className="flex flex-col items-center gap-4">
              {/* Recording Indicator */}
              <motion.div
                className="flex items-center gap-3 bg-[rgba(186,79,51,0.1)] border-2 border-[#ba4f33] px-6 py-3 rounded-full"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-3 h-3 bg-[#ba4f33] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span
                  className="text-lg font-bold text-[#ba4f33]"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  GRABANDO: {formatTime(recordingTime)}
                </span>
              </motion.div>

              {/* Stop Button */}
              <motion.button
                onClick={stopRecording}
                className="flex items-center gap-3 bg-[#ba4f33] hover:bg-[#a84732] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Square size={24} />
                Detener Grabación
              </motion.button>

              <p
                className="text-sm text-[#6d5347] text-center"
                style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                Habla cerca del micrófono...
              </p>
            </div>
          )}

          {recordingState === "stopped" && (
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[rgba(139,157,131,0.1)] border-2 border-[#8b9d83] px-6 py-3 rounded-full">
                <span
                  className="text-lg font-bold text-[#677a5f]"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Grabación lista ({formatTime(recordingTime)})
                </span>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={uploadStory}
                  className="flex items-center gap-3 bg-[#28555a] hover:bg-[#163d41] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Upload size={24} />
                  Enviar Chisme
                </motion.button>

                <motion.button
                  onClick={() => {
                    setRecordingState("idle");
                    setAudioBlob(null);
                    setRecordingTime(0);
                  }}
                  className="flex items-center gap-2 bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.8)] text-[#6d5347] px-6 py-4 rounded-full font-bold transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver a grabar
                </motion.button>
              </div>

              {audioBlob && (
                <div className="w-full max-w-md">
                  <p
                    className="text-sm text-[#6d5347] mb-2"
                    style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                  >
                    Vista previa:
                  </p>
                  <audio
                    controls
                    src={URL.createObjectURL(audioBlob)}
                    className="w-full"
                    style={{ filter: 'sepia(20%) saturate(80%)' }}
                  />
                </div>
              )}
            </div>
          )}

          {recordingState === "uploading" && (
            <div className="flex flex-col items-center gap-4 text-[#4a3428] py-4">
              <Loader2 size={48} className="animate-spin text-[#677a5f]" />
              <div className="text-center">
                <p
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Procesando tu chisme...
                </p>
                <p
                  className="text-sm text-[#6d5347]"
                  style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Transcribiendo audio y moderando contenido
                </p>
              </div>
            </div>
          )}

          {recordingState === "success" && (
            <motion.div
              className="flex flex-col items-center gap-3 text-[#677a5f]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <CheckCircle size={64} className="text-[#8b9d83]" />
              <span
                className="text-2xl font-bold text-[#677a5f]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                ¡Chisme Publicada!
              </span>
            </motion.div>
          )}

          {recordingState === "rejected" && (
            <motion.div
              className="flex flex-col items-center gap-3 text-[#ba4f33]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <XCircle size={64} className="text-[#ba4f33]" />
              <span
                className="text-2xl font-bold text-[#ba4f33]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Chisme Rechazada
              </span>
            </motion.div>
          )}
        </div>

        {/* Messages */}
        {responseMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-[14px] p-6 mb-4 border-2 ${
              recordingState === "success"
                ? "bg-[rgba(139,157,131,0.15)] border-[#8b9d83]"
                : "bg-[rgba(186,79,51,0.1)] border-[#ba4f33]"
            }`}
          >
            <p
              className={`text-[14px] leading-[24px] whitespace-pre-line ${
                recordingState === "success" ? "text-[#677a5f]" : "text-[#ba4f33]"
              }`}
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              {responseMessage}
            </p>
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[rgba(186,79,51,0.1)] border-2 border-[#ba4f33] rounded-[14px] p-6 mb-4"
          >
            <p
              className="text-[14px] leading-[24px] text-[#ba4f33] whitespace-pre-line"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              {errorMessage}
            </p>
          </motion.div>
        )}

        {(recordingState === "success" || recordingState === "rejected") && (
          <motion.button
            onClick={reset}
            className="w-full bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.8)] text-[#4a3428] px-6 py-3 rounded-full font-bold transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Grabar Nueva Chisme
          </motion.button>
        )}

        <motion.button
          onClick={onBack}
          className="absolute left-8 bottom-12 flex items-center gap-2 text-[#8b9d83] hover:text-[#677a5f] transition-colors"
          whileHover={{ x: -5 }}
        >
          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p3f037400} stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span
            className="text-sm font-medium"
            style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            Volver
          </span>
        </motion.button>
      </div>

      {/* Center Spine */}
      <div className="w-[32px] bg-gradient-to-r from-[rgba(74,52,40,0.2)] to-[rgba(74,52,40,0.2)] via-[rgba(109,83,71,0.5)]" />

      {/* Right Page */}
      <div className="w-1/2 bg-[#f2e8dc] relative px-12 py-12">
        <h3
          className="text-[24px] font-semibold leading-[36px] text-[#4a3428] mb-6"
          style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Cómo funciona
        </h3>

        <div className="space-y-6">
          <div className="bg-[rgba(103,122,95,0.1)] rounded-[14px] p-4 border border-[#677a5f]">
            <h4
              className="text-[16px] font-semibold text-[#677a5f] mb-2"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Permisos del Micrófono
            </h4>
            <p
              className="text-[13px] leading-[20px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              La primera vez que grabes, tu navegador te pedirá permiso para usar el micrófono.
              Haz clic en <strong>"Permitir"</strong> para continuar. Tus grabaciones son anónimas
              y solo se usan para transcripción.
            </p>
          </div>

          <div>
            <h4
              className="text-[18px] font-semibold text-[#677a5f] mb-2"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              1. Graba
            </h4>
            <p
              className="text-[14px] leading-[21px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Comparte tus recuerdos y memorias de Santa Fe de Antioquia de forma anónima.
              Habla con claridad cerca del micrófono.
            </p>
          </div>

          <div>
            <h4
              className="text-[18px] font-semibold text-[#677a5f] mb-2"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              2. Transcripción Automática
            </h4>
            <p
              className="text-[14px] leading-[21px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Nuestra IA transcribe tu audio y genera automáticamente un título y resumen.
            </p>
          </div>

          <div>
            <h4
              className="text-[18px] font-semibold text-[#677a5f] mb-2"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              3. Moderación
            </h4>
            <p
              className="text-[14px] leading-[21px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              El contenido es revisado para asegurar que sea apropiado antes de publicarse.
            </p>
          </div>

          <div>
            <h4
              className="text-[18px] font-semibold text-[#677a5f] mb-2"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              4. Publicación
            </h4>
            <p
              className="text-[14px] leading-[21px] text-[#6d5347] mb-2"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Si es aprobada, tu chisme será visible para todos en el{" "}
              <span className="font-semibold text-[#a84732]">Historias</span>.
            </p>
            <p
              className="text-[13px] leading-[20px] text-[#8b9d83] italic"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Navega al Historias desde el índice para ver todas las chismes de la comunidad.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
