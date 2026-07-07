import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/cafeData';

export default function Faq() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Inquiries Index</span>
        <h2 className="font-serif text-3xl font-light">Frequently Answered Truths</h2>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="border-b border-[#1A0F0A]/10 pb-4">
            <button onClick={() => setActive(active === idx ? null : idx)} className="w-full flex justify-between items-center text-left py-3 group">
              <h3 className="font-serif text-lg font-medium text-[#1A0F0A] group-hover:text-[#D4AF37] transition-colors">{faq.q}</h3>
              <ChevronDown size={18} className={`transform transition-transform duration-300 ${active === idx ? 'rotate-180 text-[#D4AF37]' : 'text-[#1A0F0A]/40'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${active === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-[#1A0F0A]/70 font-light leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}