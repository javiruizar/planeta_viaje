// src/app/draft/[slug]/page.tsx
// Página para previsualizar archivos MDX desde la carpeta drafts

import React from 'react';
import { notFound } from 'next/navigation';
import { getMdxFile } from '@/lib/mdx-server';
import MdxPreview from '@/components/mdx/MdxPreview';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DraftPage({ params }: PageProps) {
  const { slug } = await params;
  const mdxFile = getMdxFile(slug);
  
  if (!mdxFile) {
    notFound();
  }
  
  return (
    <MdxPreview 
      content={mdxFile.content}
      title={mdxFile.title || slug}
      excerpt={mdxFile.excerpt}
    />
  );
} 