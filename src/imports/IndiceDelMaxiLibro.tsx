import imgFrame3 from "figma:asset/9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgFrame4 from "figma:asset/f2aa0910921eceacefaa05b4426f8f5c745d49ec.png";
import imgFrame5 from "figma:asset/5011e51ef446d547c8edf6af523f2ba94ccbe971.png";
import imgFrame6 from "figma:asset/01a0cc64347219188cbf2427a541bf93e703b8b5.png";
import imgFrame7 from "figma:asset/3d917c6ae26f75a48b88a88f079126d00a2354ba.png";

function Frame() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[141px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[243px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame5} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[423px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame6} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[508px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame7} />
    </div>
  );
}

export default function IndiceDelMaxiLibro() {
  return (
    <div className="bg-[#f6e5cf] relative size-full" data-name="Indice del MaxiLibro">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] left-[98px] text-[24px] text-black top-[70px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Elige Tu Historia
      </p>
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[32px] text-[20px] text-black top-[124px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 1
      </p>
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[32px] text-[20px] text-black top-[212px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 2
      </p>
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[32px] text-[20px] text-black top-[317px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 3
      </p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[32px] not-italic text-[14px] text-black top-[163px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`Matronas : Esencia del territorio `}</p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[32px] not-italic text-[14px] text-black top-[251px] w-[262px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cocina de relatos : Historias que saben a territorio
      </p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[32px] not-italic text-[14px] text-black top-[357px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Herbarias : Raices de bienestar
      </p>
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[32px] text-[20px] text-black top-[430px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Mapa de memorias `}</p>
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[37px] text-[20px] text-black top-[515px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Chismografo
      </p>
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}