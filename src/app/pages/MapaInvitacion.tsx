import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame6 from "figma:asset/01a0cc64347219188cbf2427a541bf93e703b8b5.png";

export default function MapaInvitacion() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#4a3428] relative w-full h-full flex"
    >
      {/* Página izquierda */}
      <div className="w-1/2 bg-gradient-to-br from-[#f2e8dc] to-[#faf6f0] relative overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white"
        >
          <img src={imgFrame6} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/indice")}
          className="absolute bottom-8 left-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#8b9d83] hover:text-[#677a5f] transition-colors flex items-center gap-2"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Índice
        </button>
      </div>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20"></div>
      </div>

      {/* Página derecha */}
      <div className="w-1/2 bg-gradient-to-br from-[#faf6f0] to-[#f2e8dc] relative overflow-hidden flex items-center justify-center p-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-[500px]"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-['Fraunces',serif] font-bold text-[48px] text-[#a84732] mb-6 leading-tight"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Mapa de Memorias
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-5 mb-10"
          >
            <p
              className="font-['Commissioner',sans-serif] text-[18px] text-[#4a3428] leading-relaxed"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Un viaje geográfico y emocional por los territorios donde habitan las matronas de Santa Fe de Antioquia.
            </p>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border-2 border-[#a84732]/20 shadow-lg">
              <p
                className="font-['Bricolage_Grotesque',sans-serif] font-medium text-[22px] text-[#a84732] mb-3"
                style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                Te invitamos a explorar
              </p>
              <p
                className="font-['Commissioner',sans-serif] text-[16px] text-[#6d5347] leading-relaxed"
                style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                Un mapa físico e interactivo que te permitirá descubrir los lugares, las historias y las voces de quienes mantienen viva la esencia de nuestro territorio.
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#a84732] to-[#d4654f] text-white px-6 py-3 rounded-full shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span
                  className="font-['Fraunces',serif] font-bold text-[18px]"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Acércate al mapa interactivo
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/chismografo")}
          className="absolute bottom-8 right-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#a84732] hover:text-[#d4654f] transition-colors flex items-center gap-2"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Siguiente
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
