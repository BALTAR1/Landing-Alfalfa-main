import { useState, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
}

export default function VideoPlayer({ src, poster, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="bg-gradient-to-br from-primary-100 to-earth-100 rounded-2xl aspect-video flex items-center justify-center">
        <div className="text-center text-primary-700 p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          {description && <p className="text-sm opacity-75">{description}</p>}
          <p className="text-xs mt-2 opacity-60">Video próximamente disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        poster={poster}
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
        controls={isPlaying}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={handlePlay}
            title={`Reproducir: ${title}`}
            className="bg-white/90 hover:bg-white text-primary-600 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}

      {!isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          {description && (
            <p className="text-white/90 text-sm">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Componente para sección de videos




// Componente eliminado porque ya no se usa en la landing