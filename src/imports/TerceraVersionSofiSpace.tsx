import svgPaths from "./svg-y5y4qlazor";
import imgImage from "figma:asset/9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgImage1 from "figma:asset/f2aa0910921eceacefaa05b4426f8f5c745d49ec.png";
import imgImage2 from "figma:asset/5011e51ef446d547c8edf6af523f2ba94ccbe971.png";
import imgImage3 from "figma:asset/01a0cc64347219188cbf2427a541bf93e703b8b5.png";
import imgImage4 from "figma:asset/3d917c6ae26f75a48b88a88f079126d00a2354ba.png";
import imgImageLogoMaxiLibro from "figma:asset/a84644243e844c20856abffa5e376e3f3ed4e17a.png";
import imgImageWithFallback from "figma:asset/20aa39349d0c984af7e6df3ef9f31ab52f9bedf6.png";

function Container1() {
  return (
    <div className="absolute h-[60px] left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#4a3428] text-[40px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Elige Tu Historia
      </p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#d4654f] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 1
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.875px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[17.875px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Matronas : Esencia del territorio
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[384.667_0_0] h-[54.875px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
            <path d={svgPaths.p3c23ab48} id="Vector" stroke="var(--stroke-0, #6D5347)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          <Container3 />
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#d9a679] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 2
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.875px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[17.875px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cocina de relatos : Historias que saben a territorio
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[384.667_0_0] h-[54.875px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
            <path d={svgPaths.p3c23ab48} id="Vector" stroke="var(--stroke-0, #6D5347)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          <Container6 />
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#8b9d83] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 3
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17.875px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[17.875px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Herbarias : Raices de bienestar
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[384.667_0_0] h-[54.875px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
            <path d={svgPaths.p3c23ab48} id="Vector" stroke="var(--stroke-0, #6D5347)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          <Container9 />
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[388px] items-start left-[48px] top-[140px] w-[564.667px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[66.875px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[46.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Volver
      </p>
    </div>
  );
}

function Indice() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="Indice">
      <Container1 />
      <Container2 />
      <Button3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#a84732] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Mapa de memorias
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[384.667_0_0] h-[37px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
            <path d={svgPaths.p3c23ab48} id="Vector" stroke="var(--stroke-0, #6D5347)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          <Container13 />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image4 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#677a5f] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Chismografo
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[384.667_0_0] h-[37px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
            <path d={svgPaths.p3c23ab48} id="Vector" stroke="var(--stroke-0, #6D5347)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          <Container16 />
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[252px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Indice1() {
  return (
    <div className="absolute bg-[#f2e8dc] content-stretch flex flex-col h-[863.333px] items-start left-[660.67px] overflow-clip pt-[88px] px-[48px] top-0 w-[660.667px]" data-name="Indice">
      <Container12 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Indice />
      <Indice1 />
      <Container19 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container />
    </div>
  );
}

function DisenoLibroInteractivo() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[1790px] pr-[-0.333px] top-[417px] w-[1321px]" data-name="Diseño libro interactivo">
      <App />
    </div>
  );
}

function Container22() {
  return <div className="absolute border-2 border-[#d4654f] border-solid left-[364.67px] rounded-[22369600px] size-[256px] top-[80px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute border-2 border-[#8b9d83] border-solid left-[40px] rounded-[22369600px] size-[320px] top-[463.33px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 opacity-5 top-0 w-[660.667px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[84px] left-[205.04px] top-[452.17px] w-[250.573px]" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[84px] left-0 text-[#4a3428] text-[56px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        MaxiLibro
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[36px] left-[261.65px] top-[552.17px] w-[137.354px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[36px] left-[69.5px] text-[#6d5347] text-[24px] text-center top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Memoria Viva
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[27px] left-[172.2px] top-[596.17px] w-[316.26px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[27px] left-[158.5px] not-italic text-[#6d5347] text-[18px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Las Matronas de Santa Fe de Antioquia
      </p>
    </div>
  );
}

function ImageLogoMaxiLibro() {
  return (
    <div className="absolute left-[240.32px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] size-[180px] top-[240.17px]" data-name="Image (Logo MaxiLibro)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLogoMaxiLibro} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[21px] left-[266.81px] top-[794.33px] w-[127.031px]" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#8b9d83] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Toca para comenzar
      </p>
    </div>
  );
}

function Portada() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-[660.67px] top-0 w-[660.667px]" data-name="Portada">
      <Heading />
      <Paragraph3 />
      <Paragraph4 />
      <ImageLogoMaxiLibro />
      <Paragraph5 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Portada />
      <Container24 />
    </div>
  );
}

function App1() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container20 />
    </div>
  );
}

function DisenoLibroInteractivo1() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[408px] pr-[-0.333px] top-[417px] w-[1321px]" data-name="Diseño libro interactivo">
      <App1 />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image5 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#d4654f] text-[32px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 1
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#6d5347] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Matronas : Esencia del territorio
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[57px] relative shrink-0 w-[203.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading6 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[57px] items-center left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a3428] text-[0px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[26px] text-[16px]">{`Las `}</span>
        <span className="font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[26px] text-[#d4654f] text-[16px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          matronas
        </span>
        <span className="leading-[26px] text-[16px]">{` son las guardianas de la memoria y la tradición en Santa Fe de Antioquia. Mujeres sabias que han tejido, generación tras generación, el conocimiento ancestral que define nuestra identidad territorial.`}</span>
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a3428] text-[16px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Su oficio trasciende las labores cotidianas: son parteras de vida, custodias de recetas centenarias, maestras de oficios artesanales y narradoras de historias que mantienen viva la esencia de nuestro pueblo.
      </p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#d4654f] text-[20px] top-[0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Sus oficios tradicionales
      </p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#d4654f] left-0 rounded-[22369600px] size-[6px] top-[7.5px]" data-name="Text" />;
}

function ListItem() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Text />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-[14px] not-italic text-[#4a3428] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Parteras y cuidadoras de la vida
      </p>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#d4654f] left-0 rounded-[22369600px] size-[6px] top-[7.5px]" data-name="Text" />;
}

function ListItem1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-[14px] not-italic text-[#4a3428] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cocineras tradicionales
      </p>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#d4654f] left-0 rounded-[22369600px] size-[6px] top-[7.5px]" data-name="Text" />;
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-[14px] not-italic text-[#4a3428] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Hierbateras y conocedoras
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[79px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[161px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4654f] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[24px] pr-[20px] pt-[20px] relative size-full">
        <Heading7 />
        <List />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[357px] items-start left-[48px] pr-[16px] top-[137px] w-[564.667px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
      <Container30 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[64.24px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[45.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
    </div>
  );
}

function Capitulo() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="Capitulo1">
      <Container26 />
      <Container29 />
      <Button6 />
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#d4654f] left-0 rounded-[22369600px] size-[6px] top-[7.5px]" data-name="Text" />;
}

function ListItem3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-[14px] not-italic text-[#4a3428] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Tejedoras y artesanas
      </p>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#d4654f] left-0 rounded-[22369600px] size-[6px] top-[7.5px]" data-name="Text" />;
}

function ListItem4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-[14px] not-italic text-[#4a3428] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Narradoras de historias y tradiciones orales
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[50px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4654f] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[24px] pr-[20px] pt-[20px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a3428] text-[16px] top-[0.33px] w-[565px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        En sus manos, cada gesto es un acto de resistencia cultural. Cada palabra compartida, una semilla de memoria. Las matronas son el puente entre el pasado y el presente, las raíces que nos sostienen como comunidad.
      </p>
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[152px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <Image6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[0] left-[80px] text-[#d4654f] text-[18px] text-center top-[0.67px] w-[160px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[27px] mb-0">{`"Guardianas de la `}</p>
        <p className="leading-[27px]">{`memoria viva"`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[230px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[202.333px] relative size-full">
        <Container34 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[767.333px] items-start left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Container32 />
      <Paragraph9 />
      <Container33 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[67.74px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32b19280} id="Vector" stroke="var(--stroke-0, #D4654F)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[21px] left-[542.93px] top-[810.33px] w-[85.74px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[30px] not-italic text-[#d4654f] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Siguiente
      </p>
      <Icon7 />
    </div>
  );
}

function Capitulo1() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" data-name="Capitulo1">
      <Container31 />
      <Button7 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Capitulo />
      <Capitulo1 />
      <Container35 />
    </div>
  );
}

function App2() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container25 />
    </div>
  );
}

function DisenoLibroInteractivo2() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[3165px] pr-[-0.333px] top-[417px] w-[1321px]" data-name="Diseño libro interactivo">
      <App2 />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image7 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#d9a679] text-[32px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 2
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#6d5347] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cocina de relatos
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[57px] relative shrink-0 w-[139.427px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading8 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[57px] items-center left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a3428] text-[0px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[26px] text-[16px]">{`En la cocina de las `}</span>
        <span className="font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[26px] text-[#d9a679] text-[16px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          matronas
        </span>
        <span className="leading-[26px] text-[16px]">, cada receta es un relato que se transmite de generación en generación. El fogón de leña se convierte en el corazón del hogar.</span>
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a3428] text-[16px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Las mujeres de Santa Fe de Antioquia han preservado recetas centenarias, no solo como alimento, sino como patrimonio vivo que conecta el pasado con el presente.
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-gradient-to-r from-[rgba(217,166,121,0.1)] h-[64.375px] relative rounded-[14px] shrink-0 to-[rgba(0,0,0,0)] w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19.708px] pt-[19.667px] px-[20px] relative size-full">
        <p className="font-['Commissioner:Italic',sans-serif] font-normal h-[25px] italic leading-[24.375px] relative shrink-0 text-[#4a3428] text-[15px] w-[490px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"La cocina es el espacio donde las mujeres escriben la historia del pueblo."`}</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[260.375px] items-start left-[48px] pr-[16px] top-[137px] w-[564.667px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
      <Container41 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[64.24px]" data-name="Button">
      <Icon8 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[45.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
    </div>
  );
}

function Capitulo2() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="Capitulo2">
      <Container37 />
      <Container40 />
      <Button8 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[564.667px]" data-name="Heading 3">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[36px] left-0 text-[#d9a679] text-[24px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Recetas del Alma
      </p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[25.5px] left-0 text-[#d9a679] text-[17px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Arepa de Chócolo
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium_Italic',sans-serif] font-medium italic leading-[19.5px] left-0 text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Tradición ancestral en cada bocado
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[49px] relative shrink-0 w-[502.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading10 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32b19280} id="Vector" stroke="var(--stroke-0, #D9A679)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[49px] items-center justify-between left-[16px] top-[16px] w-[532.667px]" data-name="Container">
      <Container45 />
      <Icon9 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[81px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Container44 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[25.5px] left-0 text-[#d9a679] text-[17px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Mazamorra Antioqueña
        </p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Medium_Italic',sans-serif] font-medium italic leading-[19.5px] left-0 text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          El alma del campo en un plato
        </p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[49px] items-start left-[16px] top-[16px] w-[532.667px]" data-name="Container">
      <Heading11 />
      <Paragraph15 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[81px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Container46 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[25.5px] left-0 text-[#d9a679] text-[17px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Natilla Santafereña
        </p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Medium_Italic',sans-serif] font-medium italic leading-[19.5px] left-0 text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Dulzura de celebración familiar
        </p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[49px] items-start left-[16px] top-[16px] w-[532.667px]" data-name="Container">
      <Heading12 />
      <Paragraph16 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[81px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Container47 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[25.5px] left-0 text-[#d9a679] text-[17px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Buñuelos de Maíz
        </p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Medium_Italic',sans-serif] font-medium italic leading-[19.5px] left-0 text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Crujientes memorias navideñas
        </p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[49px] items-start left-[16px] top-[16px] w-[532.667px]" data-name="Container">
      <Heading13 />
      <Paragraph17 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[81px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[360px] items-start left-0 top-[56px] w-[564.667px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[218.33px] rounded-[22369600px] size-[128px] top-[448px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <Image8 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[48px] left-0 top-[588px] w-[564.667px]" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[0] left-[282.5px] text-[#d9a679] text-[16px] text-center top-[0.67px] w-[565px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px] mb-0">{`"Sabores que cuentan `}</p>
        <p className="leading-[24px]">{`historias del alma"`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[767.333px] left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Heading9 />
      <Container43 />
      <Container49 />
      <Paragraph18 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[67.74px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32b19280} id="Vector" stroke="var(--stroke-0, #D9A679)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute h-[21px] left-[542.93px] top-[810.33px] w-[85.74px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[30px] not-italic text-[#d9a679] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Siguiente
      </p>
      <Icon10 />
    </div>
  );
}

function Capitulo3() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" data-name="Capitulo2">
      <Container42 />
      <Button13 />
    </div>
  );
}

function Container50() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container36() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Capitulo2 />
      <Capitulo3 />
      <Container50 />
    </div>
  );
}

function App3() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container36 />
    </div>
  );
}

function DisenoLibroInteractivo3() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[4529px] pr-[-0.333px] top-[418px] w-[1321px]" data-name="Diseño libro interactivo">
      <App3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Commissioner:Medium',sans-serif] font-medium h-[18px] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase w-[125px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Recetas del Alma
      </p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[42px] left-0 text-[42px] text-white top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Arepa de Chócolo
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#d9a679] gap-[12px] h-[152px] items-start left-0 pt-[48px] px-[48px] to-[rgba(217,166,121,0)] top-0 w-[646px]" data-name="Container">
      <Container54 />
      <Heading14 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[22369600px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#d9a679] border-solid inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[218.979px]" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[33px] left-0 text-[#d9a679] text-[22px] top-[-0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Doña Rosa María Pérez
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[76px] relative shrink-0 w-[218.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading15 />
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6d5347] text-[14px] top-[37px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Matrona y cocinera tradicional
        </p>
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8b9d83] text-[12px] top-[57.33px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Santa Fe de Antioquia • 72 años
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[20px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return <div className="bg-[rgba(217,166,121,0.2)] h-px shrink-0 w-full" data-name="Container" />;
}

function Paragraph19() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#8b9d83] text-[12px] top-[-0.67px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        ¿De dónde viene esta receta?
      </p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a3428] text-[14px] top-[-0.33px] w-[517px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"Esta receta me la enseñó mi abuela cuando yo tenía apenas ocho años. Ella decía que el secreto estaba en el amor con que se muele el chócolo."`}</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[71.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#8b9d83] text-[12px] top-[-0.67px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        ¿Qué significa para usted?
      </p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a3428] text-[14px] top-[-0.33px] w-[517px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"Cada vez que preparo estas arepas siento que mi abuela está aquí conmigo, guiando mis manos. Es mantener viva su memoria."`}</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[71.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#8b9d83] text-[12px] top-[-0.67px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        ¿Cuál es el secreto?
      </p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a3428] text-[14px] top-[-0.33px] w-[517px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"El maíz fresco del mercado, molerlo a mano con paciencia, y cocinarlas en fogón de leña. Pero lo más importante es hacerlas con cariño."`}</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[71.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[254.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[20px] h-[423.5px] items-start left-[48px] pt-[24px] px-[24px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[184px] w-[564.667px]" data-name="Container">
      <Container56 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="Container">
      <Container53 />
      <Container55 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[66.875px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[46.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Volver
      </p>
    </div>
  );
}

function RecetaArepaChocolo() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="RecetaArepaChocolo">
      <Container52 />
      <Button14 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#d9a679] text-[24px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Ingredientes
      </p>
    </div>
  );
}

function Container68() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container69() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">6 mazorcas</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de chócolo tierno
        </span>
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container72() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">1/2 taza</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de leche
        </span>
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">2 cucharadas</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de mantequilla
        </span>
      </p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container78() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">1 cucharada</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de azúcar
        </span>
      </p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container81() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">1 cucharadita</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de sal
        </span>
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container84() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">1/4 taza</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          de queso campesino
        </span>
      </p>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#d9a679] left-0 rounded-[22369600px] size-[6px] top-[12px]" data-name="Container" />;
}

function Container87() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[4px] w-[484px]" data-name="Container">
      <p className="absolute font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#d9a679] text-[0px] top-[2.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[21px] text-[14px]">Al gusto</span>
        <span className="font-['Commissioner:Regular',sans-serif] font-normal leading-[21px] text-[#4a3428] text-[14px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          mantequilla para cocinar
        </span>
      </p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[272px] items-start relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container70 />
      <Container73 />
      <Container76 />
      <Container79 />
      <Container82 />
      <Container85 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[376px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading16 />
        <Container66 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#d9a679] text-[24px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Preparación
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[5.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.281px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[354.042px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Desgrana las mazorcas de chócolo tierno. Reserva los granos.
        </p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Paragraph25 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[6.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.583px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[340.302px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Muele los granos hasta obtener una masa suave y cremosa.
        </p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Paragraph26 />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.5px] relative size-full">
        <p className="font-['Commissioner:Bold',sans-serif] font-bold h-[18px] leading-[18px] not-italic relative shrink-0 text-[12px] text-white w-[7px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[302.146px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Mezcla con la leche, mantequilla, azúcar, sal y queso.
        </p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Paragraph27 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.365px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.313px] pr-[8.323px] relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[286.052px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Amasa bien hasta integrar todos los ingredientes.
        </p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Paragraph28 />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.5px] relative size-full">
        <p className="font-['Commissioner:Bold',sans-serif] font-bold h-[18px] leading-[18px] not-italic relative shrink-0 text-[12px] text-white w-[7px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          5
        </p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[401.99px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Forma las arepas con las manos (aproximadamente 1.5 cm de grosor).
        </p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Paragraph29 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          6
        </p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.292px] pr-[8.302px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[293.552px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Calienta un budare a fuego medio con mantequilla.
        </p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Paragraph30 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[6.604px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          7
        </p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8.698px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[236.667px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Cocina 5-7 minutos por lado hasta dorar.
        </p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Paragraph31 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.427px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          8
        </p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#d9a679] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.281px] pr-[8.292px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[270.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Sirve calientes con mantequilla o queso fresco.
        </p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Paragraph32 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[304px] items-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container92 />
      <Container94 />
      <Container96 />
      <Container98 />
      <Container100 />
      <Container102 />
      <Container104 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[408px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading17 />
        <Container89 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_548)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #D9A679)" strokeWidth="1.66667" />
          <path d={svgPaths.p1cad9a00} id="Vector_2" stroke="var(--stroke-0, #D9A679)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_548">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#d9a679] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Consejo de Doña Rosa
      </p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[42.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#4a3428] text-[13px] top-[-1px] w-[474px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"Si la masa queda muy aguada, añade harina de maíz. El chócolo debe ser fresco, del mercado de la mañana."`}</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[74.25px] items-start left-[32px] top-0 w-[474px]" data-name="Container">
      <Heading18 />
      <Paragraph33 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[74.25px] relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Container108 />
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-gradient-to-r from-[rgba(217,166,121,0.2)] h-[118.25px] relative rounded-[14px] shrink-0 to-[rgba(217,166,121,0.1)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(217,166,121,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[22px] px-[22px] relative size-full">
        <Container107 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[863.333px] items-start left-0 overflow-clip pl-[48px] pr-[62.667px] pt-[48px] top-0 w-[660.667px]" data-name="Container">
      <Container65 />
      <Container88 />
      <Container106 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[46.24px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p60f7dc0} id="Vector" stroke="var(--stroke-0, #D9A679)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute h-[21px] left-[564.43px] top-[810.33px] w-[64.24px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[19.5px] not-italic text-[#d9a679] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
      <Icon13 />
    </div>
  );
}

function RecetaArepaChocolo1() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" data-name="RecetaArepaChocolo">
      <Container64 />
      <Button15 />
    </div>
  );
}

function Container109() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container51() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <RecetaArepaChocolo />
      <RecetaArepaChocolo1 />
      <Container109 />
    </div>
  );
}

function App4() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container51 />
    </div>
  );
}

function DisenoLibroInteractivo4() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[4529px] pr-[-0.333px] top-[1336px] w-[1321px]" data-name="Diseño libro interactivo">
      <App4 />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-white relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image9 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#8b9d83] text-[32px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Capitulo 3
      </p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#6d5347] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Herbarias : Raices de bienestar
      </p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[57px] relative shrink-0 w-[193.208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading19 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[57px] items-center left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Container112 />
      <Container113 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a3428] text-[0px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[26px] text-[16px]">{`Las `}</span>
        <span className="font-['Commissioner:SemiBold',sans-serif] font-semibold leading-[26px] text-[#8b9d83] text-[16px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          herbarias
        </span>
        <span className="leading-[26px] text-[16px]">{` son las custodias del conocimiento medicinal ancestral. En sus manos, las plantas se transforman en remedios que curan el cuerpo y el espíritu.`}</span>
      </p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a3428] text-[16px] top-[0.33px] w-[549px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Este saber, transmitido de generación en generación, representa una medicina integral que entiende la salud como armonía entre el ser humano y la naturaleza.
      </p>
    </div>
  );
}

function Container115() {
  return (
    <div className="bg-gradient-to-r from-[rgba(139,157,131,0.1)] h-[64.375px] relative rounded-[14px] shrink-0 to-[rgba(0,0,0,0)] w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19.708px] pt-[19.667px] px-[20px] relative size-full">
        <p className="font-['Commissioner:Italic',sans-serif] font-normal h-[25px] italic leading-[24.375px] relative shrink-0 text-[#4a3428] text-[15px] w-[431px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"En cada hoja, en cada raíz, vive la sabiduría de nuestras abuelas."`}</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[260.375px] items-start left-[48px] pr-[16px] top-[137px] w-[564.667px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
      <Container115 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[64.24px]" data-name="Button">
      <Icon14 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[45.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
    </div>
  );
}

function Capitulo4() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" data-name="Capitulo3">
      <Container111 />
      <Container114 />
      <Button16 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[564.667px]" data-name="Heading 3">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[36px] left-0 text-[#8b9d83] text-[24px] top-[0.33px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Plantas de Sanación
      </p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p29159a00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.2)] content-stretch flex items-center justify-center left-[16px] px-[7px] rounded-[22369600px] size-[28px] top-[18px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#8b9d83] text-[15px] top-[-1.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Yerbabuena
      </p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Digestión y calma
      </p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[56px] top-[16px] w-[492.667px]" data-name="Container">
      <Heading21 />
      <Paragraph37 />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[74px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container119 />
      <Container120 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p29159a00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.2)] content-stretch flex items-center justify-center left-[16px] px-[7px] rounded-[22369600px] size-[28px] top-[18px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#8b9d83] text-[15px] top-[-1.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Manzanilla
      </p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Sanación del alma
      </p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[56px] top-[16px] w-[492.667px]" data-name="Container">
      <Heading22 />
      <Paragraph38 />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[74px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p29159a00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.2)] content-stretch flex items-center justify-center left-[16px] px-[7px] rounded-[22369600px] size-[28px] top-[18px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#8b9d83] text-[15px] top-[-1.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Toronjil
      </p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Serenidad interior
      </p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[56px] top-[16px] w-[492.667px]" data-name="Container">
      <Heading23 />
      <Paragraph39 />
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[74px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container125 />
      <Container126 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p29159a00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.2)] content-stretch flex items-center justify-center left-[16px] px-[7px] rounded-[22369600px] size-[28px] top-[18px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#8b9d83] text-[15px] top-[-1.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Sábila
      </p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Cicatrización
      </p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[56px] top-[16px] w-[492.667px]" data-name="Container">
      <Heading24 />
      <Paragraph40 />
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[74px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p29159a00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.2)] content-stretch flex items-center justify-center left-[16px] px-[7px] rounded-[22369600px] size-[28px] top-[18px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#8b9d83] text-[15px] top-[-1.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Paico
      </p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6d5347] text-[13px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Limpieza y renovación
      </p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[56px] top-[16px] w-[492.667px]" data-name="Container">
      <Heading25 />
      <Paragraph41 />
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[74px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[418px] items-start left-0 top-[56px] w-[564.667px]" data-name="Container">
      <Container118 />
      <Container121 />
      <Container124 />
      <Container127 />
      <Container130 />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[218.33px] rounded-[22369600px] size-[128px] top-[506px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <Image10 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[48px] left-0 top-[646px] w-[564.667px]" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[0] left-[282.5px] text-[#8b9d83] text-[16px] text-center top-[0.67px] w-[565px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px] mb-0">{`"Sabiduría ancestral `}</p>
        <p className="leading-[24px]">{`que sana y conecta"`}</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[767.333px] left-[48px] top-[48px] w-[564.667px]" data-name="Container">
      <Heading20 />
      <Container117 />
      <Container133 />
      <Paragraph42 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[67.74px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32b19280} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute h-[21px] left-[542.93px] top-[810.33px] w-[85.74px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[30px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Siguiente
      </p>
      <Icon20 />
    </div>
  );
}

function Capitulo5() {
  return (
    <div className="absolute bg-[#f2e8dc] h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" data-name="Capitulo3">
      <Container116 />
      <Button17 />
    </div>
  );
}

function Container134() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container110() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Capitulo4 />
      <Capitulo5 />
      <Container134 />
    </div>
  );
}

function App5() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container110 />
    </div>
  );
}

function DisenoLibroInteractivo5() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[5914px] pr-[-0.333px] top-[415px] w-[1321px]" data-name="Diseño libro interactivo">
      <App5 />
    </div>
  );
}

function Image11() {
  return (
    <div className="h-[260.047px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[23456282px] size-[268.436px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[4.194px] relative rounded-[inherit] size-full">
        <Image11 />
      </div>
      <div aria-hidden="true" className="absolute border-[4.194px] border-solid border-white inset-0 pointer-events-none rounded-[23456282px] shadow-[0px_26.214px_52.429px_-12.583px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[64.24px]" data-name="Button">
      <Icon21 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[45.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
    </div>
  );
}

function MapaInvitacion() {
  return (
    <div className="absolute h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" style={{ backgroundImage: "linear-gradient(127.425deg, rgb(242, 232, 220) 0%, rgb(243, 234, 223) 16.667%, rgb(245, 237, 227) 33.333%, rgb(246, 239, 230) 50%, rgb(247, 241, 233) 66.667%, rgb(249, 244, 237) 83.333%, rgb(250, 246, 240) 100%)" }} data-name="MapaInvitacion">
      <div className="absolute flex items-center justify-center left-[189.6px] size-[281.459px] top-[290.94px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.85deg]">
          <Container136 />
        </div>
      </div>
      <Button18 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[60px] left-[250.4px] text-[#a84732] text-[48px] text-center top-[0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Mapa de Memorias
      </p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[58.5px] left-0 top-0 w-[500px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[29.25px] left-[250px] not-italic text-[#4a3428] text-[18px] text-center top-[-0.67px] w-[500px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Un viaje geográfico y emocional por los territorios donde habitan las matronas de Santa Fe de Antioquia.
      </p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[33px] left-[224.25px] text-[#a84732] text-[22px] text-center top-[-1.33px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Te invitamos a explorar
      </p>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[12px] h-[175px] items-start left-0 pb-[2px] pt-[26px] px-[26px] rounded-[14px] top-[78.5px] w-[500px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,71,50,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph44 />
      <p className="font-['Commissioner:Regular',sans-serif] font-normal h-[78px] leading-[26px] not-italic relative shrink-0 text-[#6d5347] text-[16px] text-center w-full" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Un mapa físico e interactivo que te permitirá descubrir los lugares, las historias y las voces de quienes mantienen viva la esencia de nuestro territorio.
      </p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[24.03px] size-[24px] top-[13.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_39_558)" id="Icon">
          <path d={svgPaths.pf087300} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_39_558">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[27px] left-[60px] top-[12px] w-[216px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-[108.03px] text-[18px] text-center text-white top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Acércate al mapa interactivo
      </p>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[51px] relative rounded-[22369600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(168, 71, 50) 0%, rgb(171, 73, 52) 7.1429%, rgb(174, 75, 54) 14.286%, rgb(177, 77, 56) 21.429%, rgb(180, 79, 58) 28.571%, rgb(184, 82, 60) 35.714%, rgb(187, 84, 62) 42.857%, rgb(190, 86, 64) 50%, rgb(193, 88, 66) 57.143%, rgb(196, 90, 69) 64.286%, rgb(199, 92, 71) 71.429%, rgb(202, 94, 73) 78.571%, rgb(206, 97, 75) 85.714%, rgb(209, 99, 77) 92.857%, rgb(212, 101, 79) 100%)" }} data-name="Container">
      <Icon22 />
      <Text11 />
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67px] items-start left-0 pl-[99.995px] pr-[100.005px] pt-[16px] top-[272.56px] w-[500px]" data-name="Container">
      <Container141 />
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[340.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph43 />
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[464.5px] items-start left-[80.33px] top-[199.42px] w-[500px]" data-name="Container">
      <Heading26 />
      <Container138 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[67.74px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32b19280} id="Vector" stroke="var(--stroke-0, #A84732)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute h-[21px] left-[542.93px] top-[810.33px] w-[85.74px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[30px] not-italic text-[#a84732] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Siguiente
      </p>
      <Icon23 />
    </div>
  );
}

function MapaInvitacion1() {
  return (
    <div className="absolute h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" style={{ backgroundImage: "linear-gradient(127.425deg, rgb(250, 246, 240) 0%, rgb(249, 244, 237) 16.667%, rgb(247, 241, 233) 33.333%, rgb(246, 239, 230) 50%, rgb(245, 237, 227) 66.667%, rgb(243, 234, 223) 83.333%, rgb(242, 232, 220) 100%)" }} data-name="MapaInvitacion">
      <Container137 />
      <Button19 />
    </div>
  );
}

function Container142() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container135() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <MapaInvitacion />
      <MapaInvitacion1 />
      <Container142 />
    </div>
  );
}

function App6() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container135 />
    </div>
  );
}

function DisenoLibroInteractivo6() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[7357px] pr-[-0.333px] top-[1367px] w-[1321px]" data-name="Diseño libro interactivo">
      <App6 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute h-[72px] left-[198.38px] top-[499.67px] w-[263.906px]" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[72px] left-0 text-[#677a5f] text-[48px] top-[0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Chismógrafo
      </p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[36px] left-[190.9px] top-[583.67px] w-[278.865px]" data-name="Paragraph">
      <p className="absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#8b9d83] text-[24px] top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Tu historia también importa
      </p>
    </div>
  );
}

function Image12() {
  return (
    <div className="h-[225.032px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Container144() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[23304952px] size-[233.366px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[4.167px] relative rounded-[inherit] size-full">
        <Image12 />
      </div>
      <div aria-hidden="true" className="absolute border-[4.167px] border-solid border-white inset-0 pointer-events-none rounded-[23304952px] shadow-[0px_26.045px_52.091px_-12.502px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3f037400} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[810.33px] w-[64.24px]" data-name="Button">
      <Icon24 />
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[45.5px] not-italic text-[#8b9d83] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Índice
      </p>
    </div>
  );
}

function Chismografo() {
  return (
    <div className="absolute h-[863.333px] left-0 overflow-clip top-0 w-[660.667px]" style={{ backgroundImage: "linear-gradient(127.425deg, rgb(242, 232, 220) 0%, rgb(243, 234, 223) 16.667%, rgb(245, 237, 227) 33.333%, rgb(246, 239, 230) 50%, rgb(247, 241, 233) 66.667%, rgb(249, 244, 237) 83.333%, rgb(250, 246, 240) 100%)" }} data-name="Chismografo">
      <Heading27 />
      <Paragraph45 />
      <div className="absolute flex items-center justify-center left-[204.15px] size-[252.365px] top-[229.48px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.88deg]">
          <Container144 />
        </div>
      </div>
      <Button20 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a3428] text-[18px] top-[-0.67px] w-[500px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        El Chismógrafo es un espacio abierto para que tú también seas parte de esta memoria viva. Comparte tus recuerdos, tus historias familiares, las anécdotas que te contaron tus abuelas.
      </p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p190f8900} id="Vector" stroke="var(--stroke-0, #677A5F)" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute bg-[rgba(103,122,95,0.1)] content-stretch flex items-center justify-center left-[38.67px] px-[14px] rounded-[22369600px] size-[56px] top-0" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[18px] left-0 top-[64px] w-[133.333px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[18px] left-[67.06px] not-italic text-[#4a3428] text-[12px] text-center top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Comparte
      </p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute h-[82px] left-0 top-0 w-[133.333px]" data-name="Container">
      <Container149 />
      <Paragraph47 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p26f40b00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #8B9D83)" strokeWidth="2.33333" />
          <path d={svgPaths.p287a5400} id="Vector_3" stroke="var(--stroke-0, #8B9D83)" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute bg-[rgba(139,157,131,0.1)] content-stretch flex items-center justify-center left-[38.67px] px-[14px] rounded-[22369600px] size-[56px] top-0" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[18px] left-0 top-[64px] w-[133.333px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[18px] left-[66.8px] not-italic text-[#4a3428] text-[12px] text-center top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Conecta
      </p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[82px] left-[149.33px] top-0 w-[133.333px]" data-name="Container">
      <Container151 />
      <Paragraph48 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p329e9e00} id="Vector" stroke="var(--stroke-0, #D4654F)" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute bg-[rgba(212,101,79,0.1)] content-stretch flex items-center justify-center left-[38.67px] px-[14px] rounded-[22369600px] size-[56px] top-0" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[18px] left-0 top-[64px] w-[133.333px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Regular',sans-serif] font-normal leading-[18px] left-[66.99px] not-italic text-[#4a3428] text-[12px] text-center top-[-0.67px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Preserva
      </p>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute h-[82px] left-[298.67px] top-0 w-[133.333px]" data-name="Container">
      <Container153 />
      <Paragraph49 />
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute h-[82px] left-[34px] top-[34px] w-[432px]" data-name="Container">
      <Container148 />
      <Container150 />
      <Container152 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[133.14px] size-[24.06px] top-[13.53px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.06 24.06">
        <g id="Icon">
          <path d="M12.0299 20.05H21.0524" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.005" />
          <path d={svgPaths.p1fdff000} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.005" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[27.067px] left-[169.42px] top-[12.03px] w-[130.325px]" data-name="Text">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27.067px] left-[-0.19px] text-[18.045px] text-white top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Usa el dispositivo
      </p>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[51.127px] relative rounded-[22425522px] shadow-[0px_10.025px_15.037px_0px_rgba(0,0,0,0.1),0px_4.01px_6.015px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(103, 122, 95) 0%, rgb(106, 124, 98) 7.1429%, rgb(108, 127, 100) 14.286%, rgb(111, 129, 103) 21.429%, rgb(113, 132, 105) 28.571%, rgb(116, 134, 108) 35.714%, rgb(118, 137, 110) 42.857%, rgb(121, 139, 113) 50%, rgb(123, 142, 115) 57.143%, rgb(126, 144, 118) 64.286%, rgb(129, 147, 121) 71.429%, rgb(131, 149, 123) 78.571%, rgb(134, 152, 126) 85.714%, rgb(136, 154, 128) 92.857%, rgb(139, 157, 131) 100%)" }} data-name="Container">
      <Icon28 />
      <Text12 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute content-stretch flex flex-col h-[59.147px] items-start left-[33.46px] pt-[8.02px] top-[139.93px] w-[433.08px]" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[233px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(103,122,95,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container147 />
      <Container154 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Italic',sans-serif] font-normal italic leading-[22.75px] left-[250px] text-[#6d5347] text-[14px] text-center top-[-0.33px] w-[500px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>{`"Cada historia compartida es un hilo que teje la gran red de nuestra memoria colectiva."`}</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[443.5px] items-start left-[80.33px] top-[209.92px] w-[500px]" data-name="Container">
      <Paragraph46 />
      <Container146 />
      <Paragraph50 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[42.81px] size-[18px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p60f7dc0} id="Vector" stroke="var(--stroke-0, #677A5F)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute h-[21px] left-[567.85px] top-[810.33px] w-[60.813px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[21px] left-[17.5px] not-italic text-[#677a5f] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Inicio
      </p>
      <Icon29 />
    </div>
  );
}

function Chismografo1() {
  return (
    <div className="absolute h-[863.333px] left-[660.67px] overflow-clip top-0 w-[660.667px]" style={{ backgroundImage: "linear-gradient(127.425deg, rgb(250, 246, 240) 0%, rgb(249, 244, 237) 16.667%, rgb(247, 241, 233) 33.333%, rgb(246, 239, 230) 50%, rgb(245, 237, 227) 66.667%, rgb(243, 234, 223) 83.333%, rgb(242, 232, 220) 100%)" }} data-name="Chismografo">
      <Container145 />
      <Button21 />
    </div>
  );
}

function Container156() {
  return <div className="absolute bg-gradient-to-r from-[rgba(74,52,40,0.2)] h-[863px] left-[644.67px] to-[rgba(74,52,40,0.2)] top-[0.17px] via-1/2 via-[rgba(109,83,71,0.5)] w-[32px]" data-name="Container" />;
}

function Container143() {
  return (
    <div className="bg-[#4a3428] h-[863.333px] relative shrink-0 w-full" data-name="Container">
      <Chismografo />
      <Chismografo1 />
      <Container156 />
    </div>
  );
}

function App7() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col h-[863.333px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Container143 />
    </div>
  );
}

function DisenoLibroInteractivo7() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[863px] items-start left-[7357px] pr-[-0.333px] top-[415px] w-[1321px]" data-name="Diseño libro interactivo">
      <App7 />
    </div>
  );
}

export default function TerceraVersionSofiSpace() {
  return (
    <div className="bg-[#d1dbe4] relative size-full" data-name="tercera versión - sofi space">
      <DisenoLibroInteractivo />
      <DisenoLibroInteractivo1 />
      <DisenoLibroInteractivo2 />
      <DisenoLibroInteractivo3 />
      <DisenoLibroInteractivo4 />
      <DisenoLibroInteractivo5 />
      <DisenoLibroInteractivo6 />
      <DisenoLibroInteractivo7 />
    </div>
  );
}