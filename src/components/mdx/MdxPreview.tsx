"use client";
// src/components/mdx/MdxPreview.tsx
// Componente cliente para renderizar preview de MDX

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '@/lib/mdx-components';
import { markdownToHtml } from '@/lib/mdx-parser';
import { 
  MapaInteractivo, 
  CalloutBox, 
  TourCard, 
  ImageGallery, 
  Timeline, 
  VideoEmbed 
} from '@/components/mdx';

interface MdxPreviewProps {
  content: string;
  title: string;
  excerpt?: string;
}

const MdxPreview: React.FC<MdxPreviewProps> = ({ content, title, excerpt }) => {
  // Función para detectar y renderizar componentes
  const renderMdxContent = (text: string) => {
    const lines = text.split('\n');
    const result: React.ReactNode[] = [];
    let currentText = '';
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Detectar componentes por nombre
      if (line.includes('<MapaInteractivo')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Extraer props básicos
        const localizacionMatch = line.match(/localizacion="([^"]*)"/);
        const zoomMatch = line.match(/zoom=\{([^}]*)\}/);
        
        result.push(
          <MapaInteractivo 
            key={`mapa-${i}`}
            localizacion={localizacionMatch ? localizacionMatch[1] : 'islandia'}
            zoom={zoomMatch ? parseInt(zoomMatch[1]) : 10}
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</MapaInteractivo>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<CalloutBox')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const typeMatch = line.match(/type="([^"]*)"/);
        const titleMatch = line.match(/title="([^"]*)"/);
        
        // Buscar el contenido del CalloutBox
        let calloutContent = '';
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('</CalloutBox>')) {
          calloutContent += lines[j] + '\n';
          j++;
        }
        
        result.push(
          <CalloutBox 
            key={`callout-${i}`}
            type={(typeMatch ? typeMatch[1] : 'info') as 'info' | 'warning' | 'tip' | 'note'}
            title={titleMatch ? titleMatch[1] : undefined}
          >
            {calloutContent}
          </CalloutBox>
        );
        
        i = j + 1; // Saltar hasta después del CalloutBox
        
      } else if (line.includes('<TourCard')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const tituloMatch = line.match(/titulo="([^"]*)"/);
        const descripcionMatch = line.match(/descripcion="([^"]*)"/);
        const precioMatch = line.match(/precio="([^"]*)"/);
        const destinoMatch = line.match(/destino="([^"]*)"/);
        const duracionMatch = line.match(/duracion="([^"]*)"/);
        const ratingMatch = line.match(/rating=\{([^}]*)\}/);
        
        result.push(
          <TourCard 
            key={`tour-${i}`}
            titulo={tituloMatch ? tituloMatch[1] : 'Tour'}
            descripcion={descripcionMatch ? descripcionMatch[1] : ''}
            precio={precioMatch ? precioMatch[1] : '0€'}
            destino={destinoMatch ? destinoMatch[1] : '#'}
            duracion={duracionMatch ? duracionMatch[1] : '1 día'}
            rating={ratingMatch ? parseFloat(ratingMatch[1]) : 4.5}
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</TourCard>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<ImageGallery')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Datos de ejemplo para ImageGallery
        const sampleImages = [
          { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Cascada Gullfoss", caption: "La impresionante cascada Gullfoss" },
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Geysir", caption: "El famoso géiser Strokkur" },
          { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Þingvellir", caption: "Parque Nacional Þingvellir" }
        ];
        
        result.push(
          <ImageGallery 
            key={`gallery-${i}`}
            images={sampleImages}
            columns={3}
            gap="1rem"
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</ImageGallery>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<Timeline')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Datos de ejemplo para Timeline
        const sampleEvents = [
          {
            date: "Día 1",
            title: "Llegada a Reikiavik",
            description: "Aterrizamos en el aeropuerto Keflavík y nos dirigimos a la capital",
            location: "Reikiavik, Islandia"
          },
          {
            date: "Día 2-3",
            title: "Círculo Dorado",
            description: "Exploramos Gullfoss, Geysir y Þingvellir",
            location: "Círculo Dorado, Islandia"
          },
          {
            date: "Día 4-5",
            title: "Costa Sur",
            description: "Visitamos Vík, Skógafoss y la playa de arena negra",
            location: "Costa Sur, Islandia"
          }
        ];
        
        result.push(
          <Timeline 
            key={`timeline-${i}`}
            events={sampleEvents}
            orientation="vertical"
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</Timeline>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<VideoEmbed')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const urlMatch = line.match(/url="([^"]*)"/);
        const titleMatch = line.match(/title="([^"]*)"/);
        
        result.push(
          <VideoEmbed 
            key={`video-${i}`}
            url={urlMatch ? urlMatch[1] : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            title={titleMatch ? titleMatch[1] : 'Video'}
            width="100%"
            height="400px"
            provider="youtube"
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</VideoEmbed>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else {
        currentText += line + '\n';
        i++;
      }
    }
    
    // Agregar texto final
    if (currentText.trim()) {
      result.push(
        <div 
          key="final-text"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
        />
      );
    }
    
    return result;
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-700">
          <strong>⚠️ Vista previa de borrador:</strong> Este es un archivo en desarrollo.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        
        {excerpt && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 italic">{excerpt}</p>
          </div>
        )}
        
        <div className="prose max-w-none">
          <MDXProvider components={mdxComponents}>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2">Contenido MDX:</h3>
              <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
                {content}
              </pre>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Renderizado:</h3>
              <div className="bg-white p-6 rounded-lg border">
                <div className="text-gray-700 leading-relaxed">
                  {renderMdxContent(content)}
                </div>
              </div>
            </div>
          </MDXProvider>
        </div>
      </div>
    </div>
  );
};

export default MdxPreview; 