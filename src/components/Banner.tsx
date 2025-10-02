import React from 'react';

export default function Banner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <video
        src="/videos/VID-20251001-WA0005.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/IMG-20251001-WA0030.jpg"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          San Juan, Tierra de Alfalfa Premium
        </h2>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
          Calidad, tradición y tecnología en cada cosecha. Descubre por qué somos líderes en la región.
        </p>
      </div>
    </section>
  );
}
