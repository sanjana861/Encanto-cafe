import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Menu', id: 'menu' },
  { label: 'About', id: 'about' },
  { label: 'Philosophy', id: 'why-choose-us' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll background change
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Active section highlight observer
    const observers = MENU_ITEMS.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { 
          rootMargin: '-100px 0px -60% 0px', // Matches header offset
          threshold: 0.1 
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-[#FDFBF7]/95 backdrop-blur-md py-4 border-[#1A0F0A]/5 shadow-sm' 
        : 'bg-[#FDFBF7] py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex flex-col tracking-widest text-[#1A0F0A] hover:opacity-80 transition-opacity">
          <span className="font-serif text-2xl font-bold uppercase tracking-[0.25em]">ENCANTO</span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] -mt-1 font-semibold">Cafe Lounge</span>
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {MENU_ITEMS.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#D4AF37] after:transition-all after:duration-300 ${
                activeSection === item.id 
                  ? 'text-[#D4AF37] after:w-full' 
                  : 'text-[#1A0F0A]/60 hover:text-[#1A0F0A] after:w-0 hover:after:w-full'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#reservation" className="inline-flex items-center justify-center text-[10px] uppercase tracking-widest font-bold bg-[#1A0F0A] text-[#FDFBF7] px-6 py-3.5 hover:bg-[#D4AF37] hover:text-[#1A0F0A] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2">
            Reserve Table
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#1A0F0A] p-2 hover:bg-[#1A0F0A]/5 rounded-full transition-colors focus:outline-none" 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 top-[77px] z-40 bg-[#1A0F0A]/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsOpen(false)} />

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-[77px] right-0 bottom-0 w-72 max-w-full bg-[#FDFBF7] border-l border-[#1A0F0A]/10 shadow-2xl z-40 px-8 py-10 flex flex-col justify-between transition-transform duration-500 ease-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col space-y-6">
          {MENU_ITEMS.map((item, idx) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={() => setIsOpen(false)} 
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 block py-1 border-b border-[#1A0F0A]/5 ${
                activeSection === item.id 
                  ? 'text-[#D4AF37] translate-x-2' 
                  : 'text-[#1A0F0A]/70 hover:text-[#1A0F0A] hover:translate-x-1'
              } ${isOpen ? 'opacity-100 transform-none' : 'opacity-0 translate-x-4'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <a 
            href="#reservation" 
            onClick={() => setIsOpen(false)} 
            className="w-full text-center text-xs uppercase tracking-widest font-bold bg-[#1A0F0A] text-[#FDFBF7] py-4.5 block hover:bg-[#D4AF37] hover:text-[#1A0F0A] transition-all duration-300"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </nav>
  );
}