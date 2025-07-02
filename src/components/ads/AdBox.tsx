/**
 * @description
 * Componente contenedor para publicidad. Actualmente muestra un placeholder
 * que puede ser reemplazado por un anuncio real en el futuro.
 * 
 * @example
 * <AdBox />
 */
const AdBox = () => {
  return (
    <aside 
      className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200"
      aria-label="Espacio publicitario"
    >
      <div className="text-center text-sm text-gray-500">
        <p>Espacio reservado para publicidad</p>
        <div className="mt-2 p-8 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-400">Anuncio</span>
        </div>
      </div>
    </aside>
  );
};

export default AdBox;
