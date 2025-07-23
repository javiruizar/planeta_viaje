"use client";
// src/components/mdx/MdxPreview.tsx
// Componente cliente para renderizar preview de MDX

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '@/lib/mdx-components';
import MdxRenderer from '@/lib/mdx-renderer';

interface MdxPreviewProps {
  content: string;
  title: string;
  excerpt?: string;
}

const MdxPreview: React.FC<MdxPreviewProps> = ({ content,  }) => {
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-700">
          <strong>⚠️ Vista previa de borrador:</strong> Este es un archivo en desarrollo.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        
               
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
                  <MdxRenderer content={content} />
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