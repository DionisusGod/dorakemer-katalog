"use client";

import { useState } from "react";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Catalog() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <main className="relative w-full bg-white">
      <Analytics />
      <SpeedInsights />
      {/* 1. KATMAN: GİRİŞ EKRANI */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900 cursor-pointer transition-opacity duration-1000 ease-in-out ${
          isCatalogOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsCatalogOpen(true)}
      >
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image 
            src="/images/others/arkaplan.png" 
            alt="Dora Kemer Giriş"
            fill
            className="object-cover object-center"
            priority // Sadece ilk açılış ekranı priority almalı
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center animate-pulse hover:scale-105 transition-transform duration-500">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-[1px] border-white/60 bg-black/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <span className="text-white tracking-[0.6em] font-light text-xs md:text-sm uppercase drop-shadow-md">
            Kataloğu İncele
          </span>
        </div>
      </div>

      {/* 2. KATMAN: KATALOG SAYFALARI */}
      <div className="w-full flex flex-col">
        <Image 
          src="/images/others/kapak.png"
          alt="Dora Kemer Kapak"
          width={1240}
          height={1754}
          className="w-full h-auto object-cover block"
          sizes="100vw"
          // priority kaldırıldı, sadece açılınca yüklenecek
        />
        {pages.map((pageNumber) => (
          <Image 
            key={pageNumber}
            src={`/images/sayfa-${pageNumber}.jpeg`} 
            alt={`Dora Kemer - Sayfa ${pageNumber}`} 
            width={1240} 
            height={1754} 
            className="w-full h-auto object-cover block"
            sizes="100vw"
            // Tüm sayfalar lazy-load olacak (varsayılan)
          />
        ))}
      </div>
      
    </main>
  );
}