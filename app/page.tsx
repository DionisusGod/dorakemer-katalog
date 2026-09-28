import Image from "next/image";

export default function Catalog() {
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <main className="w-full bg-white min-h-screen">
      
      {/* 1. EKRAN: Tam Ekran Kapak (Normal kaydırma akışında) */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-stone-900">
        
        {/* KAPAK FOTOSU: Boşlukları yok etmek için tekrar object-cover yapıldı */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/kapak.png"
            alt="Dora Kemer Kapak"
            fill
            className="object-cover object-center" 
            priority
            sizes="100vw"
            quality={100}
            unoptimized
          />
        </div>

        {/* Yazının okunaklı olması için alt kısımdaki zarif karanlık geçiş */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Yukarı Kaydır Animasyonu */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce flex flex-col items-center text-white">
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

      {/* 2. KISIM: Katalog Sayfaları (Kapağın hemen altından doğal akışla gelir) */}
      <section className="w-full flex flex-col bg-white">
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
