/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Tech Enthusiast",
    content: "Bought an iPhone 14 Pro. It looks and feels brand new. The battery health was 98%, which exceeded my expectations for a refurbished device.",
    rating: 5,
    avatar: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Priya Patel",
    role: "Student",
    content: "MobiSaathi is a lifesaver. Got a Pixel 7 Pro at almost half the price. The trade-in process for my old phone was seamless and fair.",
    rating: 5,
    avatar: "https://picsum.photos/seed/priya/100/100"
  },
  {
    name: "Ankit Verma",
    role: "Freelancer",
    content: "Excellent service and fast delivery. The 40-point inspection really gives peace of mind. Highly recommended for anyone looking for quality tech on a budget.",
    rating: 4,
    avatar: "https://picsum.photos/seed/ankit/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-gray-900">
            What our customers say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Join our growing community of smart buyers who save money without compromising on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-indigo-100 group-hover:text-indigo-200 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
