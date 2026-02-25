/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Smartphone, X } from 'lucide-react';
import { PHONES } from '../data/phones';
import { PhoneCard } from './PhoneCard';
import { Phone } from '../types';

interface ShopProps {
  onSelectPhone: (phone: Phone) => void;
}

export const Shop: React.FC<ShopProps> = ({ onSelectPhone }) => {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brands = Array.from(new Set(PHONES.map(p => p.brand)));

  const filteredPhones = PHONES.filter(p => {
    const matchesSearch = p.model.toLowerCase().includes(search.toLowerCase()) || 
                         p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-4">
              Explore Inventory
            </h1>
            <p className="text-gray-600 text-lg font-medium max-w-md">
              Browse our complete collection of certified pre-owned devices.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
              />
            </div>
            <div className="relative">
              <select 
                value={selectedBrand || ''}
                onChange={(e) => setSelectedBrand(e.target.value || null)}
                className="w-full sm:w-48 px-6 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-bold appearance-none cursor-pointer"
              >
                <option value="">All Brands</option>
                {brands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {selectedBrand && (
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Filter:</span>
            <button 
              onClick={() => setSelectedBrand(null)}
              className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              {selectedBrand}
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {filteredPhones.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPhones.map((phone) => (
              <PhoneCard 
                key={phone.id} 
                phone={phone} 
                onSelect={onSelectPhone} 
              />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No devices found</h3>
            <p className="text-gray-500 font-medium">Try adjusting your search or filters.</p>
            <button 
              onClick={() => {setSearch(''); setSelectedBrand(null);}}
              className="mt-8 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
