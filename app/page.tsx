"use client";

import { useState } from "react";
import Image from "next/image";

export default function Catalog() {
  // Kataloğun açık olup olmadığını takip eden sistem
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  // 1. DURUM: KATALOG KAPALIYKEN GÖRÜNECEK GİRİŞ EKRANI
  if (!isCatalogOpen) {
    return (
      <main 
        // Tüm ekrana tıklanabilme özelliği verildi
        className="relative w-full h-[100dvh] bg-stone-900 flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => setIsCatalogOpen(true)}
      >
        {/* GİRİŞ ARKA PLAN GÖRSELİ (Kendi istediğiniz arkaplanı buraya atayabilirsiniz) */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image 
            src="/images/arkaplan.png" // Arka plan görselinizin adı
            alt="Dora Kemer Giriş"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
          />
        </div>

        {/* TIKLA BUTONU VE İKONU */}
        <div className="relative z-10 flex flex-col items-center justify-center animate-pulse hover:scale-105 transition-transform duration-500">
          
          {/* Büyük minimalist yuvarlak ikon */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-[1px] border-white/60 bg-black/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-2xl">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          
          {/* Tıkla Yazısı */}
          <span className="text-white tracking-[0.6em] font-light text-xs md:text-sm uppercase drop-shadow-md">
            Kataloğu İncele
          </span>
          
        </div>
      </main>
    );
  }

  // 2. DURUM: TIKLANDIKTAN SONRA AÇILACAK KATALOG
  return (
    <main className="w-full flex flex-col bg-white animate-in fade-in duration-1000">
      
      {/* Kapak Görseli (Artık 1. sayfa gibi davranıyor) */}

      {/* Diğer 22 Sayfa */}
      {pages.map((pageNumber) => (
        <Image 
          key={pageNumber}
          src={`/images/sayfa-${pageNumber}.jpeg`} 
          alt={`Dora Kemer - Sayfa ${pageNumber}`} 
          width={1240} 
          height={1754} 
          className="w-full h-auto object-cover block"
          priority={pageNumber <= 2}
          quality={100}
          unoptimized 
        />
      ))}
      
    </main>
  );
}
