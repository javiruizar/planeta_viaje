import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSanitize],
  },
})

const nextConfig: NextConfig = {
  // Configuración existente
  experimental: {
    mdxRs: true,
  },
  // Configuración de MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
}

export default withMDX(nextConfig)