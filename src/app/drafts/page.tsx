// src/app/drafts/page.tsx
// Página para listar todos los archivos MDX en la carpeta drafts

import React from 'react';
import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx-server';

export default function DraftsPage() {
  const drafts = getAllMdxFiles();
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-700">
          <strong>📝 Gestor de borradores:</strong> Aquí puedes ver y editar todos tus archivos MDX.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Borradores MDX</h1>
      
      {drafts.length === 0 ? (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">No hay borradores en la carpeta drafts.</p>
          <p className="text-sm text-gray-500 mt-2">
            Crea archivos .mdx en la carpeta drafts/ para verlos aquí.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {drafts.map((draft) => (
            <div key={draft.slug} className="bg-white p-4 rounded-lg shadow border">
              <h2 className="text-xl font-semibold mb-2">{draft.title}</h2>
              
              {draft.excerpt && (
                <p className="text-gray-600 mb-3">{draft.excerpt}</p>
              )}
              
              <div className="flex gap-2 items-center">
                <Link 
                  href={`/draft/${draft.slug}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Ver preview
                </Link>
                
                <span className="text-sm text-gray-500">
                  {draft.content.length} caracteres
                </span>
                
                <span className="text-xs text-gray-400">
                  {draft.slug}.mdx
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">📋 Instrucciones:</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Crea archivos .mdx en la carpeta drafts/</li>
          <li>• Usa componentes como &lt;InteractiveMap localizacion=&quot;tailandia&quot; /&gt;</li>
          <li>• Haz clic en &quot;Ver preview&quot; para ver el resultado</li>
          <li>• Copia el contenido MDX al campo content de la base de datos</li>
        </ul>
      </div>
    </div>
  );
} 