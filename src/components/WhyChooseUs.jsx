import React from 'react';
import { Award, Sliders, Compass, Flame } from 'lucide-react';

const FEATURES = [
  {
    icon: Award,
    title: '96+ Cupping Reserve',
    desc: 'Sustainably traded, single-origin micro-lots sourced directly from elite estates in Ethiopia and Chikmagalur.'
  },
  {
    icon: Sliders,
    title: 'Precision Brewing',
    desc: 'Calibrated daily on Synesso Hydra pressure profiling profiles for flawless temperature and TDS extraction consistency.'
  },
  {
    icon: Compass,
    title: 'Architectural Calm',
    desc: 'Sound-engineered acoustics, soft curved arches, and minimalist lighting designed to induce flow-state focus.'
  },
  {
    icon: Flame,
    title: 'Artisanal Lamination',
    desc: 'Pastries crafted in-house daily using organic grains and imported AOP French butter for 200+ crisp, delicate layers.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-[#FDFBF7] border-t border-[#1A0F0A]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">The Encanto Philosophy</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A0F0A] leading-tight">
              An Uncompromised <br />
              Standard of <span className="italic text-[#D4AF37]">Sensory Detail</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <p className="text-sm text-[#1A0F0A]/70 leading-relaxed font-light max-w-md">
              We reject the convenience of mass commercial dining. Our processes are deliberately slow, mathematically calibrated, and centered on spatial peace.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx} 
                  className="group bg-[#F5F2EB]/40 border border-[#1A0F0A]/5 p-8 rounded-lg hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A0F0A]/5 flex items-center justify-center mb-6 text-[#1A0F0A] group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-colors duration-500">
                    <Icon size={22} className="stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A0F0A] mb-3">{feat.title}</h3>
                  <p className="text-xs text-[#1A0F0A]/60 leading-relaxed font-light">{feat.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
