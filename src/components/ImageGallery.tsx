import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Estas son las imágenes que deberías tener en tu carpeta public/images/gallery/
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/gallery/campo-alfalfa-1.jpg',
      alt: 'Campo de alfalfa en San Juan',
      category: 'campos',
      title: 'Campos de Alfalfa Premium'
    },
    {
      src: '/images/gallery/campo-alfalfa-2.jpg',
      alt: 'Cultivo de alfalfa en crecimiento',
      category: 'campos',
      title: 'Proceso de Cultivo'
    },
    {
      src: '/images/gallery/cosecha-alfalfa-1.jpg',
      alt: 'Cosecha de alfalfa',
      category: 'proceso',
      title: 'Cosecha Especializada'
    },
    {
      src: '/images/gallery/fardos-alfalfa-1.jpg',
      alt: 'Fardos de alfalfa apilados',
      category: 'productos',
      title: 'Fardos de Alta Calidad'
    },
    {
      src: '/images/gallery/pellets-alfalfa-1.jpg',
      alt: 'Alfalfa pelletizada',
      category: 'productos',
      title: 'Alfalfa Pelletizada'
    },
    {
      src: '/images/gallery/transporte-1.jpg',
      alt: 'Camión transportando alfalfa',
      category: 'logistica',
      title: 'Logística Eficiente'
    }
  ];

  const categories = [
    { key: 'all', label: 'Todas' },
    { key: 'campos', label: 'Campos' },
    { key: 'proceso', label: 'Proceso' },
    { key: 'productos', label: 'Productos' },
    { key: 'logistica', label: 'Logística' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const fallbackContent = (title: string) => (
    <div className="bg-gradient-to-br from-primary-100 to-earth-100 h-full flex items-center justify-center">
      <div className="text-center text-primary-700 p-4">
        <div className="w-12 h-12 mx-auto mb-3 bg-primary-300 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs opacity-75">Imagen próximamente</p>
      </div>
    </div>
  );

  return (
    <section id="procesos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galería de <span className="text-primary-600">DORGAN ALFALFA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca nuestras instalaciones, procesos y productos a través de imágenes reales.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="h-64 rounded-xl"
                  fallback={fallbackContent(image.title)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <OptimizedImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="h-96 w-full"
                  loading="eager"
                  fallback={fallbackContent(selectedImage.title)}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  title="Cerrar imagen"
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}