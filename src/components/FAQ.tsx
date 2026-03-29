/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "What does 'Certified Refurbished' mean?",
    answer: "Every device at SecondLife undergoes a rigorous 40-point inspection by our expert technicians. We test everything from battery health to screen responsiveness and internal hardware to ensure it meets our high standards."
  },
  {
    question: "How quickly will I receive my phone?",
    answer: "We process and ship orders within 24–48 hours. Depending on your location, your device will arrive promptly via our trusted courier partners."
  },
  {
    question: "What is the typical battery health?",
    answer: "We guarantee that every phone we sell has at least 85% battery health. If a battery falls below this threshold during our testing, we replace it with a brand new one."
  },
  {
    question: "How does the trade-in process work?",
    answer: "Simply use our AI-powered estimator to get a quote. If you accept, we'll send you a free shipping label. Once we receive and inspect your device, we'll send your payment within 24 hours."
  },
  {
    question: "Are the phones unlocked?",
    answer: "Yes, all phones sold on SecondLife are factory unlocked and will work with any carrier in India and worldwide."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Everything you need to know about buying refurbished.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
