// src/components/mdx/index.ts
// Exportación de todos los componentes MDX

export { default as InteractiveMap } from './InteractiveMap';
export { default as CalloutBox } from './CalloutBox';
export { default as ImageGallery } from './ImageGallery';
export { default as Timeline } from './Timeline';
export { default as VideoEmbed } from './VideoEmbed';
export { default as MdxPreview } from './MdxPreview';
export { default as TourCard } from './TourCard';

// Re-exportar tipos
export type {
  InteractiveMapProps,
  CalloutBoxProps,
  ImageGalleryProps,
  TimelineProps,
  VideoEmbedProps,
  TimelineEvent,
  TourCardProps
} from '@/types/mdx'; 