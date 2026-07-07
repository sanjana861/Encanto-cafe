import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-[#1A0F0A] text-[#FDFBF7] p-8 md:p-16 lg:p-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 text-white/5 font-serif text-[200px] leading-none select-none pointer-events-none translate-x-10 -translate-y-10">“</div>
        
        <div className="max-w-3xl relative z-10 space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Verified Lounge Critiques</span>
          
          <div key={idx} className="min-h-[140px] flex flex-col justify-center animate-fadeIn">
            <p className="font-serif text-xl md:text-3xl font-light leading-relaxed italic text-white/90">"{REVIEWS[idx].text}"</p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <h4 className="font-serif text-lg font-medium text-[#D4AF37]">{REVIEWS[idx].name}</h4>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{REVIEWS[idx].role}</p>
            </div>
            <div className="flex space-x-1">
              {[...Array(REVIEWS[idx].stars)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === idx ? 'bg-[#D4AF37] w-6' : 'bg-white/20'}`} aria-label="dot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}