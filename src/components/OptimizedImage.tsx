import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  fallback,
  loading = "lazy" 
}: ImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError && fallback) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-earth-100 animate-pulse flex items-center justify-center">
          <div className="text-primary-600">
            <svg className="w-8 h-8 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}