// src/lib/mdx-data.ts
// Datos dinámicos para componentes MDX

export const mdxData = {
  // Datos de ejemplo para ImageGallery
  imageGalleries: {
    'islandia': [
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Cascada Gullfoss", caption: "La impresionante cascada Gullfoss" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Geysir", caption: "El famoso géiser Strokkur" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Þingvellir", caption: "Parque Nacional Þingvellir" }
    ],
    'tailandia': [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Templo de Bangkok", caption: "El Gran Palacio de Bangkok" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Playa de Phuket", caption: "Hermosas playas de arena blanca" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Chiang Mai", caption: "Templos antiguos de Chiang Mai" }
    ],
    'japon': [
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Monte Fuji", caption: "El icónico Monte Fuji" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Templo de Kyoto", caption: "Templos tradicionales de Kyoto" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Tokio", caption: "La moderna ciudad de Tokio" }
    ]
  },

  // Datos de ejemplo para Timeline
  timelines: {
    'islandia': [
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
      }
    ],
    'tailandia': [
      {
        date: "Día 1",
        title: "Llegada a Bangkok",
        description: "Exploramos el Gran Palacio y el Templo del Buda de Esmeralda",
        location: "Bangkok, Tailandia"
      },
      {
        date: "Día 2-3",
        title: "Chiang Mai",
        description: "Visitamos templos antiguos y el mercado nocturno",
        location: "Chiang Mai, Tailandia"
      },
      {
        date: "Día 4-5",
        title: "Phuket",
        description: "Disfrutamos de las hermosas playas y la vida nocturna",
        location: "Phuket, Tailandia"
      }
    ],
    'japon': [
      {
        date: "Día 1",
        title: "Llegada a Tokio",
        description: "Exploramos el barrio de Shibuya y el cruce más famoso del mundo",
        location: "Tokio, Japón"
      },
      {
        date: "Día 2-3",
        title: "Kyoto",
        description: "Visitamos templos milenarios y jardines zen",
        location: "Kyoto, Japón"
      },
      {
        date: "Día 4-5",
        title: "Monte Fuji",
        description: "Admiramos el Monte Fuji desde el lago Kawaguchi",
        location: "Monte Fuji, Japón"
      }
    ]
  }
};

/**
 * Obtiene datos para ImageGallery basándose en el tema
 */
export function getImageGalleryData(theme?: string) {
  return mdxData.imageGalleries[theme as keyof typeof mdxData.imageGalleries] || mdxData.imageGalleries.islandia;
}

/**
 * Obtiene datos para Timeline basándose en el tema
 */
export function getTimelineData(theme?: string) {
  return mdxData.timelines[theme as keyof typeof mdxData.timelines] || mdxData.timelines.islandia;
}

/**
 * Obtiene datos para un componente basándose en el tema o tipo
 */
export function getComponentData(componentName: string, theme?: string) {
  switch (componentName) {
    case 'ImageGallery':
      return getImageGalleryData(theme);
    case 'Timeline':
      return getTimelineData(theme);
    default:
      return null;
  }
} 