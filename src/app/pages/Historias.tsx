import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Calendar, Play, Loader2 } from "lucide-react";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import svgPaths from "../../imports/svg-ffn9u4s4vz";

interface Story {
  id: string;
  fecha: string;
  titulo: string;
  resumen: string;
  transcripcion: string;
  etiquetas: string[];
  audio_url: string;
}

export default function Chismes() {
  const navigate = useNavigate();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8c79cdcb/stories`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();
      setStories(data.stories || []);
    } catch (error) {
      console.error("Error al cargar chismes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      key="mapa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex"
    >
      {/* Left Page */}
      <div className="w-1/2 bg-[#f2e8dc] relative px-12 py-12 overflow-y-auto">
        <h2
          className="text-[32px] font-bold leading-[48px] text-[#677a5f] mb-4"
          style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Chismes
        </h2>

        <p
          className="text-[16px] leading-[26px] text-[#4a3428] mb-8"
          style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Chismes anónimas de la comunidad de Santa Fe de Antioquia
        </p>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 size={48} className="animate-spin text-[#677a5f] mb-4" />
            <p
              className="text-[14px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Cargando memorias...
            </p>
          </div>
        ) : stories.length === 0 ? (
          <div className="bg-[rgba(255,255,255,0.6)] rounded-[14px] p-8 text-center">
            <p
              className="text-[16px] leading-[26px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Aún no hay chismes publicadas. ¡Sé el primero en compartir!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-[rgba(255,255,255,0.6)] rounded-[14px] p-4 cursor-pointer"
                onClick={() => setSelectedStory(story)}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.8)", scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#677a5f] flex items-center justify-center text-white font-bold shrink-0"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-[18px] font-semibold leading-[27px] text-[#677a5f] mb-1"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      {story.titulo}
                    </h4>
                    <p
                      className="text-[13px] leading-[19.5px] text-[#6d5347] line-clamp-2 mb-2"
                      style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      {story.resumen}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-[#8b9d83]">
                      <Calendar size={12} />
                      <span style={{ fontFamily: 'Commissioner, sans-serif' }}>
                        {new Date(story.fecha).toLocaleDateString("es-ES")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.button
          onClick={() => navigate("/indice")}
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

      {/* Right Page - Story Detail */}
      <div className="w-1/2 bg-[#f2e8dc] relative px-12 py-12 overflow-y-auto">
        {selectedStory ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3
              className="text-[28px] font-bold leading-[42px] text-[#677a5f]"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              {selectedStory.titulo}
            </h3>

            <div className="flex items-center gap-2 text-[14px] text-[#6d5347]">
              <Calendar size={16} />
              <span style={{ fontFamily: 'Commissioner, sans-serif' }}>
                {new Date(selectedStory.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div>
              <h4
                className="text-[18px] font-semibold text-[#4a3428] mb-3"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Resumen
              </h4>
              <p
                className="text-[16px] leading-[26px] text-[#4a3428]"
                style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                {selectedStory.resumen}
              </p>
            </div>

            <div>
              <h4
                className="text-[18px] font-semibold text-[#4a3428] mb-3"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Transcripción
              </h4>
              <p
                className="text-[14px] leading-[24px] text-[#6d5347] whitespace-pre-wrap"
                style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                {selectedStory.transcripcion}
              </p>
            </div>

            {selectedStory.etiquetas && selectedStory.etiquetas.length > 0 && (
              <div>
                <h4
                  className="text-[18px] font-semibold text-[#4a3428] mb-3"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Etiquetas
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedStory.etiquetas.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#ddb198] text-[#802c16] px-3 py-1 rounded-full text-xs font-bold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedStory.audio_url && (
              <div>
                <h4
                  className="text-[18px] font-semibold text-[#4a3428] mb-3"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Audio
                </h4>
                <audio
                  controls
                  src={selectedStory.audio_url}
                  className="w-full"
                  style={{ filter: 'sepia(20%) saturate(80%)' }}
                />
              </div>
            )}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-[#677a5f] flex items-center justify-center text-white mb-4 mx-auto"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <p
                className="text-[16px] leading-[26px] text-[#6d5347]"
                style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                Selecciona una chisme para leer más
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
