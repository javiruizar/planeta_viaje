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
   pnpm dev
   ```

   Abre <http://localhost:3000> para ver la aplicación.

---

## Variables de entorno

| Nombre | Descripción |
| ------ | ----------- |
| `DATABASE_URL` | Cadena de conexión Postgres. Ej.: `postgresql://user:pass@localhost:5432/planeta_viaje` |
| `NODE_ENV` | Entorno (`development` \| `production`). |

Añade más variables cuando se integren APIs externas (p.ej. Cloudinary, SendGrid, etc.).

---

## Flujo de desarrollo

1. Crea una rama a partir de `main`.
2. Implementa la funcionalidad con **comentarios detallados** en cada bloque de código (requisito didáctico del proyecto).
3. Abre un Pull Request y solicita _code review_.
4. Una vez aprobado, haz _merge_ a `main`.

---

## Personalización de colores

Los colores de marca se definen como **variables CSS** en `src/app/globals.css` dentro de `:root`:

```css
:root {
  --color-agua-claro:  oklch(95.6% 0.045 203.388);
  --color-agua-oscuro: oklch(82.8% 0.111 230.318);
  --color-arena-claro: oklch(96.2% 0.059 95.617);
  --color-arena-oscuro: oklch(87.9% 0.169 91.605);
}
```

Uso en componentes:

```jsx
<div className="bg-[color:var(--color-agua-claro)] text-[color:var(--color-arena-oscuro)]">
  ¡Hola mundo!
</div>
```

También se han creado utilidades abreviadas (`bg-agua-claro`, `hover:bg-agua-oscuro`, etc.) en el mismo fichero.

---

## Scripts disponibles

| Comando | Acción |
| ------- | ------ |
| `pnpm dev` | Servidor de desarrollo en <http://localhost:3000>. |
| `pnpm build` | Compila la app para producción. |
| `pnpm start` | Inicia el servidor Next.js en modo producción. |
| `pnpm prisma studio` | UI para inspeccionar la base de datos. |
| `pnpm lint` | Ejecuta ESLint. |

---

## Despliegue

Se recomienda **Vercel**. Pasos rápidos:

1. Crear proyecto en Vercel y conectar este repositorio.
2. Configurar `DATABASE_URL` en _Environment Variables_.
3. Vercel detectará automáticamente Next.js y Tailwind.
4. Tras el primer despliegue, ejecutar migraciones:
   - Opción 1: usar **Vercel Postgres**.
   - Opción 2: ejecutar `prisma migrate deploy` en un _Post-Deploy Hook_.

---

## Roadmap

- [ ] CRUD completo de posts (admin).
- [ ] Etiquetas y categorías.
- [ ] Paginación o infinite scroll.
- [ ] Autenticación de usuarios (NextAuth.js).
- [ ] Comentarios y reacciones.
- [ ] Optimización SEO y Open Graph.

---

## Licencia

MIT © 2025 Planeta Viaje

