import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame4 from "figma:asset/f2aa0910921eceacefaa05b4426f8f5c745d49ec.png";
import { useHandTracking } from "../context/HandTrackingContext";
import { useEffect, useRef } from "react";

const recetas = [
  {
    nombre: "Arepa de Chócolo",
    descripcion: "Tradición ancestral en cada bocado",
    slug: "arepa-de-chocolo"
  },
  {
    nombre: "Mazamorra Antioqueña",
    descripcion: "El alma del campo en un plato",
    slug: null
  },
  {
    nombre: "Natilla Santafereña",
    descripcion: "Dulzura de celebración familiar",
    slug: null
  },
  {
    nombre: "Buñuelos de Maíz",
    descripcion: "Crujientes memorias navideñas",
    slug: null
  }
];

export default function Capitulo2() {
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
          navigate("/capitulo-3"); // Pasamos de página
        }
        if (dragDistance < -120) {
          isDragging.current = false; // Soltamos el gesto
          navigate("/capitulo-1"); // Pasamos de página
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
      className="bg-[#4a3428] relative w-full h-full flex"
    >
      {/* Página izquierda */}
      <div className="w-1/2 bg-[#f2e8dc] relative overflow-hidden p-12">
        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
            <img src={imgFrame4} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1
              className="font-['Fraunces',serif] font-bold text-[32px] text-[#d9a679] leading-none mb-1"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Capitulo 2
            </h1>
            <p
              className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#6d5347]"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Cocina de relatos
            </p>
          </div>
        </div>

        {/* Contenido página izquierda */}
        <div className="pr-4 space-y-5">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-['Commissioner',sans-serif] text-[16px] text-[#4a3428] leading-relaxed"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            En la cocina de las <span className="font-semibold text-[#d9a679]">matronas</span>, cada receta es un relato que se transmite de generación en generación. El fogón de leña se convierte en el corazón del hogar.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-['Commissioner',sans-serif] text-[16px] text-[#4a3428] leading-relaxed"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            Las mujeres de Santa Fe de Antioquia han preservado recetas centenarias, no solo como alimento, sino como patrimonio vivo que conecta el pasado con el presente.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#d9a679]/10 to-transparent rounded-xl p-5"
          >
            <p
              className="font-['Commissioner',sans-serif] text-[15px] text-[#4a3428] leading-relaxed italic"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              "La cocina es el espacio donde las mujeres escriben la historia del pueblo."
            </p>
          </motion.div>
        </div>

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
      <div className="w-1/2 bg-[#f2e8dc] relative overflow-hidden p-12 flex flex-col">
        {/* Recetas */}
        <div className="flex-1">
          <h3
            className="font-['Fraunces',serif] font-semibold text-[24px] text-[#d9a679] mb-5"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Recetas del Alma
          </h3>
          
          <div className="space-y-3">
            {recetas.map((receta, index) => (
              <motion.button
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => receta.slug && navigate(`/receta/${receta.slug}`)}
                disabled={!receta.slug}
                className={`w-full bg-white/80 rounded-lg p-4 transition-all text-left ${
                  receta.slug 
                    ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer hover:bg-white hover:border-2 hover:border-[#d9a679]' 
                    : 'opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4
                      className="font-['Fraunces',serif] font-semibold text-[17px] text-[#d9a679] mb-1"
                      style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      {receta.nombre}
                    </h4>
                    <p
                      className="font-['Commissioner',sans-serif] text-[13px] text-[#6d5347] italic"
                      style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      {receta.descripcion}
                    </p>
                  </div>
                  {receta.slug && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9a679" strokeWidth="2" className="flex-shrink-0 ml-3">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src={imgFrame4} alt="" className="w-full h-full object-cover" />
            </div>
            <p
              className="font-['Bricolage_Grotesque',sans-serif] font-medium text-[16px] text-[#d9a679] italic"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              "Sabores que cuentan <br />historias del alma"
            </p>
          </motion.div>
        </div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/capitulo-3")}
          className="absolute bottom-8 right-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#d9a679] hover:text-[#b8875a] transition-colors flex items-center gap-2"
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
