/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Send, Bell } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-200">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-6 border border-white/20 backdrop-blur-sm">
                <Bell className="w-3 h-3" />
                <span>Never miss a deal</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
                Get notified when <br />
                new stock arrives.
              </h2>
              <p className="text-indigo-100 text-lg font-medium max-w-md">
                Join 5,000+ subscribers and get early access to our weekly flash sales and exclusive discounts.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/20">
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white rounded-2xl outline-none text-gray-900 font-medium placeholder:text-gray-400"
                  required
                />
                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-2 group">
                  Subscribe
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
              <p className="mt-4 text-indigo-100/60 text-xs text-center font-medium">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
