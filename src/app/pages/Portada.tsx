import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame1 from "figma:asset/0ff69a7cf933d5a9835d6e9213694f5f9b55d2bf.png";
import { useHandTracking } from "../context/HandTrackingContext";
import { useEffect, useRef } from "react";

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
      className="bg-[#f6e5cf] relative w-full h-full flex cursor-pointer"
      onClick={() => navigate("/indice")}
    >
      {/* Página izquierda - Vacía/Decorativa */}
      <div className="w-1/2 relative flex items-center justify-center p-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-[#d4654f] rounded-full" />
          <div className="absolute bottom-20 left-10 w-80 h-80 border-2 border-[#8b9d83] rounded-full" />
        </div>
      </div>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/5"></div>
      </div>

      {/* Página derecha - Contenido */}
      <div className="w-1/2 relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center justify-center relative w-full h-full"
        >
          <div className="relative w-[177px] h-[146px] mb-6">
            <img 
              alt="Logo MaxiLibro" 
              className="absolute h-full left-[-9.76%] max-w-none top-[0.1%] w-[114.39%] object-contain" 
              src={imgFrame1} 
            />
          </div>
          
          <h1 
            className="font-['Fraunces',serif] font-bold text-[32px] text-black"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            MaxiLibro
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 font-['Commissioner',sans-serif] text-[14px] text-[#8b9d83]"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Toca para comenzar
        </motion.p>
      </div>
    </motion.div>
  );
}