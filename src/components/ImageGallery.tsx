import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('campos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Estas son las imágenes que deberías tener en tu carpeta public/images/gallery/
  const galleryImages: GalleryImage[] = [
    {
      src: '/campos/im1.jpeg',
      alt: 'Campo 1',
      category: 'campos',
      title: 'Campo 1'
    },
    {
      src: '/campos/im2.jpeg',
      alt: 'Campo 2',
      category: 'campos',
      title: 'Campo 2'
    },
    {
      src: '/campos/im3.jpeg',
      alt: 'Campo 3',
      category: 'campos',
      title: 'Campo 3'
    },
    {
      src: '/campos/im4.jpeg',
      alt: 'Campo 4',
      category: 'campos',
      title: 'Campo 4'
    },
    {
      src: '/campos/im5.jpeg',
      alt: 'Campo 5',
      category: 'campos',
      title: 'Campo 5'
    },
    {
      src: '/proceso/imga.jpeg',
      alt: 'Proceso A',
      category: 'proceso',
      title: 'Proceso A'
    },
    {
      src: '/proceso/imgb.jpeg',
      alt: 'Proceso B',
      category: 'proceso',
      title: 'Proceso B'
    },
    {
      src: '/proceso/imgc.jpeg',
      alt: 'Proceso C',
      category: 'proceso',
      title: 'Proceso C'
    },
    {
      src: '/proceso/imgd.jpeg',
      alt: 'Proceso D',
      category: 'proceso',
      title: 'Proceso D'
    },
    {
      src: '/proceso/imge.jpeg',
      alt: 'Proceso E',
      category: 'proceso',
      title: 'Proceso E'
    },
    {
      src: '/productos/imagen1.jpeg',
      alt: 'Producto 1',
      category: 'productos',
      title: 'Producto 1'
    },
    {
      src: '/productos/imagen2.jpeg',
      alt: 'Producto 2',
      category: 'productos',
      title: 'Producto 2'
    },
    {
      src: '/productos/imagen3.jpeg',
      alt: 'Producto 3',
      category: 'productos',
      title: 'Producto 3'
    },
    // Imágenes de logística desde la carpeta images/logistica
    {
      src: '/logistica/img1.jpeg',
      alt: 'Logística 1',
      category: 'logistica',
      title: 'Logística 1'
    },
    {
      src: '/logistica/img2.jpeg',
      alt: 'Logística 2',
      category: 'logistica',
      title: 'Logística 2'
    },
    {
      src: '/logistica/img3.jpeg',
      alt: 'Logística 3',
      category: 'logistica',
      title: 'Logística 3'
    },
    {
      src: '/logistica/img4.jpeg',
      alt: 'Logística 4',
      category: 'logistica',
      title: 'Logística 4'
    },
    {
      src: '/logistica/img5.jpeg',
      alt: 'Logística 5',
      category: 'logistica',
      title: 'Logística 5'
    },
  ];

  const categories = [
    { key: 'campos', label: 'Campos' },
    { key: 'proceso', label: 'Proceso' },
    { key: 'productos', label: 'Productos' },
    { key: 'logistica', label: 'Logística' }
  ];

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

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
                {/* Overlay eliminado para que no aparezca nada al hacer hover */}
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