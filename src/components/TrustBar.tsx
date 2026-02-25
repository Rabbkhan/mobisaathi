/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

const BRANDS = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Realme'];

export const TrustBar: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
          Top brands we buy and sell
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {BRANDS.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
