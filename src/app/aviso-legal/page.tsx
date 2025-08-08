import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Aviso Legal - Planeta Viaje',
  description: 'Aviso legal de Planeta Viaje. Información legal sobre la propiedad intelectual, responsabilidad y condiciones de uso del sitio web.',
  keywords: 'aviso legal, términos legales, condiciones de uso, Planeta Viaje',
  openGraph: {
    title: 'Aviso Legal - Planeta Viaje',
    description: 'Aviso legal de Planeta Viaje. Información legal sobre la propiedad intelectual, responsabilidad y condiciones de uso del sitio web.',
    type: 'website',
    url: 'https://planetaviaje.com/aviso-legal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aviso Legal - Planeta Viaje',
    description: 'Aviso legal de Planeta Viaje. Información legal sobre la propiedad intelectual, responsabilidad y condiciones de uso del sitio web.',
  },
  alternates: {
    canonical: 'https://planetaviaje.com/aviso-legal',
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen">
        
      <Header/>

     
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Aviso Legal', href: '/aviso-legal' }
          ]} 
        />
        
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información General</h2>
              <p className="text-gray-700 mb-4">
                En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos de información general de este sitio web:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Denominación social:</strong> Planeta Viaje<br />
                <strong>NIF/CIF:</strong> [Número fiscal]<br />
                <strong>Domicilio:</strong> [Dirección de la empresa]<br />
                <strong>Email:</strong> info@planetaviaje.com<br />
                <strong>Teléfono:</strong> [Número de contacto]<br />
                <strong>Inscripción registral:</strong> [Datos del registro mercantil]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Términos y Condiciones de Uso</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Objeto</h3>
              <p className="text-gray-700 mb-4">
                Las presentes condiciones regulan el uso del servicio del sitio web Planeta Viaje (en adelante, &quot;el Sitio Web&quot; que Planeta Viaje pone a disposición de los usuarios de Internet.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Aceptación de las Condiciones</h3>
              <p className="text-gray-700 mb-4">
                El acceso y uso del Sitio Web implica la aceptación expresa y plena de todas las cláusulas y condiciones incluidas en este Aviso Legal.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3. Modificaciones</h3>
              <p className="text-gray-700 mb-4">
                Planeta Viaje se reserva el derecho de modificar unilateralmente las condiciones y términos de uso del Sitio Web. Cualquier modificación será publicada en el Sitio Web y será efectiva desde su publicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de Planeta Viaje y quedan reservados todos los derechos sobre los mismos.
              </p>
              <p className="text-gray-700 mb-4">
                Se prohíbe la reproducción, distribución, comercialización y transformación, total o parcial, no autorizada del contenido del Sitio Web, salvo que sea para uso personal y privado.
              </p>
              <p className="text-gray-700 mb-4">
                Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este Sitio Web son propiedad exclusiva de Planeta Viaje o de sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública, total o parcial, debe contar con el consentimiento previo de Planeta Viaje.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Responsabilidad</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Responsabilidad del Usuario</h3>
              <p className="text-gray-700 mb-4">
                El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, las buenas costumbres y el orden público. Asimismo, se compromete a no utilizar el Sitio Web con fines ilícitos o lesivos de los derechos e intereses de Planeta Viaje o de terceros.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2. Responsabilidad de Planeta Viaje</h3>
              <p className="text-gray-700 mb-4">
                Planeta Viaje no se hace responsable de los daños y perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico, motivadas por causas ajenas a la empresa.
              </p>
              <p className="text-gray-700 mb-4">
                Asimismo, Planeta Viaje no se hace responsable de los daños y perjuicios que se pudieran derivar del uso de la información contenida en el Sitio Web, ni de los daños y perjuicios que se pudieran derivar de la utilización de enlaces externos a terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Enlaces</h2>
              <p className="text-gray-700 mb-4">
                Los enlaces que se pudieran establecer desde el Sitio Web a otros sitios web de terceros no suponen en ningún caso una sugerencia, invitación o recomendación sobre los mismos, por lo que Planeta Viaje no se hace responsable del contenido de los sitios web enlazados, ni de las consecuencias que pudieran derivarse para el usuario del acceso a los mismos.
              </p>
              <p className="text-gray-700 mb-4">
                Planeta Viaje no se hace responsable de los enlaces que desde otros sitios web se pudieran establecer al Sitio Web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Jurisdicción y Ley Aplicable</h2>
              <p className="text-gray-700 mb-4">
                Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el Sitio Web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de [Ciudad], salvo que la ley establezca otra jurisdicción obligatoria.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Protección de Datos</h2>
              <p className="text-gray-700 mb-4">
                Para información sobre el tratamiento de datos personales, consulte nuestra Política de Privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Para información sobre el uso de cookies, consulte nuestra Política de Cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta sobre este aviso legal, puede contactar con nosotros en:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> info@planetaviaje.com<br />
                <strong>Dirección:</strong> [Dirección de la empresa]<br />
                <strong>Teléfono:</strong> [Número de contacto]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 