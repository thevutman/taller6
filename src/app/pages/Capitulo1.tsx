import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame3 from "figma:asset/9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgImageWithFallback from "figma:asset/b49eb69f990cadcdbde3956eac2846821db47e1d.png";
import imgImageWithFallback1 from "figma:asset/1cd4ced756ff1a317b76b37d4eb847d7ac8cae62.png";
import imgImageWithFallback2 from "figma:asset/e395b2f386f5f9bf079a8b7420510257e4f7dae0.png";
import imgImageWithFallback3 from "figma:asset/f11564d4e691bc230a87ceb9c54e731ff2d2fdef.png";
import imgImageWithFallback4 from "figma:asset/6a4c0be4fccbc1eb2840f564361721ea80123897.png";
import imgImageWithFallback5 from "figma:asset/42c39fe09aeea04cd165f4520dc7554335f86107.png";

export default function Capitulo1() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#f6e5cf] relative w-full h-full flex overflow-hidden"
    >
      {/* Página izquierda */}
      <div className="w-1/2 relative overflow-hidden p-10 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto pr-4 space-y-6">
          
          {/* Title Area */}
          <div className="flex justify-between items-start">
            <div>
              <h1
                className="font-['Fraunces',serif] font-bold text-[48px] text-[#683e07] leading-tight"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Capitulo 1
              </h1>
              <p
                className="font-['Fraunces',serif] font-semibold text-[20px] text-[#b3782e]"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Matronas : Esencia del territorio
              </p>
            </div>
            <div className="w-16 h-16 flex-shrink-0">
              <img src={imgFrame3} alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Big Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            <img src={imgImageWithFallback} alt="Matrona" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text blocks */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#fff1df] rounded-[20px] p-6 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
          >
            <p
              className="font-['Commissioner',sans-serif] font-medium text-[15px] text-[#683e07] leading-relaxed whitespace-pre-wrap"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              En Santa Fe hay mujeres que no aparecen en los libros de historia. No tienen estatua en el parque ni retrato en el museo. Pero son ellas las que sostuvieron los hogares, los saberes y los sabores de este territorio
              {"\n\n"}
              Las llamamos matronas. No por un título, sino por lo que hicieron: criar hijos propios y ajenos, cocinar con leña antes del amanecer, conocer las plantas que sanan, atender partos cuando no había hospital cerca, cargar el peso de la familia sin que nadie lo contara..
            </p>
          </motion.div>

        </div>

        {/* Botón Volver */}
        <button
          onClick={() => navigate("/indice")}
          className="pt-4 font-['Commissioner',sans-serif] font-medium text-[16px] text-[#8b9d83] hover:text-[#677a5f] transition-colors flex items-center gap-2"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667">
            <path d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667"/>
          </svg>
          Volver al índice
        </button>
      </div>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/5"></div>
      </div>

      {/* Página derecha */}
      <div className="w-1/2 relative overflow-hidden p-10 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto pl-4 space-y-6">
          
          {/* Collage de imágenes */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-[14px] overflow-hidden aspect-square shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <img src={imgImageWithFallback1} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-[14px] overflow-hidden aspect-square shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <img src={imgImageWithFallback2} alt="" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="col-span-2 rounded-[14px] overflow-hidden h-[160px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <img src={imgImageWithFallback3} alt="" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="rounded-[14px] overflow-hidden aspect-square shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <img src={imgImageWithFallback4} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="rounded-[14px] overflow-hidden aspect-square shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <img src={imgImageWithFallback5} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text block 2 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#fff1df] rounded-[20px] p-6 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] mb-6"
          >
            <p
              className="font-['Commissioner',sans-serif] font-medium text-[15px] text-[#683e07] leading-relaxed"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Su historia no está escrita. Vive en la memoria de quienes las conocieron, en las manos que aprendieron viendo, en las recetas que se repiten sin recetario.
            </p>
            <p
              className="font-['Commissioner',sans-serif] font-medium text-[15px] text-[#b3782e] mt-4"
              style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              Este es un capitulo para ellas
            </p>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#4a3428] leading-relaxed"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            El museo <span className="text-[#ba4f33]">Juan del Corral</span> tuvo una exposición que lo dijo sin rodeos: detrás de cada hombre importante, de cada ley, de cada obra, siempre hubo una mujer que lo mantuvo. Una madre que cuidó, que cocinó, que sostuvo. Esa figura — la matriarca del hogar — es una de las cosas más arraigadas de Antioquia, y Santa Fe no es la excepción.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-[#fff1df] rounded-[14px] p-6 border-l-4 border-[#ba4f33]"
          >
            <h3
              className="font-['Fraunces',serif] font-semibold text-[24px] text-[#ba4f33] mb-4"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Sus oficios tradicionales
            </h3>
            <ul className="space-y-3">
              {[
                "Parteras y cuidadoras de la vida",
                "Cocineras tradicionales y guardianas de recetas",
                "Hierbateras y conocedoras de medicina ancestral",
                "Tejedoras y artesanas",
                "Narradora de historias y tradiciones orales"
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#683e07] flex items-start gap-2"
                  style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  <span className="text-[#e07a5f] mt-0.5 text-[18px] leading-none">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col items-center justify-center pt-4"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white mb-4 relative">
              <img src={imgFrame3} alt="" className="w-full h-full object-cover" />
            </div>
            <p
              className="font-['Bricolage_Grotesque',sans-serif] font-medium text-[20px] text-[#ba4f33] text-center leading-snug"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              "Guardianas de la<br/>memoria viva"
            </p>
          </motion.div>

        </div>

        {/* Botón Siguiente */}
        <div className="flex justify-end pt-4">
          <button
            onClick={() => navigate("/capitulo-2")}
            className="font-['Commissioner',sans-serif] font-medium text-[16px] text-[#d4654f] hover:text-[#ba4f33] transition-colors flex items-center gap-2"
            style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
          >
            Siguiente capítulo
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667">
              <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}