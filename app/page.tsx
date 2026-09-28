import Image from "next/image";

export default function Catalog() {
  // 1'den 22'ye kadar sayıları içeren bir dizi
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <main className="w-full bg-white min-h-screen">
      
      {/* 1. EKRAN: Tam Ekran Kapak ve Animasyon */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end items-center pb-12 overflow-hidden">
        <Image 
          src="/images/kapak.png"
          alt="Dora Kemer Kapak"
          fill
          className="object-cover object-center -z-10"
          priority
          sizes="100vw"
        />
        
        {/* Yukarı Kaydır / Zıplama Animasyonu */}
        <div className="animate-bounce flex flex-col items-center text-white drop-shadow-lg">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-90 font-medium">
            Kaydır
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="opacity-90"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </section>

      {/* 2. KISIM: Katalog Sayfaları (Sıfır Kenar Boşluğu) */}
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
          />
        ))}
      </section>
      
    </main>
  );
}
