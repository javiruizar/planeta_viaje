/**
 * @description
 * Componente contenedor para publicidad. Actualmente muestra un placeholder
 * que puede ser reemplazado por un anuncio real en el futuro.
 * 
 * @example
 * <AdBox />
 */

import Image from 'next/image';
import Link from 'next/link';

function MondoAdBox () {
  return (
    <aside 
      className="sticky top-4 w-full p-4 bg-gray-50 rounded-lg border border-gray-200"
      aria-label="Espacio publicitario"
    >
      <div className=" top-4 text-center text-sm text-gray-500">
      <iframe 
      height="550px" width="400px" 
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms" 
      src="https://heymondo.es/widget/indexProduction.php?identifier=jz7colDrqhdjcwcCpMfKT8ri24iZyNRSuB5OOWWG&campaign=ENTRADA">
      </iframe>
      </div>
    </aside>
  );
};
function OtherAddBox () {
  return (
    <aside>
      <Link href="https://heymondo.es/?utm_medium=Afiliado&utm_source=PLANETAVIAJE&utm_campaign=PRINCIPAL&cod_descuento=PLANETAVIAJE&ag_campaign=ENTRADA&agencia=jz7colDrqhdjcwcCpMfKT8ri24iZyNRSuB5OOWWG&redirect=TEMPORAL">
      
    <Image src="/images/234 x 330.png" alt="Anuncio heymondo planeta viaje" width={234} height={330} />
    </Link>
    </aside>
    
  )
}

export { MondoAdBox, OtherAddBox};
