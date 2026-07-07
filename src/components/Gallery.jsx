import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/cafeData';

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    if (!lightboxImg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg]);

  return (
    <section id="gallery" className="py-24 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Visual Atmosphere</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A0F0A]">The Space & Rituals</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id}
              onClick={() => setLightboxImg(img.src)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxImg(img.src);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open lightbox for ${img.title}`}
              className="group relative h-80 bg-neutral-200 overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-300 rounded"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
              <div className="absolute inset-0 bg-[#1A0F0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">View Masterpiece</p>
                  <p className="font-serif text-lg text-[#FDFBF7] font-light">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-[#1A0F0A]/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn" 
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Large Preview"
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white focus:outline-none p-2 focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-full"
            onClick={() => setLightboxImg(null)}
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Enlarged layout preview" className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-scaleIn" />
        </div>
      )}
    </section>
  );
}