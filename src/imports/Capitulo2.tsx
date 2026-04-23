import imgFrame3 from "figma:asset/9c3d0e995ce09209b2e17f6a0801bb229e158564.png";

function Frame() {
  return (
    <div className="absolute left-[331px] size-[39px] top-[67px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

export default function Capitulo() {
  return (
    <div className="bg-[#f6e5cf] relative size-full" data-name="Capitulo 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] left-[32px] text-[24px] text-black top-[62px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Capitulo  1`}</p>
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[normal] left-[32px] not-italic text-[14px] text-black top-[92px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`Matronas : Esencia del territorio `}</p>
      <Frame />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal h-[327px] leading-[normal] left-[34px] not-italic text-[12px] text-black top-[127px] w-[336px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Lorem ipsun door
      </p>
    </div>
  );
}