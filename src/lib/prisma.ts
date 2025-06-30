/**
 * prisma.ts
 *
 * Este archivo exporta una instancia singleton de Prisma Client.
 * Usar un singleton es importante en entornos como Next.js (especialmente en desarrollo),
 * ya que el hot-reloading puede causar que se creen múltiples instancias de Prisma Client,
 * lo que puede saturar las conexiones a la base de datos y provocar errores.
 *
 * Ejemplo de uso:
 * import { prisma } from './prisma';
 * const posts = await prisma.post.findMany();
 */
import { PrismaClient } from '@prisma/client';

// Declaración global para evitar múltiples instancias en desarrollo con hot-reload.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Exportamos una única instancia de PrismaClient.
export const prisma: PrismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
