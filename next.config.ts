/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['192.168.1.138', 'localhost:3000'],
  async headers() {
    return [
      {
        // images klasöründeki tüm görselleri kapsar
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            // Görselleri 1 yıl boyunca tarayıcı ve Vercel CDN hafızasına kazır (immutable)
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
