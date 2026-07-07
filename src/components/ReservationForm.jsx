import React, { useState } from 'react';
import { Check, Calendar, Users, Clock } from 'lucide-react';

export default function ReservationForm() {
  const [formState, setFormState] = useState({ name: '', phone: '', guests: '2', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formState.name.trim()) errs.name = 'Full name is required';
    if (!formState.phone.trim() || formState.phone.length < 10) errs.phone = 'Valid 10-digit phone number required';
    if (!formState.date) errs.date = 'Reservation date is required';
    if (!formState.time) errs.time = 'Time slot selection is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({ name: '', phone: '', guests: '2', date: '', time: '', message: '' });
  };

  // Generate hourly slots from 7 AM to 10 PM
  const timeSlots = [
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ];

  return (
    <section id="reservation" className="py-24 bg-[#F5F2EB] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-16 shadow-xl border border-[#1A0F0A]/5 rounded-lg">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Secure A Table</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1A0F0A]">Curate Your Dining Window</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {submitted ? (
            <div className="p-8 md:p-12 bg-emerald-50/50 border border-emerald-600/10 text-center space-y-6 animate-scaleIn rounded-md max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                <Check size={26} className="stroke-[2.5]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-emerald-950">Reservation Provisionally Locked</h3>
                <p className="text-sm text-emerald-800/80 font-light">We have allocated your dining coordinates. A notification has been sent.</p>
              </div>

              <div className="bg-white/80 border border-emerald-600/5 p-6 text-left space-y-4 rounded text-xs text-[#1A0F0A]/80 shadow-sm max-w-md mx-auto">
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[9px]">Guest Anchor</span>
                  <span className="font-medium">{formState.name}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[9px]">Party size</span>
                  <span className="font-medium flex items-center gap-1"><Users size={12} /> {formState.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[9px]">Coordinate Slot</span>
                  <span className="font-medium flex items-center gap-1"><Calendar size={12} /> {formState.date} <Clock size={12} className="ml-1" /> {formState.time}</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-semibold pt-1">
                  <span>Booking Reference</span>
                  <span className="tracking-wider font-mono">ENC-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
              </div>

              <button 
                onClick={handleReset} 
                className="inline-flex justify-center text-[10px] uppercase tracking-widest font-bold bg-[#1A0F0A] text-[#FDFBF7] px-8 py-3.5 hover:bg-[#D4AF37] hover:text-[#1A0F0A] transition-all duration-300"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-input" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Full Name *</label>
                  <input 
                    id="name-input"
                    type="text" 
                    placeholder="Enter your name"
                    value={formState.name} 
                    onChange={(e) => setFormState({...formState, name: e.target.value})} 
                    className={`w-full bg-[#FDFBF7] border p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded transition-colors ${
                      errors.name ? 'border-red-400/60' : 'border-[#1A0F0A]/10'
                    }`} 
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1.5 font-medium">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone-input" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Phone Number *</label>
                  <input 
                    id="phone-input"
                    type="tel" 
                    placeholder="e.g. 9876543210"
                    value={formState.phone} 
                    onChange={(e) => setFormState({...formState, phone: e.target.value})} 
                    className={`w-full bg-[#FDFBF7] border p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded transition-colors ${
                      errors.phone ? 'border-red-400/60' : 'border-[#1A0F0A]/10'
                    }`} 
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1.5 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="guests-select" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Guests</label>
                  <select 
                    id="guests-select"
                    value={formState.guests} 
                    onChange={(e) => setFormState({...formState, guests: e.target.value})} 
                    className="w-full bg-[#FDFBF7] border border-[#1A0F0A]/10 p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8+ Guests (Event Lounge)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date-input" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Date *</label>
                  <input 
                    id="date-input"
                    type="date" 
                    value={formState.date} 
                    onChange={(e) => setFormState({...formState, date: e.target.value})} 
                    className={`w-full bg-[#FDFBF7] border p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded transition-colors ${
                      errors.date ? 'border-red-400/60' : 'border-[#1A0F0A]/10'
                    }`} 
                  />
                  {errors.date && <p className="text-red-500 text-[11px] mt-1.5 font-medium">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="time-select" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Time *</label>
                  <select 
                    id="time-select"
                    value={formState.time} 
                    onChange={(e) => setFormState({...formState, time: e.target.value})} 
                    className={`w-full bg-[#FDFBF7] border p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded transition-colors ${
                      errors.time ? 'border-red-400/60' : 'border-[#1A0F0A]/10'
                    }`}
                  >
                    <option value="">Select Slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-[11px] mt-1.5 font-medium">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A0F0A]/70">Special Requests (Optional)</label>
                <textarea 
                  id="message-input"
                  rows="3"
                  placeholder="Preferences, allergies, or special requirements..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-[#FDFBF7] border border-[#1A0F0A]/10 p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] rounded"
                />
              </div>

              <button type="submit" className="w-full text-center text-[10px] uppercase tracking-widest font-bold bg-[#1A0F0A] text-[#FDFBF7] py-4.5 hover:bg-[#D4AF37] hover:text-[#1A0F0A] transition-all duration-300 rounded shadow-sm focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2">
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}