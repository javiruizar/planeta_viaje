--pg_dump: warning: there are circular foreign-key constraints on this table:
--pg_dump: detail: Category
--pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
--pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
--pg_dump: warning: there are circular foreign-key constraints on this table:
----pg_dump: detail: Comment
--pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
--pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.13
-- Dumped by pg_dump version 15.13

--SET statement_timeout = 0;
--SET lock_timeout = 0;
--SET idle_in_transaction_session_timeout = 0;
--SET client_encoding = 'UTF8';
--SET standard_conforming_strings = on;
--SELECT pg_catalog.set_config('search_path', '', false);
--SET check_function_bodies = false;
--SET xmloption = content;
--SET client_min_messages = warning;
--SET row_security = off;

--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Category" VALUES ('1', 'europa', 'Europa', NULL, NULL, NULL);
INSERT INTO public."Category" VALUES ('2', 'asia', '', NULL, NULL, NULL);


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Post" VALUES ('55', 'mi-amigo-raphael', 'Este es el titulo Mi amigo Rafa es un tipo estupendo', '# Este es el titulo Mi amigo Rafa es un tipo estupendo
## subtitulo en una misma linea
Islandia es un país lleno de paisajes increíbles. A continuación te muestro los lugares clave:

<InteractiveMap localizacion="islandia" zoom={8} />

<CalloutBox type="danger" title="Consejo de Viajero" 
text="La mejor época para visitar Islandia es entre junio y agosto, cuando las temperaturas son más suaves y los días son más largos"
/>

## Lugares imprescindibles

### 1. Círculo Dorado
El Círculo Dorado es una ruta turística que incluye tres de los lugares más populares de Islandia:

- **Gullfoss**: Una impresionante cascada de dos niveles
- **Geysir**: El géiser que dio nombre a todos los géiseres del mundo
- **Þingvellir**: El parque nacional donde se reunía el parlamento vikingo

<ImageGallery 
  images=[
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Cascada PARSEADA Gullfoss", caption: "La PARSEADA  impresionante cascada Gullfoss" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Geysir", caption: "El famoso géiser Strokkur" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Þingvellir", caption: "Parque Nacional Þingvellir" }
  ]
  columns={3}
/>

### 2. Playa de arena negra en Vík
La playa de Reynisfjara es famosa por su arena negra y las columnas de basalto.

<CalloutBox type="warning" title="¡Atención!" 
text="este es el texto"
/>

 <CalloutBox type="tip" title="Consejo de Viajero" 
text="La mejor época para visitar Islandia es en y los días son más largos"
/>

### 3. Cascada Skógafoss
Una de las cascadas más impresionantes de Islandia, con 60 metros de altura.

<VideoEmbed 
  url="https://www.youtube.com/watch?v=yn3kSl8WfvU"
  title="Cascada aaaaaaaa"
  provider="youtube"
/>

## Cronología del viaje

<Timeline 
  events=[
    {
      date: "Día 1 EN VARIAS LINEAS",
      title: "Llegada PARSEADO a Reikiavik",
      description: "Aterrizamos en el aeropuerto Keflavík y nos dirigimos a la capital",
      location: "Reikiavik, Islandia"
    },
    {
      date: "Día 2-3",
      title: "Círculo Dorado",
      description: "Exploramos Gullfoss, Geysir y Þingvellir",
      location: "Círculo Dorado, Islandia"
    },
    {
      date: "Día 4-5",
      title: "Costa Sur",
      description: "Visitamos Vík, Skógafoss y la playa de arena negra",
      location: "Costa Sur, Islandia"
    },
    {
      date: "Día 6-7",
      title: "Regreso a Reikiavik",
      description: "Exploramos la capital y sus alrededores",
      location: "Reikiavik, Islandia"
    }
  ]
  orientation="horizontal"
/>

## Reserva tu tour

<TourCard   titulo="Tour por el sur de Islandia EN LA MISMA"
  descripcion="Explora glaciares, cascadas y playas negras en este tour de 2 días."
  precio="299€"
  destino="/tours/islandia-sur"
  duracion="2 días"
  rating={4.8}
/>

<TourCard
  titulo="Aurora Boreal en Islandia EN VARIAS LINEAS"
  descripcion="Caza las auroras boreales en los mejores lugares del país."
  precio="199€"
  destino="/tours/aurora-boreal"
  duracion="1 noche"
  rating={4.9}
/>

---

**¡Islandia te espera con paisajes de otro mundo!** 🌋❄️

## Lugares imprescindibles

### 1. Círculo Dorado', '2025-06-30 18:26:06.375', '2025-07-30 11:58:27.174', '1', '', 'https://planeta-viaje.s3.eu-west-1.amazonaws.com/rafa.JPG');
INSERT INTO public."Post" VALUES ('1', 'post-de-prueba', 'titulo de prueba', 'contenido de prueba', '2025-06-30 00:06:35.509', '2025-07-30 12:01:50.909', '1', 'excerpt de prueba', 'https://planeta-viaje.s3.eu-west-1.amazonaws.com/ilia.JPG');
INSERT INTO public."Post" VALUES ('cmcf6nwun0000rtuffrkpt5s1', 'aventura-montanas-kioto', 'Aventura en las Montañas de Kioto', 'El viaje a través de las montañas de Kioto fue una experiencia inolvidable... (contenido completo del post iría aquí)', '2025-06-27 19:06:24.143', '2025-07-30 12:01:50.909', '1', 'Descubre los templos ocultos y los senderos serenos en las afueras de la antigua capital de Japón.', 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2094&auto=format&fit=crop');
INSERT INTO public."Post" VALUES ('cmcf6nwv10001rtuftygbxqpm', 'sabores-de-la-toscana', 'Los Sabores de la Toscana', 'La Toscana no es solo un lugar, es un festín para los sentidos... (contenido completo del post iría aquí)', '2025-06-27 19:06:24.157', '2025-07-30 12:01:50.909', '1', 'Un viaje gastronómico por el corazón de Italia, probando vinos, pastas y aceites de oliva locales.', 'https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=687&auto=format&fit=crop');
INSERT INTO public."Post" VALUES ('cmcf6nwv40002rtufabxwqtu6', 'explorando-fiordos-noruegos', 'Explorando los Fiordos Noruegos', 'Los fiordos de Noruega son una maravilla de la naturaleza que te deja sin aliento... (contenido completo del post iría aquí)', '2025-06-27 19:06:24.161', '2025-07-30 12:01:50.909', '1', 'Navega por aguas cristalinas entre majestuosas montañas y cascadas impresionantes en Noruega.', 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1974&auto=format&fit=crop');
INSERT INTO public."Post" VALUES ('cmdb1hlf00001vt5mnedhgisv', 'test-mdx-islandia', 'Test MDX - Islandia', '# Qué ver en Islandia en 7 días

Islandia es un país lleno de paisajes increíbles. A continuación te muestro los lugares clave:

<MapaInteractivo localizacion="islandia" zoom={8} />

<CalloutBox type="tip" title="Consejo de Viajero">
  La mejor época para visitar Islandia es entre junio y agosto, cuando las temperaturas son más suaves y los días son más largos.
</CalloutBox>

## Lugares imprescindibles

### 1. Círculo Dorado
El Círculo Dorado es una ruta turística que incluye tres de los lugares más populares de Islandia:

- **Gullfoss**: Una impresionante cascada de dos niveles
- **Geysir**: El géiser que dio nombre a todos los géiseres del mundo
- **Þingvellir**: El parque nacional donde se reunía el parlamento vikingo

<ImageGallery 
  images={[
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Cascada Gullfoss", caption: "La impresionante cascada Gullfoss" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Geysir", caption: "El famoso géiser Strokkur" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Þingvellir", caption: "Parque Nacional Þingvellir" }
  ]}
  columns={3}
/>

### 2. Playa de arena negra en Vík
La playa de Reynisfjara es famosa por su arena negra y las columnas de basalto.

<CalloutBox type="warning" title="¡Atención!">
  Ten mucho cuidado con las olas en Reynisfjara. Son muy peligrosas y han causado accidentes mortales.
</CalloutBox>

### 3. Cascada Skógafoss
Una de las cascadas más impresionantes de Islandia, con 60 metros de altura.

<VideoEmbed 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Cascada Skógafoss"
  provider="youtube"
/>

## Cronología del viaje

<Timeline 
  events={[
    {
      date: "Día 1",
      title: "Llegada a Reikiavik",
      description: "Aterrizamos en el aeropuerto Keflavík y nos dirigimos a la capital",
      location: "Reikiavik, Islandia"
    },
    {
      date: "Día 2-3",
      title: "Círculo Dorado",
      description: "Exploramos Gullfoss, Geysir y Þingvellir",
      location: "Círculo Dorado, Islandia"
    },
    {
      date: "Día 4-5",
      title: "Costa Sur",
      description: "Visitamos Vík, Skógafoss y la playa de arena negra",
      location: "Costa Sur, Islandia"
    },
    {
      date: "Día 6-7",
      title: "Regreso a Reikiavik",
      description: "Exploramos la capital y sus alrededores",
      location: "Reikiavik, Islandia"
    }
  ]}
/>

## Reserva tu tour

<TourCard
  titulo="Tour por el sur de Islandia"
  descripcion="Explora glaciares, cascadas y playas negras en este tour de 2 días."
  precio="299€"
  destino="/tours/islandia-sur"
  duracion="2 días"
  rating={4.8}
/>

<TourCard
  titulo="Aurora Boreal en Islandia"
  descripcion="Caza las auroras boreales en los mejores lugares del país."
  precio="199€"
  destino="/tours/aurora-boreal"
  duracion="1 noche"
  rating={4.9}
/>

---

**¡Islandia te espera con paisajes de otro mundo!** 🌋❄️
', '2025-07-20 02:10:08.941', '2025-07-30 12:01:50.909', '1', 'Test de renderizado MDX', '/images/salamanca.jpg');


--
-- Data for Name: Comment; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Comment" VALUES ('cmckr9zt90001vt3gxb5p7b7e', 'Yo conozco a tu amigo Rafa y no es tan buena gente como dices', 'mimail@gmail.com', 'mimail@gmail.com', '2025-07-01 16:42:17.613', '55', NULL);
INSERT INTO public."Comment" VALUES ('cmcl6quqh0001vtfwu9sqxopm', 'podria comentar ahora mismo?', 'javi@gmail.com', 'javi@gmail.com', '2025-07-01 23:55:18.424', '55', NULL);
INSERT INTO public."Comment" VALUES ('cmdce44d30001vt3xsifc5iil', 'aaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaa@aaaaa.c', 'aaaaaaaaaaaaaaaaaaaaa@aaaaa.c', '2025-07-21 00:51:21.496', 'cmdb1hlf00001vt5mnedhgisv', NULL);


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('d3d8d7ba-3739-4a38-9faa-aa4f31cbcc54', 'e4b17d3ba97f46d4f1bcb331d8709c069e7fd3a2f717bc5b93d380d854493973', '2025-06-27 02:44:42.428465+00', '20250627024442_initial_setup', NULL, NULL, '2025-06-27 02:44:42.333473+00', 1);
INSERT INTO public._prisma_migrations VALUES ('1635d91e-a478-4198-9af8-cb0cc6a319c5', '4e5979450719e0f64998af598adbc5dcad40dbdd3783c0170e28272c409ad3a3', '2025-06-27 18:55:08.378206+00', '20250627185508_initial_schema', NULL, NULL, '2025-06-27 18:55:08.325578+00', 1);
INSERT INTO public._prisma_migrations VALUES ('8dbe2f9e-b42b-477f-9f6b-3594c01fbb04', 'ee627577d1db84f349c8cd7b6ef781777924dbda522ccdea38647c691131ab8a', '2025-08-06 00:46:04.663357+00', '20250806004604_add_category_images', NULL, NULL, '2025-08-06 00:46:04.655497+00', 1);


--
-- PostgreSQL database dump complete
--
