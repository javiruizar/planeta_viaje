import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Cookies - Planeta Viaje',
  description: 'Política de cookies de Planeta Viaje. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.',
  keywords: 'política de cookies, cookies, RGPD, Planeta Viaje',
  openGraph: {
    title: 'Política de Cookies - Planeta Viaje',
    description: 'Política de cookies de Planeta Viaje. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.',
    type: 'website',
    url: 'https://planetaviaje.com/cookies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Cookies - Planeta Viaje',
    description: 'Política de cookies de Planeta Viaje. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.',
  },
  alternates: {
    canonical: 'https://planetaviaje.com/cookies',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header/>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Política de Cookies', href: '/cookies' }
          ]} 
        />
        
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlos cada vez que visite el sitio web o navegue de una página a otra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Cookies Técnicas (Necesarias)</h3>
              <p className="text-gray-700 mb-4">
                Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas. Normalmente solo se establecen en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>PHPSESSID:</strong> Cookie de sesión para mantener el estado del usuario</li>
                <li><strong>csrf_token:</strong> Token de seguridad para prevenir ataques CSRF</li>
                <li><strong>language:</strong> Preferencia de idioma del usuario</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Cookies Analíticas</h3>
              <p className="text-gray-700 mb-4">
                Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los visitantes navegan por el sitio.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>_ga:</strong> Google Analytics - Análisis de visitas (2 años)</li>
                <li><strong>_gid:</strong> Google Analytics - Identificación de sesión (24 horas)</li>
                <li><strong>_gat:</strong> Google Analytics - Control de frecuencia de solicitudes (1 minuto)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3. Cookies de Funcionalidad</h3>
              <p className="text-gray-700 mb-4">
                Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>user_preferences:</strong> Preferencias del usuario (1 año)</li>
                <li><strong>search_history:</strong> Historial de búsquedas (30 días)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4. Cookies de Marketing</h3>
              <p className="text-gray-700 mb-4">
                Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por estas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>_fbp:</strong> Facebook Pixel - Publicidad dirigida (3 meses)</li>
                <li><strong>_gcl_au:</strong> Google Ads - Conversiones (3 meses)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies de Terceros</h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio web utiliza servicios de terceros que pueden establecer cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Google Ads:</strong> Para publicidad dirigida</li>
                <li><strong>Facebook Pixel:</strong> Para publicidad en redes sociales</li>
                <li><strong>YouTube:</strong> Para reproducción de videos embebidos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Duración de las Cookies</h2>
              <p className="text-gray-700 mb-4">
                Las cookies pueden ser:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies de sesión:</strong> Se eliminan automáticamente cuando cierra el navegador</li>
                <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo hasta que expiran o las elimina manualmente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Gestión de Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1. Configuración del Navegador</h3>
              <p className="text-gray-700 mb-4">
                Puede configurar su navegador para rechazar todas las cookies o para recibir un aviso cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2. Configuración por Navegador</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos del sitio</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos del sitio web</li>
                <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3. Panel de Control de Cookies</h3>
              <p className="text-gray-700 mb-4">
                Puede gestionar sus preferencias de cookies a través de nuestro panel de control. Haga clic en "Configuración de Cookies" en la parte inferior de cualquier página.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Transferencias Internacionales</h2>
              <p className="text-gray-700 mb-4">
                Algunos de nuestros proveedores de servicios de terceros pueden transferir datos fuera del Espacio Económico Europeo (EEE). Cuando esto ocurra, nos aseguraremos de que se apliquen las garantías adecuadas para proteger sus datos personales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Actualizaciones de esta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o reglamentarias. Le notificaremos cualquier cambio material en esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Sus Derechos</h2>
              <p className="text-gray-700 mb-4">
                En relación con las cookies y el procesamiento de datos personales, tiene los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Derecho a retirar el consentimiento en cualquier momento</li>
                <li>Derecho de acceso a sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho de supresión de sus datos</li>
                <li>Derecho de limitación del tratamiento</li>
                <li>Derecho de portabilidad de los datos</li>
                <li>Derecho de oposición al tratamiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactar con nosotros en:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> info@planetaviaje.com<br />
                <strong>Dirección:</strong> [Dirección de la empresa]<br />
                <strong>Teléfono:</strong> [Número de contacto]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Información Adicional</h2>
              <p className="text-gray-700 mb-4">
                Para más información sobre cookies y privacidad, puede visitar:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><a href="https://www.aepd.es" className="text-blue-600 hover:text-blue-800">Agencia Española de Protección de Datos</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-blue-600 hover:text-blue-800">Your Online Choices</a></li>
                <li><a href="https://www.allaboutcookies.org" className="text-blue-600 hover:text-blue-800">All About Cookies</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 