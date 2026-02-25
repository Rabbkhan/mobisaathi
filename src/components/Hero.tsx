/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Zap, ChevronRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 border border-indigo-100">
            <Zap className="w-3 h-3" />
            <span>MobiSaathi — Your Trusted Mobile Companion</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.9] text-gray-900">
            Premium Tech. <br />
            <span className="text-indigo-600">Smart Choice.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-medium">
            We're MobiSaathi, and we're here to change how you buy phones. Get certified pre-owned smartphones with trust, transparency, and top-tier quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onShopClick}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-200"
            >
              Browse Inventory
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#trade-in" className="px-8 py-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all text-center">
              Trade-in Value
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-100 blur-[120px] rounded-full opacity-50" />
          <div className="relative p-4 bg-white rounded-[3.5rem] shadow-2xl shadow-indigo-100 border border-gray-100">
            <img 
              src="https://picsum.photos/seed/refurbished/800/1200" 
              alt="Refurbished Smartphones" 
              className="w-full max-w-[400px] mx-auto rounded-[3rem] shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
