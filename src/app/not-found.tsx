import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Página no encontrada - Planeta Viaje',
  description: 'La página que buscas no existe. Explora nuestros destinos y guías de viaje.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          {/* Icono de error */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg 
                className="w-12 h-12 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
          </div>

          {/* Título y mensaje */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">¡Ups! Página no encontrada</h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Pero no te preocupes, tenemos muchos destinos increíbles esperándote.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Volver al Inicio
            </Link>
            
            <Link 
              href="/drafts" 
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Destinos
            </Link>
          </div>

          {/* Búsqueda */}
          <div className="mb-8">
            <p className="text-gray-600 mb-4">¿Buscas algo específico?</p>
            <div className="max-w-md mx-auto">
              <form action="/search" method="GET" className="flex">
                <input 
                  type="text" 
                  name="q" 
                  placeholder="Buscar destinos, guías..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>

          {/* Destinos populares */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Destinos Populares</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Europa', href: '/category/europa', image: '/images/salamanca.jpg' },
                { name: 'Asia', href: '/category/asia', image: '/images/tailandia.jpg' },
                { name: 'América', href: '/category/america', image: '/images/Nueva-York-City-Hall-Park.jpg' },
                { name: 'África', href: '/category/africa', image: '/images/salamanca.jpg' }
              ].map((destino) => (
                <Link 
                  key={destino.name}
                  href={destino.href} 
                  className="group block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="relative w-full h-24 mb-3 rounded-md overflow-hidden">
                    <Image
                      src={destino.image}
                      alt={destino.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {destino.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Mensaje de ayuda */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">¿Necesitas ayuda?</h4>
            <p className="text-blue-700 mb-4">
              Si crees que esto es un error, puedes contactarnos en{' '}
              <a href="mailto:info@planetaviaje.com" className="text-blue-600 hover:text-blue-800 underline">
                info@planetaviaje.com
              </a>
            </p>
            <p className="text-sm text-blue-600">
              También puedes usar la barra de búsqueda en la parte superior de la página para encontrar lo que buscas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}