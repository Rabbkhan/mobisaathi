/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Battery, 
  Camera, 
  Shield, 
  Zap, 
  Smartphone,
  ShieldCheck,
  RefreshCw,
  Truck,
  ChevronRight
} from 'lucide-react';

import { Phone } from './types';
import { PHONES } from './data/phones';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhoneCard } from './components/PhoneCard';
import { PhoneDetails } from './components/PhoneDetails';
import { FeatureCard } from './components/FeatureCard';
import { Footer } from './components/Footer';
import { TradeInEstimator } from './components/TradeInEstimator';
import { TrustBar } from './components/TrustBar';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { FloatingChat } from './components/FloatingChat';
import { Shop } from './components/Shop';
import { FormModal } from './components/FormModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [view, setView] = useState<'home' | 'shop'>('home');
  const [formUrl, setFormUrl] = useState<string | null>(null);

  const openForm = (url: string) => {
    setFormUrl(url);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <AnimatePresence>
        {selectedPhone && (
          <PhoneDetails 
            phone={selectedPhone} 
            onBack={() => setSelectedPhone(null)} 
            onOpenForm={openForm}
          />
        )}
      </AnimatePresence>

      <FormModal 
        isOpen={!!formUrl} 
        onClose={() => setFormUrl(null)} 
        formUrl={formUrl || ''} 
      />

      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        onNavigate={(v) => { setView(v); setIsMenuOpen(false); window.scrollTo(0, 0); }}
        onOpenForm={openForm}
      />

      {view === 'home' ? (
        <>
          <Hero onShopClick={() => setView('shop')} />
          
          <TrustBar />

          {/* Featured Inventory Section */}
          <section id="collection" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Featured Inventory</h2>
                  <p className="text-gray-500 font-medium">Hand-picked, quality-tested devices ready for a second life.</p>
                </div>
                <button 
                  onClick={() => { setView('shop'); window.scrollTo(0, 0); }}
                  className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                >
                  View All Products
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PHONES.slice(0, 4).map((phone) => (
                  <PhoneCard 
                    key={phone.id} 
                    phone={phone} 
                    onSelect={setSelectedPhone} 
                  />
                ))}
              </div>
              <button 
                onClick={() => { setView('shop'); window.scrollTo(0, 0); }}
                className="w-full mt-12 py-4 bg-gray-100 text-gray-900 font-bold rounded-2xl md:hidden"
              >
                View All Products
              </button>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Why choose MobiSaathi?</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">We're on a mission to make premium technology accessible to everyone while reducing electronic waste.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                  icon={<ShieldCheck className="w-6 h-6" />}
                  title="Certified Quality"
                  description="Every device undergoes a 40-point inspection by our expert technicians."
                  delay={0.1}
                />
                <FeatureCard 
                  icon={<RefreshCw className="w-6 h-6" />}
                  title="Eco-Friendly Choice"
                  description="Buying refurbished reduces e-waste and saves up to 80% of the carbon footprint of a new phone."
                  delay={0.2}
                />
                <FeatureCard 
                  icon={<Truck className="w-6 h-6" />}
                  title="Free Shipping"
                  description="Next-day delivery on all orders over ₹15,000. Securely packaged."
                  delay={0.3}
                />
                <FeatureCard 
                  icon={<Battery className="w-6 h-6" />}
                  title="Battery Health"
                  description="We guarantee at least 85% battery health on every single device."
                  delay={0.4}
                />
              </div>
            </div>
          </section>
          
          <Testimonials />

          <TradeInEstimator onOpenForm={openForm} />
          
          <FAQ />
        </>
      ) : (
        <Shop onSelectPhone={setSelectedPhone} />
      )}

      <Newsletter />

      <Footer />
      
      <FloatingChat />
    </div>
  );
}
