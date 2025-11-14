# 🌍 Planeta Viaje

Blog de viajes construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**. El objetivo es ofrecer artículos inspiradores y prácticos para planificar aventuras alrededor del mundo.

---



---
---

## Tecnologías

- **Next.js 14** – Renderizado híbrido (SSR/ISR) usando la nueva carpeta `app`.
- **TypeScript** – Tipado estático.
- **Tailwind CSS** – Estilos utilitarios + variables CSS para colores de marca.
- **Prisma ORM** – Acceso tipado a la base de datos Postgres.
- **ESLint & Prettier** – Calidad de código.

---


---

## Instalación y puesta en marcha

**Clonar repositorio**

   ```bash
   git clone https://github.com/tu-usuario/planeta_viaje.git
   cd planeta_viaje
   ```

**Instalar dependencias**

   ```bash
   npm install 
   ```
 **Levantar entorno de desarrollo**

```bash
npm run dev
```

Open [http://localhost:3000] with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Deploy in NAS or server:

Build image of web project:
	docker compose build web

Save tar file with the created image
	docker save -o planeta_viaje_webserver.tar planeta_viaje_webserver:latest

SCP copy docker-compose.yml and .tar file to server
	scp planeta_viaje_webserver.tar Javi@ip-nas:/volume1/home/Javi/web-projects/planeta_viaje
	scp docker-compose.yml Javi@ip-nas:/volume1/home/Javi/web-projects/planeta_viaje

In the server: Load created docker image:
	docker load -i planeta_viaje_webserver.tar
	
Run docker compose:
	docker compose up -d