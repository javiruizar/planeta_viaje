# 🌍 Planeta Viaje

Blog de viajes construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**. El objetivo es ofrecer artículos inspiradores y prácticos para planificar aventuras alrededor del mundo.

---

## Índice

1. [Estado del proyecto](#estado-del-proyecto)
2. [Tecnologías](#tecnologías)
3. [Estructura de carpetas](#estructura-de-carpetas)
4. [Instalación y puesta en marcha](#instalación-y-puesta-en-marcha)
5. [Variables de entorno](#variables-de-entorno)
6. [Flujo de desarrollo](#flujo-de-desarrollo)
7. [Personalización de colores](#personalización-de-colores)
8. [Scripts disponibles](#scripts-disponibles)
9. [Despliegue](#despliegue)
10. [Roadmap](#roadmap)
11. [Licencia](#licencia)

---

## Estado del proyecto

| Funcionalidad | Estado |
| ------------- | ------ |
| Configuración de Next.js (App Router) | ✅ |
| Tailwind CSS con variables personalizadas | ✅ |
| Prisma + PostgreSQL | ✅ (básico) |
| Listado de posts | ✅ (muestra 3 últimas entradas) |
| CRUD completo de posts | ⏳ |
| Paginación / Carga diferida | ⏳ |
| Sistema de usuarios y comentarios | ⏳ |

> _Última actualización_: 02-07-2025 17:06 CET

---

## Tecnologías

- **Next.js 14** – Renderizado híbrido (SSR/ISR) usando la nueva carpeta `app`.
- **TypeScript** – Tipado estático.
- **Tailwind CSS** – Estilos utilitarios + variables CSS para colores de marca.
- **Prisma ORM** – Acceso tipado a la base de datos Postgres.
- **ESLint & Prettier** – Calidad de código.

---

## Estructura de carpetas

```
planeta_viaje/
├─ src/
│  ├─ app/             # Routing y páginas (App Router)
│  │  ├─ layout.tsx    # Estructura común (header, footer, etc.)
│  │  └─ page.tsx      # Página de inicio
│  ├─ components/
│  │  ├─ blog/         # PostCard, etc.
│  │  └─ layout/       # Header, Footer, MainMenu, Logo
│  ├─ lib/             # Helpers (prisma, posts.ts)
│  └─ styles/          # Si fuera necesario CSS adicional
├─ prisma/
│  └─ schema.prisma    # Definición de modelo de datos
├─ public/             # Imágenes estáticas
├─ .env.example        # Plantilla de variables de entorno
└─ README.md
```

---

## Instalación y puesta en marcha

1. **Clonar repositorio**

   ```bash
   git clone https://github.com/tu-usuario/planeta_viaje.git
   cd planeta_viaje
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install # o npm / yarn
   ```

3. **Configurar variables de entorno**

   Copia `.env.example` a `.env` y rellena `DATABASE_URL` con la cadena de conexión de tu base de datos Postgres.

4. **Migrar base de datos y poblar datos de ejemplo**

   ```bash
   pnpm prisma migrate dev --name init
   pnpm prisma db seed # opcional
   ```

5. **Levantar entorno de desarrollo**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
