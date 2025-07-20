#!/usr/bin/env node
// scripts/mdx-to-db.js
// Script para copiar contenido MDX a la base de datos

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Lee un archivo MDX y extrae su contenido
 */
function readMdxFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extraer título del primer h1
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.mdx');
    
    // Extraer excerpt
    const excerptMatch = content.match(/^#\s+.+?\n\n([\s\S]+?)(?:\n\n|$)/);
    const excerpt = excerptMatch ? excerptMatch[1].replace(/[#*`]/g, '') : '';
    
    return {
      content,
      title,
      excerpt: excerpt.substring(0, 200) + (excerpt.length > 200 ? '...' : '')
    };
  } catch (error) {
    console.error(`Error leyendo archivo ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Actualiza un post en la base de datos con contenido MDX
 */
async function updatePostWithMdx(slug, mdxData) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug }
    });
    
    if (!post) {
      console.log(`❌ Post con slug "${slug}" no encontrado`);
      return false;
    }
    
    await prisma.post.update({
      where: { slug },
      data: {
        content: mdxData.content,
        title: mdxData.title,
        excerpt: mdxData.excerpt
      }
    });
    
    console.log(`✅ Post "${slug}" actualizado con contenido MDX`);
    return true;
  } catch (error) {
    console.error(`Error actualizando post ${slug}:`, error.message);
    return false;
  }
}

/**
 * Función principal
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Uso: node scripts/mdx-to-db.js <archivo.mdx> [slug]');
    console.log('');
    console.log('Ejemplos:');
    console.log('  node scripts/mdx-to-db.js drafts/mi-amigo-rafa.mdx');
    console.log('  node scripts/mdx-to-db.js drafts/mi-amigo-rafa.mdx mi-amigo-rafa');
    process.exit(1);
  }
  
  const mdxFilePath = args[0];
  const slug = args[1] || path.basename(mdxFilePath, '.mdx');
  
  console.log(`📁 Leyendo archivo: ${mdxFilePath}`);
  console.log(`🏷️  Slug del post: ${slug}`);
  
  // Verificar que el archivo existe
  if (!fs.existsSync(mdxFilePath)) {
    console.error(`❌ Archivo no encontrado: ${mdxFilePath}`);
    process.exit(1);
  }
  
  // Leer contenido MDX
  const mdxData = readMdxFile(mdxFilePath);
  if (!mdxData) {
    console.error('❌ Error leyendo archivo MDX');
    process.exit(1);
  }
  
  console.log(`📝 Título: ${mdxData.title}`);
  console.log(`📄 Extracto: ${mdxData.excerpt}`);
  console.log(`📊 Caracteres: ${mdxData.content.length}`);
  
  // Actualizar base de datos
  const success = await updatePostWithMdx(slug, mdxData);
  
  if (success) {
    console.log('');
    console.log('🎉 ¡Contenido MDX copiado exitosamente!');
    console.log(`🌐 Visita: http://localhost:3000/post/${slug}`);
  } else {
    console.error('❌ Error copiando contenido a la base de datos');
    process.exit(1);
  }
}

// Ejecutar script
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect()); 