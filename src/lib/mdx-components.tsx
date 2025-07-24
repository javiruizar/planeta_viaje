// src/lib/mdx-components.tsx
// Mapeo de componentes MDX para renderizar contenido MDX

import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  InteractiveMap,
  CalloutBox,
  ImageGallery,
  Timeline,
  VideoEmbed,
  TourCard
} from '@/components/mdx';

// Componentes HTML estándar con estilos personalizados
const components = {
  // Componentes MDX personalizados
  InteractiveMap,
  CalloutBox,
  ImageGallery,
  Timeline,
  VideoEmbed,
  TourCard,
  
  // Componentes HTML estándar con estilos
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 
      {...props} 
      className="text-3xl font-bold mb-6 mt-8 text-gray-900"
    />
  ),
  
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 
      {...props} 
      className="text-2xl font-semibold mb-4 mt-6 text-gray-800"
    />
  ),
  
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 
      {...props} 
      className="text-xl font-semibold mb-3 mt-5 text-gray-800"
    />
  ),
  
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4 
      {...props} 
      className="text-lg font-semibold mb-2 mt-4 text-gray-800"
    />
  ),
  
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p 
      {...props} 
      className="mb-4 leading-relaxed text-gray-700"
    />
  ),
  
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const { href, ...restProps } = props;
    
    // Si no hay href, renderizar como un span
    if (!href) {
      return (
        <span 
          {...restProps} 
          className="text-blue-600 hover:text-blue-800 underline"
        />
      );
    }
    
    // Si es un enlace externo, usar <a> normal
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a 
          {...props} 
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    }
    
    // Para enlaces internos, usar Link de Next.js
    return (
      <Link 
        href={href}
        {...restProps} 
        className="text-blue-600 hover:text-blue-800 underline"
      />
    );
  },
  
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul 
      {...props} 
      className="mb-4 pl-6 list-disc text-gray-700"
    />
  ),
  
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol 
      {...props} 
      className="mb-4 pl-6 list-decimal text-gray-700"
    />
  ),
  
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li 
      {...props} 
      className="mb-1"
    />
  ),
  
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote 
      {...props} 
      className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700"
    />
  ),
  
    code: (props: ComponentPropsWithoutRef<"code">) => (
    <code 
      {...props} 
      className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800"
    />
  ),
  
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre 
      {...props} 
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
    />
  ),
  
  img: (props: ComponentPropsWithoutRef<"img">) => {
    const { src, alt, title, width, height, ...restProps } = props;
    
    // Si no hay src, no renderizar nada
    if (!src || typeof src !== 'string') {
      return null;
    }
    
    return (
      <div className="my-6">
        <Image
          src={src}
          width={typeof width === 'number' ? width : 800}
          height={typeof height === 'number' ? height : 600}
          className="w-full h-auto rounded-lg shadow-md"
          alt={alt || 'Imagen'}
          {...restProps}
        />
        {title && (
          <p className="text-sm text-gray-500 text-center mt-2 italic">
            {title}
          </p>
        )}
      </div>
    );
  },
  
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table 
        {...props} 
        className="min-w-full border border-gray-300 rounded-lg"
      />
    </div>
  ),
  
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th 
      {...props} 
      className="px-4 py-2 bg-gray-100 border-b border-gray-300 font-semibold text-left"
    />
  ),
  
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td 
      {...props} 
      className="px-4 py-2 border-b border-gray-300"
    />
  ),
  
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr 
      {...props} 
      className="my-8 border-gray-300"
    />
  ),
  
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong 
      {...props} 
      className="font-semibold"
    />
  ),
  
  em: (props: ComponentPropsWithoutRef<"em">  ) => (
    <em 
      {...props} 
      className="italic"
    />
  ),
};

export default components; 