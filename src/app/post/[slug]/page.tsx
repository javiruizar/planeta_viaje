// src/app/post/[slug]/page.tsx
export const dynamic = 'force-dynamic';

// Importamos React para el tipo JSX
import React from 'react';

// Importamos los componentes y datos necesarios.
// Importamos la función que obtiene un post real desde la base de datos por su slug.
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
// Importamos los componentes de comentarios desde el barril
import { CommentsList, CommentForm } from '@/components/comments';
// Importamos el componente de publicidad
import { MondoAdBox, OtherAddBox } from '@/components/ads/AdBox';
import Header from '@/components/layout/Header';

import { Metadata } from 'next';

/**
 * @description
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

/**
 * Página que muestra un post individual
 * @param {{ params: { slug: string } }} props - Las propiedades de la página
 * @returns {Promise<React.ReactNode>} El componente de la página
 */
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full">
      <Header backgroundImage={post.imageUrl} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-6 lg:gap-8">
          <article className="lg:col-span-4">
            <h1 className="text-4xl font-extrabold mb-6">{post.title}</h1>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{post.content}</p>
            </div>

            <section className="mt-12">
              <div className="mx-auto">
                <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
                <div className="space-y-6">
                  <CommentsList postId={post.id} />
                  <CommentForm postId={post.id} />
                </div>
              </div>
            </section>
          </article>

          <aside className="lg:col-span-2 space-y-6 mt-12 lg:mt-0 lg:ml-4 lg:px-2">
            <MondoAdBox />
            <OtherAddBox />
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Artículos relacionados</h3>
              <p className="text-sm text-gray-500">Próximamente más contenido...</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
