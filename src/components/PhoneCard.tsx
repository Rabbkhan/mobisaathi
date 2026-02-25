/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { Phone } from '../types';

interface PhoneCardProps {
  phone: Phone;
  onSelect: (phone: Phone) => void;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone, onSelect }) => {
  return (
    <motion.div 
      layoutId={`card-${phone.id}`}
      className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-500"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <motion.img 
          layoutId={`image-${phone.id}`}
          src={phone.image} 
          alt={`${phone.brand} ${phone.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900 border border-gray-100 shadow-sm">
            {phone.brand}
          </span>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
            phone.condition === 'Like New' || phone.condition === 'Mint' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
            'bg-indigo-50 text-indigo-600 border-indigo-100'
          }`}>
            {phone.condition}
          </span>
          {phone.Discount && (
            <span className="px-3 py-1 bg-rose-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
              -₹{phone.Discount}
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{phone.model}</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-tighter">{phone.brand}</p>
          </div>
          <span className="text-indigo-600 font-bold text-lg">{phone.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 h-10 font-medium">{phone.description}</p>
        
        <div className="flex items-center gap-2 mb-6 text-[10px] text-gray-500 font-bold uppercase">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>6-Month Warranty Included</span>
        </div>

        <button 
          onClick={() => onSelect(phone)}
          className="w-full py-3 bg-gray-50 hover:bg-indigo-600 hover:text-white text-gray-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn border border-gray-100"
        >
          View Details
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
