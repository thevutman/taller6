import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgFrame3 from "figma:asset/9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgFrame4 from "figma:asset/f2aa0910921eceacefaa05b4426f8f5c745d49ec.png";
import imgFrame5 from "figma:asset/5011e51ef446d547c8edf6af523f2ba94ccbe971.png";
import imgFrame7 from "figma:asset/3d917c6ae26f75a48b88a88f079126d00a2354ba.png";
import imgFrame6 from "figma:asset/01a0cc64347219188cbf2427a541bf93e703b8b5.png";
import imgFrame8 from "figma:asset/a84644243e844c20856abffa5e376e3f3ed4e17a.png";
import BotonGesto from "../components/ui/BotonGesto";
import { useHandTracking } from "../context/HandTrackingContext";
import { useEffect, useRef } from "react";

const menuItems = [
  {
    number: 1,
    title: "Capitulo 1",
    subtitle: "Matronas : Esencia del territorio",
    icon: imgFrame3,
    route: "/capitulo-1",
    color: "#b3782e"
  },
  {
    number: 2,
    title: "Capitulo 2",
    subtitle: "Cocina de relatos : Historias que saben a territorio",
    icon: imgFrame4,
    route: "/capitulo-2",
    color: "#802c16"
  },
  {
    number: 3,
    title: "Capitulo 3",
    subtitle: "Herbarias : Raices de bienestar",
    icon: imgFrame5,
    route: "/capitulo-3",
    color: "#163d41"
  },
  {
    number: 4,
    title: "Chismografo",
    subtitle: "",
    icon: imgFrame7,
    route: "/chismografo",
    color: "#802c16"
  },
  {
    number: 5,
    title: "Mapa de memoria",
    subtitle: "",
    icon: imgFrame6,
    route: "/mapa",
    color: "#163d41"
  },
  {
    number: 6,
    title: "Historias",
    subtitle: "",
    icon: imgFrame8,
    route: "/historias",
    color: "#b3782e"
  }
  
];

export default function Indice() {
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

        if (dragDistance < -120) {
          isDragging.current = false; // Soltamos el gesto
          navigate("/"); // Pasamos de página
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
      className="bg-[#f6e5cf] relative w-full h-full flex"
    >
      {/* Página izquierda */}
      <div className="w-1/2 relative overflow-hidden p-12">
        {/* Header */}
        <div className="mb-10 flex justify-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-['Fraunces',serif] font-bold text-[32px] text-[#683e07]"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Elige Tu Historia
          </motion.h1>
        </div>

        {/* Primeras 3 opciones */}
        <div className="space-y-6 max-w-md mx-auto">
          {menuItems.slice(0, 3).map((item, index) => (
            <BotonGesto 
              key={item.number}
              onClick={() => navigate(item.route)}
              color={item.color}
            >
              {/* Icono */}
              <div className="w-10 h-10 flex-shrink-0 relative group-hover:scale-110 transition-transform">
                <img src={item.icon} alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h2 className="font-['Fraunces',serif] font-semibold text-[20px] mb-1" style={{ color: item.color }}>
                  {item.title}
                </h2>
                {item.subtitle && (
                  <p className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#683e07]">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </BotonGesto>
          ))}
        </div>

        {/* Botón volver */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate("/")}
          className="absolute bottom-8 left-8 font-['Commissioner',sans-serif] font-medium text-[14px] text-[#683e07] hover:text-[#b3782e] transition-colors flex items-center gap-2"
          style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver a la portada
        </motion.button>
      </div>

      {/* Sombra del lomo del libro */}
      <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/5"></div>
      </div>

      {/* Página derecha */}
      <div className="w-1/2 relative overflow-hidden p-12 pt-[116px]">
        {/* Últimas 2 opciones */}
        <div className="space-y-6 max-w-md mx-auto">
          {menuItems.slice(3, 6).map((item, index) => (
            <BotonGesto 
              key={item.number}
              onClick={() => navigate(item.route)}
              color={item.color}
            >
              {/* Icono */}
              <div className="w-10 h-10 flex-shrink-0 relative group-hover:scale-110 transition-transform">
                <img src={item.icon} alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h2 className="font-['Fraunces',serif] font-semibold text-[20px] mb-1" style={{ color: item.color }}>
                  {item.title}
                </h2>
                {item.subtitle && (
                  <p className="font-['Commissioner',sans-serif] font-medium text-[14px] text-[#683e07]">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </BotonGesto>
          ))}
        </div>
      </div>
    </motion.div>
  );
}