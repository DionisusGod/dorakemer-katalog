import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dora Kemer | Dijital Ürün Kataloğu",
  description: "Dora Kemer Dijital Ürün Kataloğu ve Lookbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full antialiased bg-stone-950">
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
