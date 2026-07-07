import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <div className="absolute inset-0 border-2 border-[#D4AF37]/20 translate-x-4 translate-y-4 -z-10" />
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1000" alt="Interior Architecture" className="w-full h-[500px] object-cover shadow-xl" />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Our Story</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">A Sanctuary For The Mind & Palette</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
          <p className="text-sm text-[#1A0F0A]/70 leading-relaxed font-light">
            Founded in 2024, Encanto arose from a desire to strip away commercial cafe noise. We view coffee roasting not merely as production, but as thermodynamic artwork.
          </p>
          <p className="text-sm text-[#1A0F0A]/70 leading-relaxed font-light">
            Every detail, from the acoustics of our soft architectural arches to the concrete weights of our hand-blown glass serving vessels, is crafted to induce flow-state focus and calm.
          </p>
          <div className="pt-4 flex items-center space-x-6">
            <div>
              <p className="font-serif text-3xl font-bold text-[#D4AF37]">96+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1A0F0A]/60 font-medium">Cupping Score Coffee</p>
            </div>
            <div className="w-[1px] h-10 bg-[#1A0F0A]/10" />
            <div>
              <p className="font-serif text-3xl font-bold text-[#D4AF37]">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1A0F0A]/60 font-medium">Organic Raw Produce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}