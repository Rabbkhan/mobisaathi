/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, Twitter, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">MobiSaathi</span>
            </div>
            <p className="text-zinc-500 max-w-xs mb-8">
              Your trusted companion for high-quality, pre-owned smartphones. Quality checked, warranty backed, and eco-friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Brands</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Apple iPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Samsung Galaxy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google Pixel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OnePlus</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-zinc-500 text-xs">
          <p>© 2025 MobiSaathi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
