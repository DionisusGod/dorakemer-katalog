"use client";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Mousewheel,
  FreeMode,
} from "swiper/modules";

// Swiper Stilleri
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";

interface CatalogPage {
  id: string;
  src: string;
  alt: string;
}

const catalogPages: CatalogPage[] = [
  { id: "kapak", src: "/images/others/kapak.jpeg", alt: "Dora Kemer Kapak" },
  ...Array.from({ length: 27 }, (_, i) => ({
    id: `sayfa-${i + 1}`,
    src: `/images/sayfa-${i + 1}.jpeg`,
    alt: `Dora Kemer - Sayfa ${i + 1}`,
  })),
];

export default function Catalog() {
  return (
    <main className="relative w-full h-dvh bg-stone-950 overflow-hidden select-none flex items-center justify-center">
      <Analytics />
      <SpeedInsights />

      <Swiper
        modules={[EffectCoverflow, Mousewheel, FreeMode]}
        dir="ltr"
        direction="horizontal"
        effect="coverflow"
        speed={480}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={0}
        initialSlide={0}
        grabCursor={true}
        slideToClickedSlide={true}
        loop={false}
        roundLengths={true}
        watchSlidesProgress={true}
        resistance={true}
        resistanceRatio={0.85}
        threshold={3}
        touchReleaseOnEdges={true}
        // Sticky FreeMode: Hızlı savurmada 2-3 sayfa akar, durduğunda en yakın sayfaya yumuşakça kilitlenir
        freeMode={{
          enabled: true,
          sticky: true,
          momentum: true,
          momentumRatio: 0.45,
          momentumVelocityRatio: 0.5,
          momentumBounce: false,
          minimumVelocity: 0.02,
        }}
        // Görünmez Kenar Dokunuşları (Tap-to-Navigate): Aktif kartın sağına/soluna tek tıkla sayfa çevirme
        onClick={(swiper, event) => {
          if (swiper.clickedIndex === swiper.activeIndex && swiper.clickedSlide) {
            const rect = swiper.clickedSlide.getBoundingClientRect();
            const clientX =
              "clientX" in event && typeof event.clientX === "number"
                ? event.clientX
                : (event as unknown as TouchEvent).changedTouches?.[0]?.clientX ?? 0;

            const clickXRatio = (clientX - rect.left) / rect.width;
            if (clickXRatio < 0.25) {
              swiper.slidePrev();
            } else if (clickXRatio > 0.75) {
              swiper.slideNext();
            }
          }
        }}
        // Varsayılan (Mobil) Coverflow Ayarları
        coverflowEffect={{
          rotate: 26,
          stretch: 0,
          depth: 70,
          modifier: 1,
          slideShadows: false,
        }}
        // Masaüstü ve Mobil Ayrımı
        breakpoints={{
          // Mobil (< 768px): Dokunma akıcılığı için mousewheel tamamen kapalı, akıcı 3D açı
          0: {
            mousewheel: false,
            coverflowEffect: {
              rotate: 26,
              stretch: 0,
              depth: 70,
              modifier: 1,
              slideShadows: false,
            },
          },
          // Masaüstü (>= 768px - Macbook): Touchpad/fare tekerleği aktif, 34 derece rotasyon
          768: {
            mousewheel: {
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 1,
            },
            coverflowEffect: {
              rotate: 34,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          },
        }}
        className="w-full h-full !overflow-hidden"
      >
        {catalogPages.map((page, index) => (
          <SwiperSlide
            key={page.id}
            className="!w-[min(92vw,calc(88dvh*9/16))] !h-[min(88dvh,calc(92vw*16/9))] rounded-[26px] md:rounded-[34px] overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.7)] border border-white/10 relative my-auto bg-stone-900"
          >
            <Image
              src={page.src}
              alt={page.alt}
              fill
              className="object-cover select-none"
              sizes="(max-width: 768px) 92vw, 600px"
              priority={index <= 2}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}