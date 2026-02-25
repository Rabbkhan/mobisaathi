/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, CheckCircle2, MessageSquare, Cpu, Battery, Smartphone, ChevronRight, ChevronLeft } from 'lucide-react';
import { Phone } from '../types';

interface PhoneDetailsProps {
  phone: Phone;
  onBack: () => void;
  onOpenForm: (url: string) => void;
}

export const PhoneDetails: React.FC<PhoneDetailsProps> = ({ phone, onBack, onOpenForm }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // 1. Get your pre-filled link from Google Forms
  // 2. Find the numbers after "entry." (e.g., entry.123456789)
  // 3. Replace the numbers below with your actual IDs
  const ENTRY_IDS = {
    MODEL: 'MODEL_ID',     // Replace with your actual ID number
    PRICE: 'PRICE_ID',     // Replace with your actual ID number
    BRAND: 'BRAND_ID',     // Replace with your actual ID number
    CONDITION: 'COND_ID'   // Replace with your actual ID number
  };

  const formBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLScxfOTUJUJimKiUjqeoBgwl_amkOpI4GW8Pc3wNzoX5XQAHMg/viewform";
  const prefilledUrl = `${formBaseUrl}?usp=pp_url` + 
    `&entry.${ENTRY_IDS.MODEL}=${encodeURIComponent(phone.model)}` + 
    `&entry.${ENTRY_IDS.PRICE}=${encodeURIComponent(phone.price)}` + 
    `&entry.${ENTRY_IDS.BRAND}=${encodeURIComponent(phone.brand)}` +
    `&entry.${ENTRY_IDS.CONDITION}=${encodeURIComponent(phone.condition)}`;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % phone.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + phone.images.length) % phone.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-white overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-12 font-bold group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-12 space-y-6">
            <div className="relative rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl shadow-indigo-100 group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={phone.images[activeImageIndex]} 
                  alt={`${phone.model} - view ${activeImageIndex + 1}`}
                  className="w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {phone.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {phone.images.length > 1 && (
              <div className="flex gap-4 justify-center">
                {phone.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-indigo-600 scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100">
                  {phone.brand}
                </span>
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
                  {phone.condition}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-4 leading-tight">
                {phone.model}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                {phone.description}
              </p>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="flex flex-col">
                  <div className="text-5xl font-extrabold text-indigo-600">{phone.price}</div>
                  {phone.Discount && (
                    <div className="text-emerald-600 text-sm font-bold">
                      Save ₹{phone.Discount} instantly
                    </div>
                  )}
                </div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                  Free Express Shipping
                </div>
              </div>
              
              <button 
                onClick={() => onOpenForm(prefilledUrl)}
                className="inline-flex w-full md:w-auto px-12 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Contact to Purchase
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="mt-4 text-gray-400 text-xs font-medium">
                * Clicking will open our inquiry form. We'll get back to you within 2 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Display</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.specs.display}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Cpu className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Processor</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.specs.processor}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Front Camera</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.Front || 'N/A'}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Battery className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Battery</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.specs.battery}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">RAM</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.specs.ram}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Storage</h3>
                </div>
                <p className="text-lg font-bold text-gray-900">{phone.specs.storage}</p>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100">
              <h3 className="text-xl font-extrabold text-indigo-900 mb-6">The MobiSaathi Promise</h3>
              <div className="grid gap-4">
                {phone.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-indigo-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    <span>{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-indigo-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Eco-friendly choice (Reduces E-waste)</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>30-Point Quality Check Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
