import Image from "next/image";

export default function Catalog() {
  // 1'den 22'ye kadar sayıları içeren bir dizi
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <main className="w-full bg-white min-h-screen">
      
      {/* 1. EKRAN: Tam Ekran Kapak ve Animasyon */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end items-center pb-12 overflow-hidden">
        
        {/* KAPAK FOTOSU: Eksi katman hatası giderildi, arka plan yapıldı */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/kapak.png"
            alt="Dora Kemer Kapak"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Yukarı Kaydır Animasyonu: Görselin üstünde kalması için z-10 eklendi */}
        <div className="relative z-10 animate-bounce flex flex-col items-center text-white drop-shadow-2xl">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-90 font-bold drop-shadow-lg">
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
            className="opacity-90 drop-shadow-lg"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </section>

      {/* 2. KISIM: Katalog Sayfaları */}
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
