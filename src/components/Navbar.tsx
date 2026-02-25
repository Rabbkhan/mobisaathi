/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavigate: (view: 'home' | 'shop') => void;
  onOpenForm: (url: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, onNavigate, onOpenForm }) => {
  const sellPhoneUrl = "https://docs.google.com/forms/d/e/1FAIpQLScxfOTUJUJimKiUjqeoBgwl_amkOpI4GW8Pc3wNzoX5XQAHMg/viewform";

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">MobiSaathi</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Home</button>
            <button onClick={() => onNavigate('shop')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Shop</button>
            <a href="#trade-in" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Trade-in</a>
            <button 
              onClick={() => onOpenForm(sellPhoneUrl)}
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
            >
              Sell Your Phone
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold text-gray-900">
              <button onClick={() => onNavigate('home')} className="text-left">Home</button>
              <button onClick={() => onNavigate('shop')} className="text-left">Shop</button>
              <a href="#trade-in" onClick={() => setIsMenuOpen(false)}>Trade-in</a>
              <button 
                onClick={() => { onOpenForm(sellPhoneUrl); setIsMenuOpen(false); }}
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-center"
              >
                Sell Your Phone
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
