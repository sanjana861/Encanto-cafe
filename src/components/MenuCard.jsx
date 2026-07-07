import React from 'react';

export default function MenuCard({ item }) {
  return (
    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 border border-transparent hover:border-[#1A0F0A]/5 hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-full sm:w-28 h-28 shrink-0 bg-neutral-100 overflow-hidden relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className="font-serif text-lg font-medium text-[#1A0F0A]">{item.name}</h3>
          <span className="text-sm font-sans font-bold text-[#D4AF37] whitespace-nowrap ml-4">{item.price}</span>
        </div>
        <div className="w-full h-[1px] border-b border-dashed border-[#1A0F0A]/10" />
        <p className="text-xs text-[#1A0F0A]/60 font-light leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}