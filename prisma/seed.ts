// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { mockPosts } from '../src/lib/data'; // Ajustamos la ruta para que sea relativa a este fichero

// Creamos una instancia del cliente de Prisma
const prisma = new PrismaClient();

/**
 * @description
 * Función principal para ejecutar el "seeding" (sembrado) de la base de datos.
 * Este script inserta los datos de ejemplo (`mockPosts`) en la tabla `Post`.
 */
async function main() {
  console.log(`Iniciando el sembrado de la base de datos...`);

  // Iteramos sobre cada post de ejemplo
  for (const post of mockPosts) {
    // Usamos `upsert` para evitar crear duplicados si el script se ejecuta varias veces.
    // `upsert` intentará actualizar un registro si lo encuentra, o lo creará si no existe.
    // Creamos un objeto de datos explícito para asegurar que coincide con el modelo de Prisma.
    const postData = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content || '', // Aseguramos que content siempre sea un string
      imageUrl: post.imageUrl,
    };

    const newPost = await prisma.post.upsert({
      where: { slug: post.slug },
      update: postData,
      create: postData,
    });
    console.log(`Creado o actualizado el post: ${newPost.title}`);
  }

  console.log(`Sembrado de la base de datos completado.`);
}

// Ejecutamos la función principal y manejamos los posibles errores.
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Nos aseguramos de desconectar el cliente de Prisma al finalizar.
    await prisma.$disconnect();
  });
