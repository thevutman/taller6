import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-ffn9u4s4vz";
import imgImage3 from "figma:asset/01a0cc64347219188cbf2427a541bf93e703b8b5.png";
import imgImage4 from "figma:asset/3d917c6ae26f75a48b88a88f079126d00a2354ba.png";
import imgImageLogoMaxiLibro from "figma:asset/a84644243e844c20856abffa5e376e3f3ed4e17a.png";
import Cabina from "./pages/Cabina";
import Historias from "./pages/Historias";

type Page = "portada" | "indice" | "cabina" | "historias";

interface ChapterButtonProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

function ChapterButton({ imageSrc, title, subtitle, color, onClick }: ChapterButtonProps) {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.6)] h-[116px] relative rounded-[14px] shrink-0 w-full cursor-pointer"
      onClick={onClick}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.8)",
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[26px] relative size-full">
          {/* Avatar Circle */}
          <div className="bg-white relative rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-16">
            <div className="bg-clip-padding border-0 border-transparent border-solid flex flex-col items-start overflow-clip relative rounded-full size-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imageSrc} />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-[22px] font-semibold leading-[33px] mb-1"
              style={{
                fontFamily: 'Fraunces, serif',
                fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                color: color
              }}
            >
              {title}
            </h3>
            <p
              className="text-[13px] leading-[17.875px] text-[#6d5347]"
              style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Arrow Icon */}
          <motion.div
            className="shrink-0 size-6"
            whileHover={{ x: 5 }}
          >
            <div className="h-6 overflow-clip relative shrink-0 w-full">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-5.05%_-10.1%_-5.05%_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4142 15.4142">
                    <path d={svgPaths.p3c23ab48} stroke="#6D5347" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MaxiLibro() {
  const [currentPage, setCurrentPage] = useState<Page>("portada");

  const goToPage = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#4a3428] flex items-center justify-center p-8">
      <div className="relative w-full max-w-[1321px] h-[863px] bg-[#faf6f0] overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {/* PORTADA */}
          {currentPage === "portada" && (
            <motion.div
              key="portada"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex"
              onClick={() => goToPage("indice")}
            >
              {/* Left Page - Decorative */}
              <div className="w-1/2 bg-[#f2e8dc] relative opacity-5">
                <div className="absolute border-2 border-[#d4654f] border-solid left-[364.67px] rounded-full size-[256px] top-[80px]" />
                <div className="absolute border-2 border-[#8b9d83] border-solid left-[40px] rounded-full size-[320px] top-[463.33px]" />
              </div>

              {/* Center Spine */}
              <div className="w-[32px] bg-gradient-to-r from-[rgba(74,52,40,0.2)] to-[rgba(74,52,40,0.2)] via-[rgba(109,83,71,0.5)]" />

              {/* Right Page - Main Content */}
              <div className="w-1/2 bg-[#f2e8dc] relative flex flex-col items-center justify-center cursor-pointer">
                <motion.img
                  src={imgImageLogoMaxiLibro}
                  alt="MaxiLibro Logo"
                  className="w-[180px] h-[180px] mb-8 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                />

                <h1
                  className="text-[56px] font-bold leading-[84px] text-[#4a3428] mb-4"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Chismógrafo
                </h1>

                <p
                  className="text-[24px] font-semibold leading-[36px] text-[#6d5347] mb-2"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Historias Anónimas
                </p>

                <p
                  className="text-[18px] font-medium leading-[27px] text-[#6d5347] mb-32"
                  style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                >
                  Santa Fe de Antioquia
                </p>

                <motion.p
                  className="text-[14px] font-normal leading-[21px] text-[#8b9d83]"
                  style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Toca para comenzar
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* ÍNDICE */}
          {currentPage === "indice" && (
            <motion.div
              key="indice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex"
            >
              {/* Left Page */}
              <div className="w-1/2 bg-[#f2e8dc] relative px-12 py-12 flex items-center justify-center">
                <div className="text-center">
                  <motion.img
                    src={imgImageLogoMaxiLibro}
                    alt="Chismógrafo Logo"
                    className="w-[140px] h-[140px] mb-8 mx-auto"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <h2
                    className="text-[48px] font-bold leading-[60px] text-[#4a3428] mb-4"
                    style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Chismógrafo
                  </h2>

                  <p
                    className="text-[18px] leading-[28px] text-[#6d5347]"
                    style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                  >
                    Historias Anónimas de<br />Santa Fe de Antioquia
                  </p>

                  <motion.button
                    onClick={() => goToPage("portada")}
                    className="mt-12 flex items-center gap-2 text-[#8b9d83] hover:text-[#677a5f] transition-colors mx-auto"
                    whileHover={{ x: -5 }}
                  >
                    <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p3f037400} stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: 'Commissioner, sans-serif', fontVariationSettings: "'FLAR' 0, 'VOLM' 0" }}
                    >
                      Volver
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Center Spine */}
              <div className="w-[32px] bg-gradient-to-r from-[rgba(74,52,40,0.2)] to-[rgba(74,52,40,0.2)] via-[rgba(109,83,71,0.5)]" />

              {/* Right Page */}
              <div className="w-1/2 bg-[#f2e8dc] relative px-12 pt-[88px]">
                <div className="flex flex-col gap-5">
                  <ChapterButton
                    imageSrc={imgImage3}
                    title="Cabina"
                    subtitle="Graba tu chisme anónimo"
                    color="#a84732"
                    onClick={() => goToPage("cabina")}
                  />

                  <ChapterButton
                    imageSrc={imgImage4}
                    title="Historias"
                    subtitle="Lee los chismes de la comunidad"
                    color="#677a5f"
                    onClick={() => goToPage("historias")}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* CABINA */}
          {currentPage === "cabina" && (
            <Cabina onBack={() => goToPage("indice")} />
          )}

          {/* HISTORIAS */}
          {currentPage === "historias" && (
            <Historias onBack={() => goToPage("indice")} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
