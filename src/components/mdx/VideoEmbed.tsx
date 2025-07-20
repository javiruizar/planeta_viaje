// src/components/mdx/VideoEmbed.tsx
// Componente para mostrar videos embebidos en contenido MDX

import React from 'react';
import { VideoEmbedProps } from '@/types/mdx';

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  url, 
  title, 
  width = "100%", 
  height = "400px",
  provider = 'youtube'
}) => {
  const getVideoId = (url: string, provider: string) => {
    if (provider === 'youtube') {
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      return match ? match[1] : null;
    }
    if (provider === 'vimeo') {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? match[1] : null;
    }
    return null;
  };

  const getEmbedUrl = (url: string, provider: string) => {
    const videoId = getVideoId(url, provider);
    
    if (!videoId) {
      return url; // Fallback a la URL original
    }
    
    switch (provider) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId}`;
      default:
        return url;
    }
  };

  const embedUrl = getEmbedUrl(url, provider);

  return (
    <div className="my-8">
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">🎥 {title}</h3>
        </div>
      )}
      
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg"
        style={{ width, height }}
      >
        <iframe
          src={embedUrl}
          title={title || 'Video embebido'}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Ver en {provider === 'youtube' ? 'YouTube' : provider === 'vimeo' ? 'Vimeo' : 'plataforma original'}
        </a>
      </div>
    </div>
  );
};

export default VideoEmbed; 