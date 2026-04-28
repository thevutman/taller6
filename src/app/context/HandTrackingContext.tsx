import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

interface HandTrackingContextType {
  isReady: boolean;
  cursor: { x: number; y: number };
  isPinching: boolean;
}

const HandTrackingContext = createContext<HandTrackingContextType | null>(null);

export function HandTrackingProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState(false); // Estado para saber si pellizca

  
  // Referencias para el loop de procesamiento
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handLandmarkerRef = useRef<HandLandmarker | null>(null);
  const requestRef = useRef<number | null>(null);
  const smoothedCursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const setupMediaPipe = async () => {
      // 1. Cargar los archivos necesarios de MediaPipe (Wasm)
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );

      // 2. Crear el detector de manos
      handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 1
      });

      // 3. Configurar la cámara
      const video = document.createElement("video");
      videoRef.current = video;
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      video.srcObject = stream;
      video.play();

      video.onloadeddata = () => {
        setIsReady(true);
        requestAnimationFrame(animate);
      };
    };

    let ultimoTiempoProcesado = 0;

    const animate = (tiempoActual: DOMHighResTimeStamp) => {
      // Solo procesamos la IA si han pasado al menos 33 milisegundos 
      // (esto equivale a limitarlo a unos 30 FPS en lugar de 60)
      if (tiempoActual - ultimoTiempoProcesado > 66) {
        ultimoTiempoProcesado = tiempoActual;

        if (videoRef.current && handLandmarkerRef.current) {
          const startTimeMs = performance.now();
          const results = handLandmarkerRef.current.detectForVideo(videoRef.current, startTimeMs);

          if (results.landmarks && results.landmarks.length > 0) {
            const hand = results.landmarks[0];
            const indexFinger = hand[8]; // Punta del Índice
            const thumbFinger = hand[4]; // Punta del Pulgar

            const targetX = (1 - indexFinger.x) * window.innerWidth;
            const targetY = indexFinger.y * window.innerHeight;

            smoothedCursor.current.x += (targetX - smoothedCursor.current.x) * 0.2;
            smoothedCursor.current.y += (targetY - smoothedCursor.current.y) * 0.2;

            setCursor({ 
              x: smoothedCursor.current.x, 
              y: smoothedCursor.current.y 
            });

            // Medimos la distancia matemática entre el pulgar y el índice
            const distance = Math.sqrt(
              Math.pow(indexFinger.x - thumbFinger.x, 2) + 
              Math.pow(indexFinger.y - thumbFinger.y, 2)
            );
            
            // Si la distancia es menor a 0.05, consideramos que están tocándose (pellizco)
            setIsPinching(distance < 0.05);
          }
          else {
            setIsPinching(false);
          }
        }
      }
      
      // Seguimos pidiendo el siguiente frame, pero la IA no se ejecutará en todos
      requestRef.current = requestAnimationFrame(animate);
    };

    setupMediaPipe();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  return (
    <HandTrackingContext.Provider value={{ isReady, cursor, isPinching }}>
      {children}
      {/* Opcional: Un pequeño punto visual para que TÚ veas dónde está detectando */}
      {isReady && (
        <div 
          style={{
            position: 'fixed', left: cursor.x, top: cursor.y,
            width: isPinching ? '15px' : '20px',
            height: isPinching ? '15px' : '20px',
            background: isPinching ? '#8b9d83' : '#d4654f', // Cambia de color al pellizcar
            border: '2px solid white', borderRadius: '50%',
            pointerEvents: 'none', zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.2s, height 0.2s, background 0.2s'
          }}
        />
      )}
    </HandTrackingContext.Provider>
  );
}

export const useHandTracking = () => {
  const context = useContext(HandTrackingContext);
  if (!context) throw new Error("useHandTracking debe usarse dentro de un Provider");
  return context;
};