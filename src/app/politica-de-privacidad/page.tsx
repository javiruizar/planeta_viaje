import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Header from '@/components/layout/Header';
export const metadata: Metadata = {
  title: 'Política de Privacidad - Planeta Viaje',
  description: 'Política de privacidad de Planeta Viaje. Información sobre el tratamiento de datos personales según el RGPD y la normativa española.',
  keywords: 'política de privacidad, RGPD, protección de datos, Planeta Viaje',
  openGraph: {
    title: 'Política de Privacidad - Planeta Viaje',
    description: 'Política de privacidad de Planeta Viaje. Información sobre el tratamiento de datos personales según el RGPD y la normativa española.',
    type: 'website',
    url: 'https://planetaviaje.com/politica-privacidad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidad - Planeta Viaje',
    description: 'Política de privacidad de Planeta Viaje. Información sobre el tratamiento de datos personales según el RGPD y la normativa española.',
  },
  alternates: {
    canonical: 'https://planetaviaje.com/politica-privacidad',
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Política de Privacidad', href: '/politica-privacidad' }
          ]} 
        />
        
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información del Responsable del Tratamiento</h2>
              <p className="text-gray-700 mb-4">
                <strong>Identidad:</strong> Planeta Viaje<br />
                <strong>Domicilio:</strong> [Dirección de la empresa]<br />
                <strong>NIF/CIF:</strong> [Número fiscal]<br />
                <strong>Email:</strong> info@planetaviaje.com<br />
                <strong>Teléfono:</strong> [Número de contacto]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Finalidad del Tratamiento de Datos</h2>
              <p className="text-gray-700 mb-4">
                Sus datos personales serán tratados para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Gestionar la relación comercial y prestación de servicios</li>
                <li>Envío de comunicaciones comerciales sobre nuestros servicios</li>
                <li>Mejora de nuestros servicios y experiencia de usuario</li>
                <li>Cumplimiento de obligaciones legales</li>
                <li>Gestión de consultas y atención al cliente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Base Legal del Tratamiento</h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                <li><strong>Ejecución de contrato:</strong> Para la prestación de servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para la mejora de servicios y experiencia de usuario</li>
                <li><strong>Cumplimiento legal:</strong> Para el cumplimiento de obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Categorías de Datos Tratados</h2>
              <p className="text-gray-700 mb-4">
                Tratamos las siguientes categorías de datos personales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Datos de identificación (nombre, apellidos, DNI)</li>
                <li>Datos de contacto (email, teléfono, dirección)</li>
                <li>Datos de navegación y uso de la web</li>
                <li>Datos de preferencias y comportamiento</li>
                <li>Datos de facturación y pago</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Destinatarios de los Datos</h2>
              <p className="text-gray-700 mb-4">
                Sus datos pueden ser comunicados a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proveedores de servicios tecnológicos y hosting</li>
                <li>Autoridades públicas cuando sea legalmente requerido</li>
                <li>Empresas del grupo empresarial, si aplica</li>
                <li>Proveedores de servicios de pago y procesamiento de transacciones</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Plazo de Conservación</h2>
              <p className="text-gray-700 mb-4">
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
              </p>
              <p className="text-gray-700 mb-4">
                En concreto:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Datos de clientes: 5 años desde la última relación comercial</li>
                <li>Datos de navegación: 2 años</li>
                <li>Datos de facturación: 5 años por obligación legal</li>
                <li>Datos de marketing: Hasta la revocación del consentimiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Derechos del Usuario</h2>
              <p className="text-gray-700 mb-4">
                Puede ejercer los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Derecho de acceso:</strong> Conocer qué datos suyos tratamos</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Derecho de supresión:</strong> Eliminar sus datos</li>
                <li><strong>Derecho de limitación:</strong> Limitar el tratamiento</li>
                <li><strong>Derecho de portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento</li>
                <li><strong>Derecho de revocación:</strong> Retirar el consentimiento</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Para ejercer estos derechos, puede contactar con nosotros en: <strong>info@planetaviaje.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Reclamaciones</h2>
              <p className="text-gray-700 mb-4">
                Si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, puede presentar una reclamación ante la autoridad de control competente (www.aepd.es).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Medidas de Seguridad</h2>
              <p className="text-gray-700 mb-4">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales que tratamos, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Transferencias Internacionales</h2>
              <p className="text-gray-700 mb-4">
                No se realizan transferencias internacionales de datos personales fuera del Espacio Económico Europeo, salvo que sea necesario para la prestación de servicios y siempre con las garantías adecuadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, anunciaremos en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta sobre esta política de privacidad, puede contactar con nosotros en:
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