import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please input a valid email coordinate');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#1A0F0A] text-[#FDFBF7] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand Details */}
        <div className="lg:col-span-4 space-y-4">
          <a href="#home" className="flex flex-col tracking-widest text-[#FDFBF7] hover:opacity-80 transition-opacity w-fit">
            <span className="font-serif text-2xl font-bold uppercase tracking-[0.25em]">ENCANTO</span>
            <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] -mt-1 font-semibold">Cafe Lounge</span>
          </a>
          <p className="text-xs text-white/50 max-w-xs font-light leading-relaxed">
            Crafting premium specialty sensory milestones through fine micro-batch roasts, curated architectural acoustics, and minimalist spatial comfort.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors" aria-label="Follow on Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors" aria-label="Follow on Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Portals */}
        <div className="lg:col-span-3 space-y-4">
          <h5 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">Portals</h5>
          <nav className="flex flex-col space-y-2.5 text-xs text-white/60 font-light">
            <a href="#home" className="hover:text-white transition-colors">Return Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Specialty Menu</a>
            <a href="#about" className="hover:text-white transition-colors">Our History</a>
            <a href="#why-choose-us" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#gallery" className="hover:text-white transition-colors">Space Gallery</a>
            <a href="#reservation" className="hover:text-white transition-colors">Book Table</a>
          </nav>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:col-span-5 space-y-4">
          <h5 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">The Reserve Journal</h5>
          <p className="text-xs text-white/50 font-light">Subscribe to receive exclusive lot tasting invitations, roasting schedules, and curated events.</p>
          
          {subscribed ? (
            <div className="text-xs text-emerald-400 bg-emerald-950/20 border border-emerald-500/10 p-4 animate-scaleIn flex items-start gap-3 rounded">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5"><Check size={12} className="stroke-[3]" /></div>
              <div>
                <p className="font-semibold">Subscribed to Journal</p>
                <p className="text-[10px] text-white/50 mt-0.5">Tasting schedules and exclusive lounge reserve events will compile in your inbox.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email coordinate" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className={`bg-white/5 border text-xs px-4 py-3.5 w-full text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:ring-0 transition-colors ${
                    error ? 'border-red-400/50' : 'border-white/10'
                  }`} 
                />
                <button type="submit" className="bg-[#D4AF37] text-[#1A0F0A] px-5 hover:bg-[#FDFBF7] hover:text-[#1A0F0A] transition-all duration-300" aria-label="Subscribe button">
                  <ArrowRight size={16} />
                </button>
              </div>
              {error && <p className="text-red-400 text-[10px] font-medium">{error}</p>}
            </form>
          )}
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 text-[10px] text-white/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Encanto Cafe Lounge. Built as a luxury hospitality showcase.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Experience</a>
        </div>
      </div>
    </footer>
  );
}