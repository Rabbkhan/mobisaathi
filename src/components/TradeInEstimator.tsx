/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const BRAND_MODELS: Record<string, string[]> = {
  'Apple': [
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini',
    'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 11'
  ],
  'Samsung': [
    'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24',
    'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23',
    'Galaxy Z Fold 5', 'Galaxy Z Flip 5',
    'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22',
    'Galaxy A54', 'Galaxy A34'
  ],
  'Google': [
    'Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro', 'Pixel 7', 'Pixel 7a',
    'Pixel 6 Pro', 'Pixel 6', 'Pixel 6a'
  ],
  'OnePlus': [
    'OnePlus 12', 'OnePlus 12R', 'OnePlus 11', 'OnePlus 10 Pro',
    'OnePlus Nord 3', 'OnePlus Nord CE 3'
  ],
  'Oppo': [
    'Find X7 Ultra', 'Find X7', 'Find N3 Flip', 'Find N3',
    'Reno 11 Pro', 'Reno 11', 'Reno 10 Pro+', 'Reno 10'
  ],
  'Vivo': [
    'X100 Pro', 'X100', 'V30 Pro', 'V30', 'V29 Pro', 'V29',
    'Y200', 'Y100'
  ],
  'Xiaomi': [
    'Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13 Ultra', 'Xiaomi 13 Pro',
    'Redmi Note 13 Pro+', 'Redmi Note 13', 'Poco F5 Pro', 'Poco X6 Pro'
  ],
  'Realme': [
    'GT 5 Pro', 'GT 5', 'Realme 12 Pro+', 'Realme 12',
    'Realme 11 Pro+', 'Realme 11'
  ]
};

interface TradeInEstimatorProps {
  onOpenForm: (url: string) => void;
}

export const TradeInEstimator: React.FC<TradeInEstimatorProps> = ({ onOpenForm }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEstimate = async () => {
    if (!brand || !model) return;

    setLoading(true);
    setError(null);
    setEstimate(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Estimate the current second-hand market trade-in value in Indian Rupees (INR) for a ${brand} ${model} in "Excellent" condition in the Indian market. 
        Return ONLY the numeric value as a single integer. Do not include any text, symbols, or commas. 
        Example: 45000`,
      });

      const text = response.text?.trim();
      const price = parseInt(text || '0', 10);

      if (isNaN(price) || price === 0) {
        throw new Error("Could not calculate a valid price.");
      }

      setEstimate(price);
    } catch (err) {
      console.error("Estimation error:", err);
      setError("Failed to get a real-time estimate. Please try again.");
      // Fallback to a basic calculation if AI fails (Approximate INR values)
      const fallback = brand === 'Apple' ? 35000 : brand === 'Samsung' ? 25000 : 15000;
      setEstimate(fallback);
    } finally {
      setLoading(false);
    }
  };

  // Reset model when brand changes
  useEffect(() => {
    setModel('');
    setEstimate(null);
  }, [brand]);

  return (
    <section id="trade-in" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 border border-indigo-100">
              <Calculator className="w-3 h-3" />
              <span>AI-Powered Valuation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-gray-900">
              What's your old phone worth?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Get a real-time market estimate powered by Gemini AI. We match current second-hand market values to ensure you get the best price.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Real-time market price matching</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Transparent AI-driven estimates</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Free shipping label provided</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Select Brand</label>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Choose Brand</option>
                  {Object.keys(BRAND_MODELS).map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Select Model</label>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium disabled:opacity-50"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={!brand}
                >
                  <option value="">{brand ? 'Choose Model' : 'Select a brand first'}</option>
                  {brand && BRAND_MODELS[brand].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={handleEstimate}
                disabled={!brand || !model || loading}
                className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Calculating Market Value...
                  </>
                ) : (
                  <>
                    Get AI Estimate
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-500 text-sm font-medium text-center">{error}</p>
              )}

              {estimate !== null && !loading && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl text-center"
                >
                  <p className="text-emerald-800 text-sm font-bold uppercase tracking-widest mb-2">Estimated Market Value</p>
                  <div className="text-5xl font-extrabold text-emerald-600 mb-4">₹{estimate.toLocaleString('en-IN')}</div>
                  <p className="text-emerald-700 text-xs font-medium mb-4">Based on current second-hand market trends in India for {brand} {model}</p>
                  {/* Replace entry.BRAND_ID, entry.MODEL_ID, etc. with your actual Google Form entry IDs */}
                  <button 
                    onClick={() => onOpenForm(`https://docs.google.com/forms/d/e/1FAIpQLScxfOTUJUJimKiUjqeoBgwl_amkOpI4GW8Pc3wNzoX5XQAHMg/viewform?usp=pp_url&entry.BRAND_ID=${encodeURIComponent(brand)}&entry.MODEL_ID=${encodeURIComponent(model)}&entry.ESTIMATE_ID=${encodeURIComponent('₹' + estimate)}`)}
                    className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Lock in this price →
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
