import imgFrame1 from "./0ff69a7cf933d5a9835d6e9213694f5f9b55d2bf.png";

function Frame() {
  return (
    <div className="absolute h-[146px] left-[112px] top-[306px] w-[177px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-9.76%] max-w-none top-[0.1%] w-[114.39%]" src={imgFrame1} />
      </div>
    </div>
  );
}

export default function PaginasDelMaxilibro() {
  return (
    <div className="bg-[#f6e5cf] relative size-full" data-name="Paginas del Maxilibro">
      <Frame />
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] left-[119px] text-[32px] text-black top-[452px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        MaxiLibro
      </p>
    </div>
  );
}