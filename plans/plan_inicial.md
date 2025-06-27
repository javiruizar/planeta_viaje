# Mode: PLAN

¡Hola! Entendido. Crearé un plan detallado para tu blog de viajes "Planeta Viaje". Seguiré tus especificaciones de stack tecnológico y diseño, y te haré preguntas cuando necesite aclaraciones.

Aquí está el plan inicial:

---

### **Plan de Implementación: Blog "Planeta Viaje"**

#### **Fase 1: Configuración del Proyecto y Base de Datos**

1.  **Inicializar el proyecto Next.js:** *(Completado)*
    *   Usar `create-next-app` para generar la estructura base del proyecto.
    *   Configurar TypeScript para un desarrollo más robusto y mantenible.

2.  **Configurar la Base de Datos con Docker (NUEVO):**
    *   **Crear `docker-compose.yml`:** Añadir un fichero `docker-compose.yml` a la raíz del proyecto para definir el servicio de la base de datos PostgreSQL. Docker se encargará de descargar la imagen necesaria si no existe localmente.
    *   **Actualizar `.gitignore`:** Añadir el directorio de datos de la base de datos (ej. `/postgres-data`) al fichero `.gitignore` para no subir los datos al control de versiones.
    *   **Actualizar `.env`:** Modificar el fichero `.env` con la cadena de conexión (`DATABASE_URL`) que apunte a la base de datos que correrá en Docker.
    *   **Documentar Ejecución:** Se indicará que para levantar la base de datos se deberá usar el comando `docker-compose up -d`.

3.  **Configurar Prisma y la conexión a la base de datos:**
    *   Instalar y configurar Prisma ORM. *(Completado)*
    *   Definir el esquema de la base de datos. *(Completado)*
    *   Crear los ficheros de migración para generar el esquema en la base de datos de Docker.

#### **Fase 2: Desarrollo de Componentes Reutilizables (UI)**

1.  **Crear componentes de Layout:**
    *   `Header`: Incluirá los enlaces a secciones destacadas ("top España", etc.) y los iconos de redes sociales.
    *   `Logo`: Componente para mostrar `planeta_viaje_logo.jpg` que redirige a la Home.
    *   `MainMenu`: El menú de navegación principal con desplegables para los continentes.
    *   `Footer`: El pie de página con los enlaces y textos que especificaste.
    *   `Layout`: Un componente principal que envolverá todas las páginas para asegurar que el `Header`, `Logo`, `MainMenu` y `Footer` sean consistentes en todo el sitio.

2.  **Crear componentes de contenido:**
    *   `PostCard`: Tarjeta para mostrar un resumen de un post (título e imagen) en listados como "artículos relacionados" o la página principal.
    *   `AdBox`: Componente para los bloques de publicidad.
    *   `CommentForm`: El formulario para añadir nuevos comentarios.
    *   `CommentList` y `Comment`: Componentes para mostrar la lista de comentarios y cada comentario individual con su sistema de respuestas.

3.  **Estilos globales y paleta de colores:**
    *   Configurar `Tailwind CSS` para los estilos.
    *   Definir una paleta de colores primarios (amarillo arena, azul agua) y secundarios que combinen bien, y la aplicaremos a través de variables de CSS para mantener la consistencia.

#### **Fase 3: Desarrollo de las Páginas**

1.  **Página Principal (Home):**
    *   Implementar el diseño que has descrito: componentes generales, imagen de fondo a pantalla completa, caja para anuncio y sección con 3 `PostCard`.
    *   Crear el punto final en el backend para obtener los posts a destacar.

2.  **Página de Post (Single Post):**
    *   Crear una página dinámica `[slug].js` que renderice un post individual.
    *   Implementar la estructura de 6 columnas: márgenes, cuerpo del post, publicidad lateral.
    *   El cuerpo del post mostrará el título y el contenido en cajas separadas.
    *   Añadir las secciones de "artículos relacionados", el formulario de comentarios y la lista de comentarios.
    *   Crear los puntos finales necesarios para:
        *   Obtener los datos de un post por su `slug`.
        *   Obtener los artículos relacionados.
        *   Obtener los comentarios de un post.
        *   Publicar un nuevo comentario.

3.  **Páginas de Categoría/Listado:**
    *   Crear páginas dinámicas para las categorías (ej. `/europa/francia`) que listen los posts correspondientes.

#### **Fase 4: Backend y API**

1.  **Desarrollar API Routes en Next.js:**
    *   Crear los puntos finales necesarios para todas las operaciones CRUD (Crear, Leer, Actualizar, Borrar) de los posts, comentarios, etc.
    *   Añadir comentarios detallados en cada punto final para explicar su funcionamiento.

#### **Fase 5: Documentación y Pasos Finales**

1.  **Crear un `README.md` detallado:**
    *   Explicará cómo configurar el entorno de desarrollo, ejecutar el proyecto y la estructura general del código.
    *   Incluirá instrucciones sobre dónde colocar la imagen del logo (`planeta_viaje_logo.jpg`).

---
