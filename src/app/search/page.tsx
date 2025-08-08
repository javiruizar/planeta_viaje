import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BrightPostCard from "@/components/blog/BrighPostCard";
import { getAllPosts } from "@/lib/posts";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const searchTerm = q || '';
  
  return {
    title: searchTerm ? `Búsqueda: "${searchTerm}" - Planeta Viaje` : 'Búsqueda - Planeta Viaje',
    description: searchTerm 
      ? `Resultados de búsqueda para "${searchTerm}" en Planeta Viaje. Encuentra posts sobre viajes, destinos y experiencias.`
      : 'Busca posts sobre viajes, destinos y experiencias en Planeta Viaje.',
    keywords: searchTerm ? `${searchTerm}, viajes, destinos, búsqueda` : 'búsqueda, viajes, destinos',
    openGraph: {
      title: searchTerm ? `Búsqueda: "${searchTerm}" - Planeta Viaje` : 'Búsqueda - Planeta Viaje',
      description: searchTerm 
        ? `Resultados de búsqueda para "${searchTerm}" en Planeta Viaje.`
        : 'Busca posts sobre viajes, destinos y experiencias.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: searchTerm ? `Búsqueda: "${searchTerm}" - Planeta Viaje` : 'Búsqueda - Planeta Viaje',
      description: searchTerm 
        ? `Resultados de búsqueda para "${searchTerm}" en Planeta Viaje.`
        : 'Busca posts sobre viajes, destinos y experiencias.',
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const searchTerm = q || '';

  if (!searchTerm.trim()) {
    notFound();
  }

  // Obtener todos los posts
  const allPosts = await getAllPosts();

  // Filtrar posts por término de búsqueda
  const filteredPosts = allPosts.filter(post => {
    const searchLower = searchTerm.toLowerCase();
    const titleLower = post.title.toLowerCase();
    const excerptLower = post.excerpt.toLowerCase();
    
    return titleLower.includes(searchLower) || excerptLower.includes(searchLower);
  });

  return (
    <>
      <Header backgroundImage="/images/IMG_9881.jpg"/>
      <ParallaxBackground 
        localImage="/images/Nueva-York-City-Hall-Park.jpg" 
        overlay={true} 
        overlayColor="rgba(0, 0, 0, 0.4)"
      >
        <div className="mx-auto px-4 bg-gray-500/80">
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Búsqueda' }
                ]} 
              />
            </div>
            
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-center text-white">
                Resultados de búsqueda
              </h1>
              
              <div className="text-center mb-8">
                <p className="text-xl text-white mb-2">
                  {filteredPosts.length === 0 
                    ? `No se encontraron resultados para "${searchTerm}"`
                    : `Se encontraron ${filteredPosts.length} resultado${filteredPosts.length !== 1 ? 's' : ''} para "${searchTerm}"`
                  }
                </p>
              </div>

              {filteredPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BrightPostCard key={post.slug} {...post} />
                  ))}
                </div>
              )}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      No se encontraron resultados
                    </h3>
                    <p className="text-white/80 mb-6">
                      Intenta con otros términos de búsqueda o explora nuestras categorías.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-white/60">Sugerencias:</p>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Verifica la ortografía</li>
                        <li>• Usa términos más generales</li>
                        <li>• Prueba con sinónimos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </ParallaxBackground>
    </>
  );
} 