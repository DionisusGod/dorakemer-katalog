import Image from "next/image";

export default function Catalog() {
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    // Ana kapsayıcı relative yapıldı
    <main className="relative w-full bg-white">
      
      {/* 1. EKRAN: SABİT (STICKY) KAPAK 
          Kapak ekranda sabit kalır (sticky top-0), z-0 ile en alt katmana atılır.
      */}
      <section className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-white z-0">
        
        {/* KAPAK FOTOSU */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Image 
            src="/images/kapak.png"
            alt="Dora Kemer Kapak"
            fill
            className="object-contain object-center" 
            priority
            sizes="100vw"
            quality={100}
            unoptimized
          />
        </div>

        {/* Yazı Okunabilirliği İçin Degrade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
        
        {/* Yukarı Kaydır Animasyonu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce flex flex-col items-center text-white">
          <span className="text-[11px] tracking-[0.4em] uppercase mb-2 font-semibold drop-shadow-md">
            Kaydır
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="26" 
            height="26" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="drop-shadow-md"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </section>

      {/* 2. KISIM: KATALOG SAYFALARI (Kapağın üstüne kayarak çıkar) 
          z-10 verilerek kapağın (z-0) üzerine çıkması sağlandı. 
          Üst kısımdaki gölge (shadow) sayesinde katman hissi güçlendirildi.
      */}
      <section className="relative z-10 w-full flex flex-col bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
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
      </section>
      
    </main>
  );
}
