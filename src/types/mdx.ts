// src/types/mdx.ts
// Tipos TypeScript para componentes MDX

export interface InteractiveMapProps {
  localizacion: string;
  zoom?: number;
  height?: string;
  width?: string;
}

export interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  gap?: string;
}

export interface CalloutBoxProps {
  // type?: 'info' | 'warning' | 'tip' | 'note' | 'danger';
  type?: string;
  title?: string;
  text: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
  orientation?: string;
}

export interface VideoEmbedProps {
  url: string;
  title?: string;
  width?: string;
  height?: string;
  provider?: 'youtube' | 'vimeo' | 'local';
}

export interface TourCardProps {
  titulo: string;
  descripcion: string;
  precio: string;
  destino: string;
  imagen?: string;
  duracion?: string;
  rating?: number;
}

export interface MDXComponentProps {
  [key: string]: string | number | boolean | React.ReactNode;
}

export interface MDXComponents {
  [key: string]: React.ComponentType<MDXComponentProps>;
} 