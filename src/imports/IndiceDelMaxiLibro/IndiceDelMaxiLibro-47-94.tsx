import imgFrame3 from "./9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgFrame4 from "./f2aa0910921eceacefaa05b4426f8f5c745d49ec.png";
import imgFrame5 from "./5011e51ef446d547c8edf6af523f2ba94ccbe971.png";
import imgFrame7 from "./3d917c6ae26f75a48b88a88f079126d00a2354ba.png";
import imgFrame6 from "./01a0cc64347219188cbf2427a541bf93e703b8b5.png";

function Frame() {
  return (
    <div className="absolute left-[12px] size-[39px] top-[35px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#fff1df] h-[109px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[124px] w-[354px]">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[62px] text-[#b3782e] text-[20px] top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 1
      </p>
      <Frame />
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[62px] not-italic text-[#683e07] text-[14px] top-[63px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`Matronas : Esencia del territorio `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[12px] size-[39px] top-[35px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#fff1df] h-[109px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[256px] w-[354px]">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[62px] text-[#802c16] text-[20px] top-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 2
      </p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[62px] not-italic text-[#683e07] text-[14px] top-[50px] w-[244px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cocina de relatos : Historias que saben a territorio
      </p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[12px] size-[39px] top-[35px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame5} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#fff1df] h-[109px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[388px] w-[354px]">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[64px] text-[#163d41] text-[20px] top-[34px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 3
      </p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[64px] not-italic text-[#683e07] text-[14px] top-[59px] w-[204px] whitespace-pre-wrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`Herbarias: Raices del  bienestar`}</p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[12px] size-[39px] top-[35px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame7} />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#fff1df] h-[109px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[526px] w-[354px]">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[59px] text-[#802c16] text-[20px] top-[42px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Chismografo
      </p>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[12px] size-[39px] top-[35px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame6} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#fff1df] h-[109px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[659px] w-[354px]">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[59px] text-[#163d41] text-[20px] top-[42px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Mapa de memoria
      </p>
      <Frame3 />
    </div>
  );
}

export default function IndiceDelMaxiLibro() {
  return (
    <div className="bg-[#f6e5cf] relative size-full" data-name="Indice del MaxiLibro">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] left-[98px] text-[#683e07] text-[24px] top-[70px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Elige Tu Historia
      </p>
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}