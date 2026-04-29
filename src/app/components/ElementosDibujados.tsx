// Elementos decorativos dibujados a mano para el libro

export function PlantaDibujada({ className = "", color = "#3e0c56" }: { className?: string, color?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="100"
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tallo principal */}
      <path
        d="M40 95 Q38 70 40 45 Q42 20 40 5"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Hojas */}
      <path d="M40 25 Q52 23 58 30" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M40 35 Q28 33 22 40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M40 45 Q54 43 62 50" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M40 55 Q26 53 18 60" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M40 65 Q52 63 60 70" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M40 75 Q28 73 20 80" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      {/* Flores pequeñas */}
      <circle cx="58" cy="30" r="4" fill={color} opacity="0.15" />
      <circle cx="22" cy="40" r="3" fill={color} opacity="0.15" />
      <circle cx="62" cy="50" r="3.5" fill={color} opacity="0.15" />
    </svg>
  );
}

export function FlorDibujada({ className = "", color = "#e07a5f" }: { className?: string, color?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pétalos */}
      <ellipse cx="30" cy="15" rx="8" ry="12" fill={color} opacity="0.2" />
      <ellipse cx="45" cy="30" rx="12" ry="8" fill={color} opacity="0.2" />
      <ellipse cx="30" cy="45" rx="8" ry="12" fill={color} opacity="0.2" />
      <ellipse cx="15" cy="30" rx="12" ry="8" fill={color} opacity="0.2" />
      {/* Centro */}
      <circle cx="30" cy="30" r="8" fill={color} opacity="0.3" />
      <circle cx="30" cy="30" r="4" fill="#3e0c56" opacity="0.2" />
    </svg>
  );
}

export function LineaOnduladaDibujada({ className = "", color = "#3e0c56" }: { className?: string, color?: string }) {
  return (
    <svg
      className={`w-full ${className}`}
      height="6"
      viewBox="0 0 400 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,3 Q100,1 200,3 T400,3"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EstrellaDibujada({ className = "", color = "#3e0c56" }: { className?: string, color?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,5 L22,15 L30,12 L24,20 L34,24 L24,28 L28,36 L20,30 L12,36 L16,28 L6,24 L16,20 L10,12 L18,15 Z"
        fill={color}
        opacity="0.15"
      />
      <circle cx="20" cy="20" r="3" fill={color} opacity="0.3" />
    </svg>
  );
}

export function LunaDibujada({ className = "", color = "#3e0c56" }: { className?: string, color?: string }) {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25,5 Q35,15 35,25 Q35,35 25,45 Q30,40 30,25 Q30,10 25,5 Z"
        fill={color}
        opacity="0.2"
      />
      <circle cx="28" cy="20" r="2" fill={color} opacity="0.15" />
      <circle cx="32" cy="30" r="1.5" fill={color} opacity="0.15" />
    </svg>
  );
}

export function EsquinaDibujada({ className = "", color = "#3e0c56", position = "top-left" }: { className?: string, color?: string, position?: string }) {
  const rotation = {
    "top-left": "0",
    "top-right": "90",
    "bottom-right": "180",
    "bottom-left": "270"
  }[position] || "0";

  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Líneas decorativas */}
      <path d="M5,5 L5,30" stroke={color} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <path d="M5,5 L30,5" stroke={color} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <path d="M10,10 L10,25" stroke={color} strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <path d="M10,10 L25,10" stroke={color} strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      {/* Espirales pequeñas */}
      <path
        d="M15,15 Q18,12 20,15 Q22,18 20,20 Q18,22 15,20"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
      />
      <circle cx="8" cy="8" r="2" fill={color} opacity="0.15" />
    </svg>
  );
}

export function MarcoPaginaDibujado({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Esquinas decorativas */}
      <EsquinaDibujada className="absolute top-4 left-4 opacity-60" position="top-left" color="#3e0c56" />
      <EsquinaDibujada className="absolute top-4 right-4 opacity-60" position="top-right" color="#3e0c56" />
      <EsquinaDibujada className="absolute bottom-4 left-4 opacity-60" position="bottom-left" color="#e07a5f" />
      <EsquinaDibujada className="absolute bottom-4 right-4 opacity-60" position="bottom-right" color="#e07a5f" />

      {/* Contenido */}
      {children}
    </div>
  );
}
