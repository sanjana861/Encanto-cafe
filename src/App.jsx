import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonial';
import ReservationForm from './components/ReservationForm';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A0F0A] flex flex-col font-sans selection:bg-[#D4AF37]/20 antialiased overflow-x-hidden">
      {/* Sticky Premium Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Why Choose Us / Philosophy Section */}
        <WhyChooseUs />

        {/* Tabbed Specialty Menu Section */}
        <MenuSection />

        {/* Space & Rituals Gallery Section */}
        <Gallery />

        {/* Verified Customer Reviews Section */}
        <Testimonials />

        {/* Table Reservation Section */}
        <ReservationForm />

        {/* Frequently Answered Inquiries Section */}
        <Faq />

        {/* Contact Coordinates & Map Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
