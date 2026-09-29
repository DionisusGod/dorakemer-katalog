/** @type {import('next').NextConfig} */
const nextConfig = {
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
