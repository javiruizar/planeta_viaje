// src/app/api/comments/route.ts
// Endpoint API RESTful para la gestión de comentarios en Next.js App Router.
// Permite obtener y crear comentarios asociados a un post mediante peticiones GET y POST.
// Incluye validación de email y longitud mínima, y comentarios didácticos detallados.

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Instancia de Prisma para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Maneja peticiones GET para obtener los comentarios de un post.
 * Espera recibir el parámetro postId en la query (?postId=...)
 */
export async function GET(req: NextRequest) {
  // Extraemos el parámetro postId de la URL
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');

  // Validamos que se proporcione un postId
  if (!postId) {
    return NextResponse.json({ error: 'Falta el parámetro postId' }, { status: 400 });
  }

  // Obtenemos los comentarios de la base de datos, ordenados por fecha
  const comments = await prisma.comment.findMany({
    where: { postId },
    orderBy: { createdAt: 'asc' },
    select: {
      id: true,
      postId: true,
      authorName: true, // ← Usamos authorName
      content: true,
      createdAt: true,
    },
  });

  // Devolvemos los comentarios en formato JSON
  return NextResponse.json(comments);
}

/**
 * Maneja peticiones POST para crear un nuevo comentario.
 * Espera recibir un JSON con postId, content y authorName (email).
 * Valida que el comentario tenga al menos 14 caracteres y que el email sea válido.
 */
export async function POST(req: NextRequest) {
  // Intentamos parsear el cuerpo de la petición
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: 'El cuerpo de la petición no es un JSON válido.' }, { status: 400 });
  }
  const {postId, content, authorName } = body;

  // Validación: postId, content y authorName (email) son obligatorios
  if (!postId || typeof content !== 'string' || typeof authorName !== 'string' || !authorName.trim()) {
    return NextResponse.json({ error: 'Faltan datos obligatorios (comentario y email)' }, { status: 400 });
  }

  // Validación: email simple (puedes mejorarla si quieres)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(authorName)) {
    return NextResponse.json({ error: 'Debes introducir un email válido.' }, { status: 400 });
  }

  // Validación: longitud mínima de 14 caracteres y máxima de 140
  if (content.trim().length < 14) {
    return NextResponse.json({ error: 'El comentario debe tener al menos 14 caracteres.' }, { status: 400 });
  }
  if (content.trim().length > 140) {
    return NextResponse.json({ error: 'El comentario debe tener máximo 140 caracteres.' }, { status: 400 });
  }

  // Creamos el comentario en la base de datos. Nos aseguramos de que los campos coincidan con el modelo Prisma
  let comment;
  try {
    comment = await prisma.comment.create({
      data: {
        postId: String(postId), // Prisma espera string
        content,
        authorName,
        authorEmail:String(authorName),
      },
      select: {
        id: true,
        postId: true,
        authorName: true,
        content: true,
        createdAt: true,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Error al crear el comentario en base de datos.' }, { status: 500 });
  }

  // Devolvemos el comentario creado
  return NextResponse.json(comment, { status: 201 });
}
