import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header id="home" className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#1A0F0A]">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity transform scale-105 animate-subtleZoom">
        <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1920" alt="Beans background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F0A] via-[#1A0F0A]/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">The Luxury Specialty Lounge</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFBF7] leading-[1.1] font-light">
            Every Cup <br />
            <span className="italic font-normal text-[#D4AF37]">Tells a Story</span>
          </h1>
          
          <p className="text-sm md:text-base text-[#FDFBF7]/70 max-w-lg leading-relaxed font-light tracking-wide">
            Welcome to an uncompromised multi-sensory culinary escape. Cultivated through artisan roasts, handcrafted local pastries, and sophisticated interior tranquility.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#reservation" className="inline-flex items-center justify-center text-xs uppercase tracking-widest font-semibold bg-[#D4AF37] text-[#1A0F0A] px-8 py-4 hover:bg-[#FDFBF7] transition-all duration-300">
              Book Royal Table
            </a>
            <a href="#menu" className="inline-flex items-center justify-center text-xs uppercase tracking-widest font-semibold border border-[#FDFBF7]/30 text-[#FDFBF7] px-8 py-4 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300">
              Explore Menu
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center relative">
          <div className="relative w-80 h-[450px] p-3 border border-[#D4AF37]/30 bg-neutral-900/40 backdrop-blur-sm shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800" alt="Pour over art" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-[#1A0F0A] p-5 shadow-xl space-y-1 font-serif">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-[9px] uppercase tracking-widest font-sans font-bold">Arabica Reserve</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}