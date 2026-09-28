import Image from "next/image";

export default function Catalog() {
  // 1'den 22'ye kadar sayıları içeren bir dizi oluşturur
  const pages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Üst Bilgi / Header */}
      <header className="w-full py-16 flex flex-col items-center justify-center bg-white border-b border-stone-200">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase">
          Dora Kemer
        </h1>
        <p className="mt-4 text-stone-500 uppercase tracking-widest text-sm font-medium">
          B2B Koleksiyon Kataloğu
        </p>
      </header>

      {/* Ana İçerik ve Görseller */}
      <main className="max-w-5xl mx-auto py-12 px-4 flex flex-col items-center gap-12">
        
        {/* Katalog Sayfaları Konteyneri */}
        <div className="w-full shadow-2xl bg-white flex flex-col border border-stone-100">
          
          {pages.map((pageNumber) => (
            <Image 
              key={pageNumber}
              src={`/images/sayfa-${pageNumber}.jpeg`} 
              alt={`Dora Kemer - Sayfa ${pageNumber}`} 
              // A4 formatı piksel oranları (1240 x 1754)
              width={1240} 
              height={1754} 
              className="w-full h-auto object-cover border-b border-stone-100 last:border-b-0"
              // Vercel optimizasyonu: Sadece ilk 2 sayfa anında, diğer 20 sayfa kaydırdıkça yüklenir
              priority={pageNumber <= 2} 
            />
          ))}
          
        </div>
      </main>

      {/* Alt Bilgi / Footer */}
      <footer className="w-full py-10 text-center text-stone-400 text-sm border-t border-stone-200 bg-white">
        &copy; {new Date().getFullYear()} Dora Kemer. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
