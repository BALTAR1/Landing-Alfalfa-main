import OptimizedImage from './OptimizedImage';

export default function Products() {
  const products = [
    {
      name: "SEMILLA PATRICIA",
      description: "Grupo 7 (reposo intermedio/corto). Ideal para carne y leche, en pastoreo o corte. Perfecta para reservas forrajeras.",
      features: [
        "Resistente a enfermedades",
        "Produce mucho forraje",
        "Muy persistente",
        "Presentación: bolsas de 25kg tratadas con Cruiser Plus"
      ],
      image: "/productos/imagen1.jpeg",
      fallbackIcon: "🌱"
    },
    {
      name: "SEMILLA MONARCA",
      description: "Grupo 8 (reposo corto). Excelente para carne y leche, destacada en pastoreo directo.",
      features: [
        "Muy resistente al pastoreo intensivo",
        "Alta relación hoja-tallo",
        "Produce más que CUF 101",
        "Presentación: bolsas de 25kg tratadas con Cruiser Plus"
      ],
      image: "/productos/imagen2.jpeg",
      fallbackIcon: "🌱"
    },
    {
      name: "SEMILLA ARAUCANA",
      description: "Grupo 9 (reposo corto). Para alto rendimiento de forraje, rápida en crecer.",
      features: [
        "Ramificación abundante",
        "Máxima resistencia a enfermedades",
        "Muy productiva",
        "Presentación: bolsas de 25kg tratadas con Cruiser Plus"
      ],
      image: "/productos/imagen3.jpeg",
      fallbackIcon: "🌱"
    }
  ];

  const getProductFallback = (icon: string, name: string) => (
    <div className="h-48 bg-gradient-to-br from-primary-100 to-earth-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-2">{icon}</div>
        <p className="text-primary-700 font-medium">{name}</p>
      </div>
    </div>
  );

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary-600">Nuestras Semillas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nuestras variedades de semillas de alfalfa, seleccionadas para ofrecer el mejor rendimiento y adaptabilidad en San Juan y toda Argentina.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto flex flex-col min-h-[420px]">
              {/* Product Image */}
              <div className="bg-white w-full">
                <img
                  src={product.image}
                  alt={`${product.name} - DORGAN ALFALFA San Juan`}
                  className="h-36 w-full object-contain mb-2"
                />
              </div>
              
              {/* Product Content */}
              <div className="p-6 flex flex-col">
                {/* Título para cada producto */}
                {index === 0 && (
                  <h3 className="text-2xl font-bold text-primary-700 mb-1 text-center">SEMILLA PATRICIA</h3>
                )}
                {index === 1 && (
                  <h3 className="text-2xl font-bold text-primary-700 mb-1 text-center">SEMILLA MONARCA</h3>
                )}
                {index === 2 && (
                  <h3 className="text-2xl font-bold text-primary-700 mb-1 text-center">SEMILLA ARAUCANA</h3>
                )}
                <p className="text-gray-600 mb-3 mt-2">{product.description}</p>
                
                {/* Features */}
                <div className="mb-6 w-full">
                  <h4 className="font-semibold text-gray-800 mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-primary-600 to-green-500 rounded-3xl p-10 text-center text-white shadow-xl overflow-hidden">
          <div className="absolute left-8 top-8 opacity-20 text-7xl pointer-events-none select-none">🌱</div>
          <h3 className="text-4xl font-extrabold mb-4 drop-shadow-lg tracking-tight">¿Necesita un producto personalizado?</h3>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Trabajamos con usted para desarrollar <span className="font-semibold text-white/90">soluciones específicas</span> según sus necesidades.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-primary-50 hover:scale-105 transition-all duration-200 border-2 border-white"
          >
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5-5m0 0l5 5m-5-5v12" />
              </svg>
              Contactar Ahora
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}