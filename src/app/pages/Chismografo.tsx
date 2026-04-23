import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame7 from "figma:asset/3d917c6ae26f75a48b88a88f079126d00a2354ba.png";

export default function Chismografo() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#4a3428] relative w-full h-full flex"
    >
      {/* Página izquierda */}
      <div className="w-1/2 bg-gradient-to-br from-[#f2e8dc] to-[#faf6f0] relative overflow-hidden p-12 flex flex-col items-center justify-center">
        <motion.div
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white mb-8"
        >
          <img src={imgFrame7} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-['Fraunces',serif] font-bold text-[48px] text-[#677a5f]"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Chismógrafo
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-['Bricolage_Grotesque',sans-serif] font-medium text-[24px] text-[#8b9d83] mt-3"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Tu historia también importa
        </motion.p>

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
      <div className="w-1/2 bg-gradient-to-br from-[#faf6f0] to-[#f2e8dc] relative overflow-hidden p-12 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-[500px]"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-['Commissioner',sans-serif] text-[18px] text-[#4a3428] leading-relaxed mb-6"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            El Chismógrafo es un espacio abierto para que tú también seas parte de esta memoria viva. Comparte tus recuerdos, tus historias familiares, las anécdotas que te contaron tus abuelas.
          </motion.p>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border-2 border-[#677a5f]/20 shadow-lg mb-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#677a5f]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#677a5f" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <p className="font-['Commissioner',sans-serif] text-[12px] text-[#4a3428]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
                  Comparte
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#8b9d83]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b9d83" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <p className="font-['Commissioner',sans-serif] text-[12px] text-[#4a3428]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
                  Conecta
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#d4654f]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4654f" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <p className="font-['Commissioner',sans-serif] text-[12px] text-[#4a3428]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
                  Preserva
                </p>
              </motion.div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="pt-2"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#677a5f] to-[#8b9d83] text-white px-6 py-3 rounded-full shadow-lg w-full justify-center cursor-pointer" onClick={() => navigate("/chismografo/cabina")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <span
                  className="font-['Fraunces',serif] font-bold text-[18px]"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Usa el dispositivo
                </span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-['Commissioner',sans-serif] text-[14px] text-[#6d5347] italic leading-relaxed text-center"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            "Cada historia compartida es un hilo que teje la gran red de nuestra memoria colectiva."
          </motion.p>
        </motion.div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/")}
          className="absolute bottom-8 right-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#677a5f] hover:text-[#8b9d83] transition-colors flex items-center gap-2"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Inicio
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
