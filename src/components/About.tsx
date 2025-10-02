import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

export default function About() {
  // Slider de imágenes en el cuadro derecho
  const sliderImages = [
    { src: '/images/IMG-20251001-WA0010.jpg', alt: 'Cultivo de alfalfa' },
    { src: '/images/IMG-20251001-WA0042.jpg', alt: 'Foto aérea drone' },
    { src: '/images/IMG-20251001-WA0030.jpg', alt: 'Producción de alfalfa' },
  ];
  const [current, setCurrent] = useState(0);
  // Cambia la imagen automáticamente cada 3 segundos
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  const aboutFallback = (
    <div className="bg-gradient-to-br from-earth-200 to-primary-200 rounded-3xl h-96 flex items-center justify-center shadow-xl">
      <div className="text-center text-earth-800">
        <div className="w-20 h-20 mx-auto mb-4 bg-earth-400 rounded-full flex items-center justify-center">
          <span className="text-3xl">🌾</span>
        </div>
        <p className="font-semibold">Campos de Alfalfa</p>
        <p className="text-sm opacity-75">San Juan, Argentina</p>
      </div>
    </div>
  );

  const features = [
    {
      icon: "🌱",
      title: "Cultivo Sustentable",
      description: "Utilizamos técnicas de agricultura sustentable que respetan el medio ambiente."
    },
    {
      icon: "🏆",
      title: "Calidad Premium",
      description: "Nuestros procesos garantizan alfalfa de la más alta calidad nutricional."
    },
    {
      icon: "🚚",
      title: "Logística Eficiente",
      description: "Entregamos en tiempo y forma en toda la región de Cuyo y provincias cercanas."
    },
    {
      icon: "👨‍🌾",
      title: "Experiencia Familiar",
      description: "Tradición familiar de más de tres décadas en el cultivo de alfalfa."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosotros Somos <span className="text-primary-600">DORGAN ALFALFA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa familiar dedicada al cultivo y comercialización de alfalfa premium en San Juan, Argentina. 
            Comprometidos con la excelencia y la sustentabilidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tradición y Innovación en cada cultivo
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desde 1990, nos dedicamos al cultivo de alfalfa en los fértiles suelos de San Juan. 
              Nuestra experiencia combinada con técnicas modernas de agricultura nos permite 
              ofrecer productos de la más alta calidad.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Trabajamos con pasión y dedicación para brindar a nuestros clientes la mejor 
              alfalfa de la región, cumpliendo con los más altos estándares de calidad y 
              comprometidos con prácticas sustentables.
            </p>


            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Nuestra Misión</h4>
              <p className="text-primary-700">
                Proporcionar alfalfa de excelente calidad que contribuya al desarrollo de la ganadería argentina, manteniendo un compromiso inquebrantable con la sustentabilidad y el cuidado del medio ambiente.<br /><br />
                Nos destacamos por nuestro cultivo sustentable, calidad premium, logística eficiente y una experiencia familiar de más de tres décadas. Cada paso de nuestro proceso está orientado a ofrecer productos de excelencia, respetando el medio ambiente y garantizando la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Collage de imágenes en el cuadro derecho */}
          <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl h-96 shadow-xl flex items-center justify-center p-6">
            <img
              src={sliderImages[current].src}
              alt={sliderImages[current].alt}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Features Grid - Eliminado temporalmente */}
      </div>
    </section>
  );
}