import React, { useState } from 'react';
import { MENU_DATA } from '../data/cafeData';
import MenuCard from './MenuCard';

const TABS = [
  { id: 'all', label: 'All Creations' },
  { id: 'coffee', label: 'Specialty Coffee' },
  { id: 'tea', label: 'Curated Tea' },
  { id: 'desserts', label: 'Fine Pastry' },
  { id: 'breakfast', label: 'Artisan Breakfast' },
  { id: 'signature', label: 'Signatures' }
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Artisanal Masterpieces</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light">The Seasonal Reserve Menu</h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              activeTab === tab.id ? 'bg-[#1A0F0A] text-[#FDFBF7]' : 'bg-[#1A0F0A]/5 text-[#1A0F0A]/70 hover:bg-[#1A0F0A]/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 animate-fadeIn">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}