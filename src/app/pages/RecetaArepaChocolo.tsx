import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function RecetaArepaChocolo() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#4a3428] relative w-full h-full flex"
    >
      {/* Página izquierda - Entrevista */}
      <div className="w-1/2 bg-[#f2e8dc] relative overflow-hidden">
        <div className="h-full overflow-y-auto p-12">
          {/* Header con foto */}
          <div className="bg-gradient-to-b from-[#d9a679] to-[#d9a679]/80 -mx-12 -mt-12 px-12 pt-12 pb-8 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span 
                className="font-['Commissioner',sans-serif] font-medium text-[12px] text-white/90 uppercase tracking-wider"
                style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
              >
                Recetas del Alma
              </span>
            </div>
            
            <h1
              className="font-['Fraunces',serif] font-bold text-[42px] text-white leading-none"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Arepa de Chócolo
            </h1>
          </div>

          {/* Perfil de la matrona */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-md flex-shrink-0 border-4 border-[#d9a679]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761772593493-23a630a333b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjB3b21hbiUyMGNvb2tpbmclMjB0cmFkaXRpb25hbCUyMGtpdGNoZW58ZW58MXx8fHwxNzc2MzYyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Doña Rosa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2
                  className="font-['Fraunces',serif] font-bold text-[22px] text-[#d9a679] mb-1"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Doña Rosa María Pérez
                </h2>
                <p
                  className="font-['Commissioner',sans-serif] text-[14px] text-[#6d5347]"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Matrona y cocinera tradicional
                </p>
                <p
                  className="font-['Commissioner',sans-serif] text-[12px] text-[#8b9d83]"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Santa Fe de Antioquia • 72 años
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-[#d9a679]/20 mb-5"></div>

            {/* Entrevista */}
            <div className="space-y-5">
              <div>
                <p
                  className="font-['Commissioner',sans-serif] font-semibold text-[12px] text-[#8b9d83] mb-2 uppercase tracking-wider"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  ¿De dónde viene esta receta?
                </p>
                <p
                  className="font-['Commissioner',sans-serif] text-[14px] text-[#4a3428] leading-relaxed"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  "Esta receta me la enseñó mi abuela cuando yo tenía apenas ocho años. Ella decía que el secreto estaba en el amor con que se muele el chócolo."
                </p>
              </div>

              <div>
                <p
                  className="font-['Commissioner',sans-serif] font-semibold text-[12px] text-[#8b9d83] mb-2 uppercase tracking-wider"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  ¿Qué significa para usted?
                </p>
                <p
                  className="font-['Commissioner',sans-serif] text-[14px] text-[#4a3428] leading-relaxed"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  "Cada vez que preparo estas arepas siento que mi abuela está aquí conmigo, guiando mis manos. Es mantener viva su memoria."
                </p>
              </div>

              <div>
                <p
                  className="font-['Commissioner',sans-serif] font-semibold text-[12px] text-[#8b9d83] mb-2 uppercase tracking-wider"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  ¿Cuál es el secreto?
                </p>
                <p
                  className="font-['Commissioner',sans-serif] text-[14px] text-[#4a3428] leading-relaxed"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  "El maíz fresco del mercado, molerlo a mano con paciencia, y cocinarlas en fogón de leña. Pero lo más importante es hacerlas con cariño."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/capitulo-2")}
          className="absolute bottom-8 left-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#8b9d83] hover:text-[#677a5f] transition-colors flex items-center gap-2 z-20"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver
        </button>
      </div>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20"></div>
      </div>

      {/* Página derecha - Receta */}
      <div className="w-1/2 bg-[#f2e8dc] relative overflow-hidden">
        <div className="h-full overflow-y-auto p-12 pb-20">
          {/* Ingredientes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
            <h3
              className="font-['Fraunces',serif] font-bold text-[24px] text-[#d9a679] mb-5"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Ingredientes
            </h3>
            
            <div className="space-y-2">
              {[
                { cantidad: "6 mazorcas", ingrediente: "de chócolo tierno" },
                { cantidad: "1/2 taza", ingrediente: "de leche" },
                { cantidad: "2 cucharadas", ingrediente: "de mantequilla" },
                { cantidad: "1 cucharada", ingrediente: "de azúcar" },
                { cantidad: "1 cucharadita", ingrediente: "de sal" },
                { cantidad: "1/4 taza", ingrediente: "de queso campesino" },
                { cantidad: "Al gusto", ingrediente: "mantequilla para cocinar" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-1">
                  <div className="w-1.5 h-1.5 bg-[#d9a679] rounded-full flex-shrink-0 mt-2"></div>
                  <div className="flex-1">
                    <span
                      className="font-['Commissioner',sans-serif] font-semibold text-[14px] text-[#d9a679]"
                      style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      {item.cantidad}
                    </span>
                    <span
                      className="font-['Commissioner',sans-serif] text-[14px] text-[#4a3428] ml-2"
                      style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      {item.ingrediente}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preparación */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
            <h3
              className="font-['Fraunces',serif] font-bold text-[24px] text-[#d9a679] mb-5"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Preparación
            </h3>
            
            <div className="space-y-4">
              {[
                "Desgrana las mazorcas de chócolo tierno. Reserva los granos.",
                "Muele los granos hasta obtener una masa suave y cremosa.",
                "Mezcla con la leche, mantequilla, azúcar, sal y queso.",
                "Amasa bien hasta integrar todos los ingredientes.",
                "Forma las arepas con las manos (aproximadamente 1.5 cm de grosor).",
                "Calienta un budare a fuego medio con mantequilla.",
                "Cocina 5-7 minutos por lado hasta dorar.",
                "Sirve calientes con mantequilla o queso fresco."
              ].map((paso, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#d9a679] text-white rounded-full flex items-center justify-center">
                    <span
                      className="font-['Commissioner',sans-serif] font-bold text-[12px]"
                      style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="font-['Commissioner',sans-serif] text-[13px] text-[#4a3428] leading-relaxed pt-0.5"
                    style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                  >
                    {paso}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Consejo */}
          <div className="bg-gradient-to-r from-[#d9a679]/20 to-[#d9a679]/10 rounded-xl p-5 border-2 border-[#d9a679]/30">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9a679" strokeWidth="2" className="flex-shrink-0 mt-1">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <div>
                <h4
                  className="font-['Fraunces',serif] font-semibold text-[16px] text-[#d9a679] mb-2"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Consejo de Doña Rosa
                </h4>
                <p
                  className="font-['Commissioner',sans-serif] text-[13px] text-[#4a3428] leading-relaxed"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  "Si la masa queda muy aguada, añade harina de maíz. El chócolo debe ser fresco, del mercado de la mañana."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <button
          onClick={() => navigate("/indice")}
          className="absolute bottom-8 right-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#d9a679] hover:text-[#b8875a] transition-colors flex items-center gap-2 z-20"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          Índice
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
