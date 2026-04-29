import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame5 from "figma:asset/5011e51ef446d547c8edf6af523f2ba94ccbe971.png";
import { useHandTracking } from "../context/HandTrackingContext";
import { useEffect, useRef } from "react";

const hierbas = [
  { nombre: "Yerbabuena", uso: "Digestión y calma" },
  { nombre: "Manzanilla", uso: "Sanación del alma" },
  { nombre: "Toronjil", uso: "Serenidad interior" },
  { nombre: "Sábila", uso: "Cicatrización" },
  { nombre: "Paico", uso: "Limpieza y renovación" }
];

export default function Capitulo3() {
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
          navigate("/mapa"); // Pasamos de página
        }
        if (dragDistance < -120) {
          isDragging.current = false; // Soltamos el gesto
          navigate("/capitulo-2"); // Pasamos de página
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
            <img src={imgFrame5} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1
              className="font-['Fraunces',serif] font-bold text-[32px] text-[#8b9d83] leading-none mb-1"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Capitulo 3
            </h1>
            <p
              className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#6d5347]"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Herbarias : Raices de bienestar
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
            Las <span className="font-semibold text-[#8b9d83]">herbarias</span> son las custodias del conocimiento medicinal ancestral. En sus manos, las plantas se transforman en remedios que curan el cuerpo y el espíritu.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-['Commissioner',sans-serif] text-[16px] text-[#4a3428] leading-relaxed"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            Este saber, transmitido de generación en generación, representa una medicina integral que entiende la salud como armonía entre el ser humano y la naturaleza.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#8b9d83]/10 to-transparent rounded-xl p-5"
          >
            <p
              className="font-['Commissioner',sans-serif] text-[15px] text-[#4a3428] leading-relaxed italic"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              "En cada hoja, en cada raíz, vive la sabiduría de nuestras abuelas."
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
        {/* Plantas de sanación */}
        <div className="flex-1">
          <h3
            className="font-['Fraunces',serif] font-semibold text-[24px] text-[#8b9d83] mb-5"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Plantas de Sanación
          </h3>
          
          <div className="space-y-3">
            {hierbas.map((hierba, index) => (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 bg-white/80 rounded-lg p-4"
              >
                <div className="w-7 h-7 bg-[#8b9d83]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b9d83" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4
                    className="font-['Fraunces',serif] font-semibold text-[15px] text-[#8b9d83]"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    {hierba.nombre}
                  </h4>
                  <p
                    className="font-['Commissioner',sans-serif] text-[13px] text-[#6d5347]"
                    style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                  >
                    {hierba.uso}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src={imgFrame5} alt="" className="w-full h-full object-cover" />
            </div>
            <p
              className="font-['Bricolage_Grotesque',sans-serif] font-medium text-[16px] text-[#8b9d83] italic"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              "Sabiduría ancestral <br />que sana y conecta"
            </p>
          </motion.div>
        </div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/mapa")}
          className="absolute bottom-8 right-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#8b9d83] hover:text-[#677a5f] transition-colors flex items-center gap-2"
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
