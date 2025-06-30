# Plan de Refinamiento: Blog Planeta Viaje

Este plan detalla los pasos para mejorar la experiencia visual, la estructura y la funcionalidad de la web, siguiendo tus indicaciones y el espíritu didáctico del proyecto.

---

## 1. Colores y Estética "Verano/Vacaciones"
- **Objetivo:** Dar a la web un aire veraniego y vacacional usando una paleta de azul agua y amarillo arena de playa.
- **Acciones:**
  1. Definir los colores exactos (ejemplo: azul agua `#22d3ee`, amarillo arena `#ffe066`).
  2. Personalizar el tema de Tailwind en `tailwind.config.js` para incluir estos colores como primarios.
  3. Reemplazar en todos los componentes y clases Tailwind los colores azules oscuros actuales por los nuevos.
  4. Aplicar el amarillo como acento en botones, enlaces, fondos y detalles decorativos.
  5. Revisar contraste y accesibilidad.
- **Resultado esperado:** Interfaz fresca, luminosa y coherente con la temática de viajes y verano.

---

## 2. Estructura de Post con Anuncio Lateral
- **Objetivo:** Añadir una columna lateral derecha para anuncios, respetando la anchura estipulada en el plan inicial (aprox. 2/6 del ancho total en desktop).
- **Acciones:**
  1. Modificar el layout de la página de post (`src/app/post/[slug]/page.tsx`) usando una grid de 6 columnas:
      - 1 columna margen izquierdo (opcional)
      - 3 columnas para el cuerpo del post
      - 2 columnas para el anuncio lateral
  2. Crear un componente `AdBox` con el placeholder para anuncios.
  3. Añadir comentarios didácticos explicando la estructura y el uso de la grid.
  4. Asegurar que en móvil el anuncio se muestre debajo del post o se oculte.
- **Resultado esperado:** Post con contenido principal y espacio lateral para publicidad, visualmente equilibrado.

---

## 3. Sistema de Comentarios Completo
- **Objetivo:** Permitir ver, añadir, editar y borrar comentarios desde la UI y la base de datos.
- **Acciones:**
  1. Crear componentes para:
      - Lista de comentarios (`CommentsList`)
      - Formulario para añadir comentario (`CommentForm`)
      - Botones de editar/borrar (solo si el usuario es el autor)
  2. Crear endpoints API en Next.js para:
      - Obtener comentarios de un post (`GET /api/comments?postId=...`)
      - Crear un comentario (`POST /api/comments`)
      - Editar un comentario (`PUT /api/comments/:id`)
      - Borrar un comentario (`DELETE /api/comments/:id`)
  3. Conectar los componentes del frontend a estos endpoints usando fetch/axios.
  4. Añadir validaciones y mensajes de error/éxito.
  5. Documentar todo el flujo, con ejemplos de uso y comentarios explicativos.
- **Resultado esperado:** Sistema CRUD de comentarios funcional, seguro y bien documentado.

---

## 4. Mejoras UX/UI y Detalles
- **Objetivo:** Pulir la experiencia y la coherencia visual.
- **Acciones:**
  1. Añadir mensajes vacíos amigables en comentarios y posts.
  2. Revisar la paginación o carga progresiva si hay muchos comentarios.
  3. Asegurar la responsividad de todos los nuevos elementos.
  4. Actualizar la documentación técnica y didáctica.

---

## 5. Validación y Refinamiento Iterativo
- **Objetivo:** Validar cada cambio con el usuario antes de implementarlo en producción.
- **Acciones:**
  1. Revisar cada sección tras su desarrollo.
  2. Ajustar colores, estructura o lógica según feedback.
  3. Mantener el foco en la claridad y la didáctica del código.

---

> **Este plan es un punto de partida. Se irá refinando según tus comentarios y prioridades antes de ejecutar cada fase.**
