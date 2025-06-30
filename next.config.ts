import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se añade la configuración de imágenes para permitir dominios externos.
  images: {
    // `remotePatterns` es la forma recomendada y más segura de autorizar dominios.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'planeta-viaje.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },

    ],
  },
};

export default nextConfig;