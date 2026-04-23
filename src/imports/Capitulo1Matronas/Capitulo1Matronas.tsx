import svgPaths from "./svg-lkr6a6t9bu";
import imgFrame3 from "./9c3d0e995ce09209b2e17f6a0801bb229e158564.png";
import imgImageWithFallback from "./b49eb69f990cadcdbde3956eac2846821db47e1d.png";
import imgImageWithFallback1 from "./1cd4ced756ff1a317b76b37d4eb847d7ac8cae62.png";
import imgImageWithFallback2 from "./e395b2f386f5f9bf079a8b7420510257e4f7dae0.png";
import imgImageWithFallback3 from "./f11564d4e691bc230a87ceb9c54e731ff2d2fdef.png";
import imgImageWithFallback4 from "./6a4c0be4fccbc1eb2840f564361721ea80123897.png";
import imgImageWithFallback5 from "./42c39fe09aeea04cd165f4520dc7554335f86107.png";

function Frame() {
  return (
    <div className="absolute left-[326px] size-[52px] top-[62px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[319.989px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[320px] items-start left-[24px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[142px] w-[354px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fff1df] h-[269px] left-[24px] overflow-clip rounded-[20px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] top-[492px] w-[354px]">
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium h-[203px] leading-[normal] left-[14px] not-italic text-[#683e07] text-[14px] top-[33px] w-[326px] whitespace-pre-wrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        En Santa Fe hay mujeres que no aparecen en los libros de historia. No tienen estatua en el parque ni retrato en el museo. Pero son ellas las que sostuvieron los hogares, los saberes y los sabores de este territorio
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Las llamamos matronas. No por un título, sino por lo que hicieron: criar hijos propios y ajenos, cocinar con leña antes del amanecer, conocer las plantas que sanan, atender partos cuando no había hospital cerca, cargar el peso de la familia sin que nadie lo contara..
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p11678e00} id="Vector" stroke="var(--stroke-0, #8B9D83)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[136.688px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[24px] items-center left-[24px] pl-[28px] pr-[3px] top-[828px] w-[136.688px]">
      <Button />
      <p className="font-['Commissioner:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#8b9d83] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Volver al índice
      </p>
    </div>
  );
}

function Pagina() {
  return (
    <div className="absolute bg-[#f6e5cf] h-[874px] left-0 overflow-clip top-0 w-[402px]" data-name="Pagina 1">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] left-[32px] text-[#b3782e] text-[16px] top-[92px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Matronas : Esencia del territorio `}</p>
      <Frame />
      <Container />
      <Frame1 />
      <Frame3 />
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] left-[32px] text-[#683e07] text-[32px] top-[49px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Capitulo  1`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#fff1df] font-['Commissioner:Medium',sans-serif] font-medium h-[143px] leading-[normal] left-[24px] not-italic overflow-clip rounded-[20px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] text-[14px] top-[258px] w-[354px]">
      <p className="absolute left-[14px] text-[#683e07] top-[24px] w-[326px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Su historia no está escrita. Vive en la memoria de quienes las conocieron, en las manos que aprendieron viendo, en las recetas que se repiten sin recetario.
      </p>
      <p className="absolute h-[16px] left-[14px] text-[#b3782e] top-[103px] w-[183px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        Este es un capitulo para ellas
      </p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-[33px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[160px] top-[62px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-[218px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[160px] top-[62px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback2} />
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[191.99px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback3} />
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute left-0 rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[160px] top-[0.03px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback4} />
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute left-[189px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[160px] top-[-2.97px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback5} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback4 />
      <ImageWithFallback5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.984px] h-[361px] items-start left-[24px] top-[430px] w-[354px]" data-name="Container">
      <ImageWithFallback3 />
      <Container2 />
    </div>
  );
}

function Pagina1() {
  return (
    <div className="absolute bg-[#f6e5cf] h-[874px] left-[414px] overflow-clip top-0 w-[402px]" data-name="Pagina 2">
      <Frame2 />
      <ImageWithFallback1 />
      <ImageWithFallback2 />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[301px]" data-name="Heading 3">
      <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[36px] left-0 text-[#ba4f33] text-[24px] top-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Sus oficios tradicionales
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#fff1df] content-stretch flex flex-col gap-[12px] h-[290px] items-start left-[24px] p-[24px] rounded-[14px] top-[203px] w-[354px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ba4f33] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading />
      <div className="content-stretch flex font-['Commissioner:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 text-[14px]" data-name="Texto Oficios">
        <ul className="block leading-[0] relative shrink-0 size-[23px] text-[#e07a5f]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          <li className="list-disc ms-[21px]">
            <span className="leading-[normal] text-[14px]">​</span>
          </li>
        </ul>
        <p className="h-[22px] leading-[normal] relative shrink-0 text-[#683e07] w-[255px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Parteras y cuidadoras de la vida
        </p>
      </div>
      <div className="content-stretch flex font-['Commissioner:Medium',sans-serif] font-medium gap-[4px] h-[35px] items-start not-italic relative shrink-0 text-[14px]" data-name="Texto Oficios">
        <ul className="block leading-[0] relative shrink-0 size-[23px] text-[#e07a5f]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          <li className="list-disc ms-[21px]">
            <span className="leading-[normal] text-[14px]">​</span>
          </li>
        </ul>
        <p className="h-[22px] leading-[normal] relative shrink-0 text-[#683e07] w-[255px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Cocineras tradicionales y guardianas de recetas
        </p>
      </div>
      <div className="content-stretch flex font-['Commissioner:Medium',sans-serif] font-medium gap-[4px] h-[33px] items-start not-italic relative shrink-0 text-[14px]" data-name="Texto Oficios">
        <ul className="block leading-[0] relative shrink-0 size-[23px] text-[#e07a5f]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          <li className="list-disc ms-[21px]">
            <span className="leading-[normal] text-[14px]">​</span>
          </li>
        </ul>
        <p className="h-[22px] leading-[normal] relative shrink-0 text-[#683e07] w-[255px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Hierbateras y conocedoras de medicina ancestral
        </p>
      </div>
      <div className="content-stretch flex font-['Commissioner:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 text-[14px]" data-name="Texto Oficios">
        <ul className="block leading-[0] relative shrink-0 size-[23px] text-[#e07a5f]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          <li className="list-disc ms-[21px]">
            <span className="leading-[normal] text-[14px]">​</span>
          </li>
        </ul>
        <p className="h-[22px] leading-[normal] relative shrink-0 text-[#683e07] w-[255px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Tejedoras y artesanas
        </p>
      </div>
      <div className="content-stretch flex font-['Commissioner:Medium',sans-serif] font-medium gap-[4px] h-[32px] items-start not-italic relative shrink-0 text-[14px]" data-name="Texto Oficios">
        <ul className="block leading-[0] relative shrink-0 size-[23px] text-[#e07a5f]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          <li className="list-disc ms-[21px]">
            <span className="leading-[normal] text-[14px]">​</span>
          </li>
        </ul>
        <p className="h-[22px] leading-[normal] relative shrink-0 text-[#683e07] w-[255px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Narradora de historias y tradiciones orales
        </p>
      </div>
    </div>
  );
}

function ImageGuardianasDeLaMemoria() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Image (Guardianas de la memoria)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px relative rounded-[26843500px] w-[192px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageGuardianasDeLaMemoria />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[26843500px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[60px] relative shrink-0 w-[164.838px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[0] left-[82.5px] text-[#ba4f33] text-[20px] text-center top-[-0.6px] w-[165px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[30px] mb-0">{`"Guardianas de la`}</p>
          <p className="leading-[30px]">{`memoria viva"`}</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[276px] items-center left-[105px] top-[515px] w-[192px]" data-name="Container">
      <Container5 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[130.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[24px] left-[65.5px] not-italic text-[#d4654f] text-[16px] text-center top-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
          Siguiente capítulo
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3b6ad300} id="Vector" stroke="var(--stroke-0, #D4654F)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[220px] top-[828px] w-[158px]" data-name="Button">
      <Text />
      <Icon1 />
    </div>
  );
}

function Pagina2() {
  return (
    <div className="absolute bg-[#f6e5cf] h-[874px] left-[828px] overflow-clip top-0 w-[402px]" data-name="Pagina 3">
      <Container3 />
      <p className="absolute font-['Commissioner:Medium',sans-serif] font-medium leading-[0] left-[24px] not-italic text-[#4a3428] text-[14px] top-[62px] w-[354px]" style={{ fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}>
        <span className="leading-[normal]">El museo</span>
        <span className="leading-[normal] text-[#ba4f33]">{` Juan del Corral`}</span>
        <span className="leading-[normal]">{` tuvo una exposición que lo dijo sin rodeos: detrás de cada hombre importante, de cada ley, de cada obra, siempre hubo una mujer que lo mantuvo. Una madre que cuidó, que cocinó, que sostuvo. Esa figura — la matriarca del hogar — es una de las cosas más arraigadas de Antioquia, y Santa Fe no es la excepción.`}</span>
      </p>
      <Container4 />
      <Button1 />
    </div>
  );
}

export default function Capitulo1Matronas() {
  return (
    <div className="bg-[#f6e5cf] relative size-full" data-name="Capitulo 1 Matronas">
      <Pagina />
      <Pagina1 />
      <Pagina2 />
    </div>
  );
}