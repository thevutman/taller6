import imgFrame1 from "figma:asset/a84644243e844c20856abffa5e376e3f3ed4e17a.png";

function Frame() {
  return (
    <div className="absolute left-[128px] size-[146px] top-[306px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-22.79%] max-w-none top-[0.1%] w-[138.68%]" src={imgFrame1} />
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