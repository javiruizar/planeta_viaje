export const dynamic = "force-dynamic";
export const revalidate = 0;

// src/app/category/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BrightPostCard from "@/components/blog/BrighPostCard";
import { getPostsByCategory } from "@/lib/posts";
import { getAllCategories, isValidCategorySlug, getCategoryBySlug } from "@/lib/categories";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
    name: string;
    backgroundImage?: string;
    mainImage?: string;
    description?: string;
  }>;
}

/**
 * Genera las rutas estáticas para todas las categorías disponibles.
 * Esto mejora el rendimiento y SEO de las páginas de categorías.
 */
export async function generateStaticParams() {

  const categories = await getAllCategories();
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

/**
 * Genera metadatos dinámicos para cada página de categoría.
 * Esto mejora el SEO de las páginas de categorías.
 */
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Validar que la categoría existe
  if (!isValidCategorySlug(slug)) {
    return {
      title: 'Categoría no encontrada - Planeta Viaje',
      description: 'La categoría que buscas no existe.',
    };
  }
  
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    return {
      title: 'Categoría no encontrada - Planeta Viaje',
      description: 'La categoría que buscas no existe.',
    };
  }
  
  return {
    title: `${category.name} - Planeta Viaje`,
    description: category.description,
    keywords: `${category.name}, viajes, turismo, destinos, ${category.name.toLowerCase()}`,
    openGraph: {
      title: `${category.name} - Planeta Viaje`,
      description: category.description || 'Es una de las categorias de Planeta Viaje',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Planeta Viaje',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Planeta Viaje`,
      description: category.description || 'Es una de las categorias de Planeta Viaje',
    },
    alternates: {
      canonical: `https://planetaviaje.com/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  // Validar que la categoría existe
  if (!isValidCategorySlug(slug)) {
    notFound();
  }
  
  // Obtener la información de la categoría
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    notFound();
  }
  
  // Obtener posts de la categoría específica
  const posts = await getPostsByCategory(slug);
  
  return (
    <>
      <Header backgroundImage={category.mainImage || "/images/tailandia.jpg"}/>
      <ParallaxBackground 
        localImage={category.backgroundImage || "/images/Nueva-York-City-Hall-Park.jpg"}
        overlay={true}
        overlayColor="rgba(0, 0, 0, 0.4)"
      >
        <div className="mx-auto bg-gray-500/80">
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-12">
              <Breadcrumbs 
                items={[
                  { label: 'Destinos', href: '/#destinos' },
                  { label: category.name }
                ]} 
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-center text-white">
              {category.name}
            </h1>
            <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
              {category.description}
            </p>
            
            <div className="grid px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
              {posts.length > 0 ? (
                posts.map((post) => (
                  <BrightPostCard key={post.slug} {...post} />
                ))
              ) : (
                <div className="col-span-full text-center text-white py-8">
                  <p className="text-lg mb-4">No hay entradas disponibles en esta categoría por el momento.</p>
                  <p className="text-sm opacity-80">¡Vuelve pronto para descubrir nuevos destinos!</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </ParallaxBackground>
    </>
  );
} 