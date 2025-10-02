import OptimizedImage from './OptimizedImage';

export default function Hero() {
  const heroFallback = (
    <div className="bg-gradient-to-br from-primary-200 to-earth-200 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl">
      <div className="text-center text-primary-700">
        <div className="w-24 h-24 mx-auto mb-4 bg-primary-300 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zM6.5 19h11l-5.5-11L6.5 19z"/>
          </svg>
        </div>
  <p className="font-semibold text-lg">Campos de DORGAN ALFALFA</p>
        <p className="text-sm opacity-75">San Juan, Argentina</p>
      </div>
    </div>
  );

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-primary-50 to-earth-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-primary-600">Alfalfa Premium</span>
              <br />
              de San Juan
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Cultivamos la mejor alfalfa de Argentina con más de 30 años de experiencia. 
              Calidad superior, nutrición garantizada para su ganado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <a
                href="https://wa.me/5492641234567?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20alfalfa%20premium%20para%20mi%20ganado.%20Gracias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-center mx-auto"
              >
                Solicitar Cotización
              </a>
              <a
                href="#productos"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200 text-center mx-auto"
              >
                Ver Productos
              </a>
            </div>
        </div>

          {/* Hero Media */}
          {/* Removed Hero Media */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Hectáreas Cultivadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Calidad Garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
}