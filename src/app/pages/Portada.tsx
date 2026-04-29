import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame1 from "figma:asset/0ff69a7cf933d5a9835d6e9213694f5f9b55d2bf.png";
import { useHandTracking } from "../context/HandTrackingContext";
import { useEffect, useRef } from "react";
import { PlantaDibujada, FlorDibujada, EstrellaDibujada, LunaDibujada, MarcoPaginaDibujado } from "../components/ElementosDibujados";


export default function Portada() {
  const navigate = useNavigate();
  const { cursor, isPinching } = useHandTracking();
  
  // Referencias para el gesto
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    // Lógica del gesto: "Pellizcar + Arrastrar a la Izquierda"
    if (isPinching) {
      if (!isDragging.current) {
        // Acaba de hacer el pellizco: Guardamos dónde empezó
        isDragging.current = true;
        startX.current = cursor.x;
      } else {
        // Mantiene el pellizco presionado: Medimos cuánto lo ha movido
        // Si startX (ej: 500) menos cursor.x (ej: 300) es positivo, se está moviendo a la izquierda
        const dragDistance = startX.current - cursor.x;

        // Si arrastró más de 120 píxeles hacia la izquierda
        if (dragDistance > 120) {
          isDragging.current = false; // Soltamos el gesto
          navigate("/indice"); // Pasamos de página
        }
      }
    } else {
      // Si abre los dedos, cancelamos el arrastre
      isDragging.current = false;
    }
  }, [cursor.x, isPinching, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f6e5cf] relative w-full h-full flex cursor-pointer overflow-hidden"
      onClick={() => navigate("/indice")}
    >
      {/* Página izquierda - Instrucciones de uso */}
      <MarcoPaginaDibujado className="w-1/2 relative flex flex-col items-center justify-center p-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-['Fraunces',serif] font-bold text-[28px] text-[#3e0c56] mb-8 text-center"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Cómo usar este libro
        </motion.h2>

        {/* Instrucciones visuales */}
        <div className="flex flex-col gap-8 w-full max-w-md">
          {/* Pasar Página */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="/src/imports/WhatsApp_Image_2026-04-29_at_5.12.21_PM_(2).jpeg"
                alt="Pasar Página"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-['Commissioner',sans-serif] text-[16px] text-[#3e0c56] leading-relaxed" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
              Desliza para pasar de página
            </p>
          </motion.div>

          {/* Scroll de la página */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="/src/imports/WhatsApp_Image_2026-04-29_at_5.12.21_PM_(1).jpeg"
                alt="Scroll"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-['Commissioner',sans-serif] text-[16px] text-[#3e0c56] leading-relaxed" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
              Usa dos dedos para hacer scroll
            </p>
          </motion.div>

          {/* Señala para seleccionar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="/src/imports/WhatsApp_Image_2026-04-29_at_5.12.21_PM.jpeg"
                alt="Seleccionar"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-['Commissioner',sans-serif] text-[16px] text-[#3e0c56] leading-relaxed" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
              Toca para seleccionar
            </p>
          </motion.div>
        </div>

        {/* Decoraciones sutiles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-8"
        >
          <PlantaDibujada className="w-12 h-16 opacity-30" color="#e07a5f" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute top-8 right-8"
        >
          <EstrellaDibujada className="w-10 h-10 opacity-30" color="#3e0c56" />
        </motion.div>
      </MarcoPaginaDibujado>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/5"></div>
      </div>

      {/* Página derecha - Contenido */}
      <MarcoPaginaDibujado className="w-1/2 relative flex flex-col items-center justify-center">
        {/* Decoraciones alrededor del título */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute top-20 left-1/4"
        >
          <FlorDibujada color="#3e0c56" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-20 right-1/4"
        >
          <EstrellaDibujada color="#e07a5f" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center justify-center relative w-full h-full"
        >
          {/* Logo con decoración */}
          <div className="relative w-[177px] h-[146px] mb-6">
            <img
              alt="Logo MaxiLibro"
              className="absolute h-full left-[-9.76%] max-w-none top-[0.1%] w-[114.39%] object-contain"
              src={imgFrame1}
            />
            {/* Círculo decorativo morado alrededor del logo */}
            <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] opacity-20" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#3e0c56" strokeWidth="2" strokeDasharray="8,12" />
              <circle cx="150" cy="150" r="100" fill="none" stroke="#e07a5f" strokeWidth="1.5" strokeDasharray="4,8" />
            </svg>
          </div>

          <h1
            className="font-['Fraunces',serif] font-bold text-[32px] text-[#3e0c56]"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            MaxiLibro
          </h1>

          {/* Línea decorativa debajo del título */}
          <svg className="w-48 mt-4" height="6" viewBox="0 0 200 6">
            <path d="M10,3 Q100,1 190,3" stroke="#3e0c56" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
            <circle cx="15" cy="3" r="3" fill="#e07a5f" opacity="0.4" />
            <circle cx="185" cy="3" r="3" fill="#3e0c56" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 font-['Commissioner',sans-serif] text-[14px] text-[#3e0c56]"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          ~ Toca para comenzar ~
        </motion.p>

        {/* Plantas en las esquinas inferiores */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-20 left-8"
        >
          <PlantaDibujada className="w-16 h-20" color="#123f34" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-20 right-8"
        >
          <PlantaDibujada className="w-16 h-20" color="#e07a5f" />
        </motion.div>
      </MarcoPaginaDibujado>
    </motion.div>
  );
}