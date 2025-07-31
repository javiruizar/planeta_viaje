// src/app/category/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CategoryPostCard from "@/components/blog/CategoryPostCard";
import { getPostsByCategory } from "@/lib/posts";
import { getAllCategories, isValidCategorySlug, getCategoryBySlug } from "@/lib/categories";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import Header from "@/components/layout/Header";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

/**
 * Genera las rutas estáticas para todas las categorías disponibles.
 * Esto mejora el rendimiento y SEO de las páginas de categorías.
 */
export async function generateStaticParams() {
  const categories = getAllCategories();
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

/**
 * Genera metadatos dinámicos para cada página de categoría.
 * Esto mejora el SEO de las páginas de categorías.
 */
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params;
  
  // Validar que la categoría existe
  if (!isValidCategorySlug(slug)) {
    return {
      title: 'Categoría no encontrada - Planeta Viaje',
      description: 'La categoría que buscas no existe.',
    };
  }
  
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return {
      title: 'Categoría no encontrada - Planeta Viaje',
      description: 'La categoría que buscas no existe.',
    };
  }
  
  return {
    title: `${category.name} - Planeta Viaje`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Planeta Viaje`,
      description: category.description,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  // Validar que la categoría existe
  if (!isValidCategorySlug(slug)) {
    notFound();
  }
  
  // Obtener la información de la categoría
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    notFound();
  }
  
  // Obtener posts de la categoría específica
  const posts = await getPostsByCategory(slug);
  
  return (
    <>
      <Header backgroundImage="/images/IMG_9881.jpg"/>
      <ParallaxBackground 
        localImage={category.imageUrl || "/images/Nueva-York-City-Hall-Park.jpg"}
        overlay={true}
        overlayColor="rgba(0, 0, 0, 0.4)"
      >
        <div className="mx-auto px-4 bg-gray-500/80">
          <section className="py-16">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">
              {category.name}
            </h1>
            <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
              {category.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <CategoryPostCard key={post.slug} {...post} />
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