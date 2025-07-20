# 📚 Componentes MDX - Planeta Viaje

Esta documentación describe todos los componentes MDX personalizados disponibles para crear contenido rico en el blog de viajes.

## 🗺️ MapaInteractivo

Muestra mapas interactivos de destinos turísticos.

### Uso básico:
```mdx
<MapaInteractivo localizacion="tailandia" />
```

### Props disponibles:
- `localizacion` (string, requerido): Nombre del destino
- `zoom` (number, opcional): Nivel de zoom (default: 10)
- `height` (string, opcional): Altura del mapa (default: "400px")
- `width` (string, opcional): Ancho del mapa (default: "100%")

### Destinos disponibles:
- `tailandia`, `bangkok`, `phuket`, `chiang-mai`
- `españa`, `madrid`, `barcelona`, `valencia`
- `japon`, `tokio`, `kyoto`, `osaka`

### Ejemplo:
```mdx
# Mi Viaje a Tailandia

<MapaInteractivo localizacion="bangkok" zoom={12} height="500px" />

Explora la capital tailandesa con este mapa interactivo.
```

---

## 📋 CalloutBox

Destaca información importante con diferentes tipos de alertas.

### Uso básico:
```mdx
<CalloutBox type="warning">
  ¡Cuidado con las estafas en las zonas turísticas!
</CalloutBox>
```

### Props disponibles:
- `type` (string, opcional): Tipo de alerta
  - `info` (default): Información general
  - `warning`: Advertencias importantes
  - `tip`: Consejos útiles
  - `note`: Notas adicionales
- `title` (string, opcional): Título del callout
- `children`: Contenido del callout

### Ejemplos:
```mdx
<CalloutBox type="tip" title="Consejo de Viajero">
  Lleva siempre agua contigo y usa protector solar.
</CalloutBox>

<CalloutBox type="warning" title="¡Importante!">
  Los tuk-tuks pueden cobrar precios inflados a turistas.
</CalloutBox>

<CalloutBox type="info">
  El mejor momento para visitar es entre noviembre y febrero.
</CalloutBox>
```

---

## 📸 ImageGallery

Muestra galerías de imágenes con lightbox.

### Uso básico:
```mdx
<ImageGallery 
  images={[
    { src: "/images/tailandia1.jpg", alt: "Templo de Bangkok" },
    { src: "/images/tailandia2.jpg", alt: "Playa de Phuket", caption: "Hermosa playa" }
  ]} 
/>
```

### Props disponibles:
- `images` (array, requerido): Array de objetos de imagen
  - `src` (string): URL de la imagen
  - `alt` (string): Texto alternativo
  - `caption` (string, opcional): Pie de foto
- `columns` (number, opcional): Número de columnas (default: 3)
- `gap` (string, opcional): Espacio entre imágenes (default: "1rem")

### Ejemplo:
```mdx
<ImageGallery 
  images={[
    { src: "/images/templo.jpg", alt: "Templo Wat Phra Kaew", caption: "El templo más sagrado" },
    { src: "/images/mercado.jpg", alt: "Mercado flotante", caption: "Mercado Damnoen Saduak" },
    { src: "/images/comida.jpg", alt: "Pad Thai", caption: "Plato típico tailandés" }
  ]}
  columns={2}
/>
```

---

## 📅 Timeline

Muestra cronologías de viajes con eventos y fechas.

### Uso básico:
```mdx
<Timeline 
  events={[
    {
      date: "2024-01-15",
      title: "Llegada a Bangkok",
      description: "Aterrizamos en el aeropuerto Suvarnabhumi",
      location: "Bangkok, Tailandia"
    }
  ]} 
/>
```

### Props disponibles:
- `events` (array, requerido): Array de eventos
  - `date` (string): Fecha del evento
  - `title` (string): Título del evento
  - `description` (string): Descripción del evento
  - `location` (string, opcional): Ubicación
  - `image` (string, opcional): URL de imagen del evento
- `orientation` (string, opcional): `vertical` (default) o `horizontal`

### Ejemplo:
```mdx
<Timeline 
  events={[
    {
      date: "2024-01-15",
      title: "Llegada a Bangkok",
      description: "Aterrizamos en el aeropuerto Suvarnabhumi",
      location: "Bangkok, Tailandia",
      image: "/images/bangkok-airport.jpg"
    },
    {
      date: "2024-01-16",
      title: "Visita al Gran Palacio",
      description: "Exploramos el complejo del Gran Palacio y Wat Phra Kaew",
      location: "Bangkok, Tailandia",
      image: "/images/grand-palace.jpg"
    }
  ]}
/>
```

---

## 🎥 VideoEmbed

Embebe videos de YouTube, Vimeo y otras plataformas.

### Uso básico:
```mdx
<VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
```

### Props disponibles:
- `url` (string, requerido): URL del video
- `title` (string, opcional): Título del video
- `width` (string, opcional): Ancho del video (default: "100%")
- `height` (string, opcional): Altura del video (default: "400px")
- `provider` (string, opcional): `youtube`, `vimeo`, o `local`

### Ejemplos:
```mdx
<VideoEmbed 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Guía de Bangkok"
  provider="youtube"
/>

<VideoEmbed 
  url="https://vimeo.com/123456789"
  title="Documental sobre Tailandia"
  provider="vimeo"
/>
```

---

## 📝 Markdown Estándar

Además de los componentes personalizados, puedes usar toda la sintaxis de Markdown:

### Títulos:
```mdx
# Título principal
## Subtítulo
### Sub-subtítulo
```

### Texto:
```mdx
**Texto en negrita**
*Texto en cursiva*
`código inline`

> Cita o bloque de texto destacado
```

### Listas:
```mdx
- Elemento 1
- Elemento 2
  - Sub-elemento
  - Otro sub-elemento

1. Elemento numerado
2. Otro elemento
```

### Enlaces e imágenes:
```mdx
[Texto del enlace](https://ejemplo.com)

![Alt text](https://ejemplo.com/imagen.jpg)
```

### Código:
```mdx
```javascript
console.log("Hola mundo");
```
```

---

## 🔧 Flujo de Trabajo

### 1. Crear archivo MDX:
```bash
# Crear archivo en drafts/
touch drafts/mi-viaje-tailandia.mdx
```

### 2. Escribir contenido:
```mdx
# Mi Viaje a Tailandia

<MapaInteractivo localizacion="bangkok" />

<CalloutBox type="tip">
  Lleva siempre agua y protector solar.
</CalloutBox>

## Día 1: Bangkok

<ImageGallery 
  images={[
    { src: "/images/templo.jpg", alt: "Templo", caption: "Wat Phra Kaew" }
  ]} 
/>

<Timeline 
  events={[
    {
      date: "2024-01-15",
      title: "Llegada",
      description: "Aterrizamos en Bangkok"
    }
  ]} 
/>
```

### 3. Previsualizar:
```bash
# Visitar en el navegador
http://localhost:3000/draft/mi-viaje-tailandia
```

### 4. Copiar a base de datos:
```bash
# Usar el script
node scripts/mdx-to-db.js drafts/mi-viaje-tailandia.mdx mi-viaje-tailandia
```

### 5. Publicar:
```bash
# Visitar el post publicado
http://localhost:3000/post/mi-viaje-tailandia
```

---

## 🚀 Consejos

1. **Usa componentes apropiados**: Cada componente tiene un propósito específico
2. **Mantén consistencia**: Usa los mismos estilos y patrones
3. **Optimiza imágenes**: Comprime las imágenes antes de subirlas
4. **Prueba en preview**: Siempre revisa el resultado antes de publicar
5. **Documenta**: Añade descripciones y contextos a tus imágenes

---

## 🐛 Solución de Problemas

### Error: "Componente no encontrado"
- Verifica que el nombre del componente esté bien escrito
- Asegúrate de que el componente esté exportado en `src/components/mdx/index.ts`

### Error: "Props inválidas"
- Revisa la documentación de props del componente
- Verifica que los tipos de datos sean correctos

### Error: "Imagen no carga"
- Verifica que la URL de la imagen sea correcta
- Asegúrate de que la imagen esté en la carpeta `public/`

---

**¡Disfruta creando contenido rico con MDX! 🎉** 