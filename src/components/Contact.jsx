import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A0F0A] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Coordinates</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Visit The Sanctuary</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#D4AF37] mt-1" size={18} />
              <div>
                <h4 className="font-serif text-base font-medium text-[#D4AF37]">Location</h4>
                <p className="text-sm text-white/60 font-light">Plot 42, Jubilee Hills Road No. 36, Hyderabad, TS, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="text-[#D4AF37] mt-1" size={18} />
              <div>
                <h4 className="font-serif text-base font-medium text-[#D4AF37]">Hours</h4>
                <p className="text-sm text-white/60 font-light">Mon - Sun: 07:00 AM - 11:30 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-[#D4AF37] mt-1" size={18} />
              <div>
                <h4 className="font-serif text-base font-medium text-[#D4AF37]">Guest Relations</h4>
                <p className="text-sm text-white/60 font-light">+91 40 2345 6789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 h-80 min-h-[300px] border border-white/10 relative">
          <iframe 
            title="Map Anchor"
            src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3806.4111075677983!2d78.4064366!3d17.4304892!2m3!1f0!2f0!3f0!3m2!1i1020!4i740!4f13.1!3m3!1m2!1s0x3bcb913100000001%3A0x63cdfb39ef5bdbe3!2sJubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0 grayscale invert contrast-125 brightness-75"
            allowFullScreen="" loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}