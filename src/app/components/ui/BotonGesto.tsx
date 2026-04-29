import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
// Importamos el hook que creamos en el contexto
import { useHandTracking } from "../../context/HandTrackingContext";

interface BotonGestoProps {
  onClick: () => void;
  children: React.ReactNode;
  color: string;
}

export default function BotonGesto({ onClick, children, color }: BotonGestoProps) {
  const { cursor } = useHandTracking(); // Traemos las coordenadas de la mano
  const botonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progreso, setProgreso] = useState(0);

  // Efecto 1: Detectar colisión entre el cursor y el botón
  useEffect(() => {
    if (!botonRef.current) return;

    // Obtenemos las dimensiones exactas del botón en la pantalla
    const rect = botonRef.current.getBoundingClientRect();

    // Verificamos si la (x, y) de la mano está dentro de ese rectángulo
    const dentroX = cursor.x >= rect.left && cursor.x <= rect.right;
    const dentroY = cursor.y >= rect.top && cursor.y <= rect.bottom;

    if (dentroX && dentroY) {
      if (!isHovered) setIsHovered(true);
    } else {
      if (isHovered) setIsHovered(false);
    }
  }, [cursor, isHovered]);

  // Efecto 2: Manejar el temporizador de 5 segundos
  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;

    if (isHovered) {
      // Si está encima, sumamos progreso cada 100ms
      // 5 segundos = 5000ms. Cada 100ms sumamos un 2% para llegar a 100 en 5s.
      intervalo = setInterval(() => {
        setProgreso((prev) => {
          if (prev >= 100) {
            clearInterval(intervalo);
            onClick(); // ¡Ejecutamos la acción (ej. navegar a la página)!
            return 100;
          }
          return prev + 8; 
        });
      }, 100);
    } else {
      // Si la mano sale, reseteamos el progreso inmediatamente
      setProgreso(0);
    }

    return () => clearInterval(intervalo);
  }, [isHovered]);

  return (
    <motion.button
      ref={botonRef}
      // Mantengo tus animaciones originales de figma
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      // Al hacer clic normal con el mouse también funciona (para pruebas sin cámara)
      onClick={onClick} 
      className="group relative bg-[#fff1df] rounded-[20px] p-6 flex items-center gap-6 text-left shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full overflow-hidden"
    >
      {/* Barra de progreso de fondo que indica que el tiempo está corriendo */}
      <div 
        className="absolute top-0 left-0 bottom-0 opacity-20 transition-all duration-100 ease-linear pointer-events-none"
        style={{ 
          width: `${progreso}%`, 
          backgroundColor: color 
        }}
      />
      
      {/* Contenido original del botón (icono, título, etc) */}
      <div className="relative z-10 flex items-center gap-6 w-full">
        {children}
      </div>
    </motion.button>
  );
}