/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from '../types';

export const PHONES: Phone[] = [
  {
    id: 'Vivo V25',
    brand: 'Vivo',
    model: 'V25',
    price: '₹13500',
    Discount: '1000',
    condition: 'Mint',
    image: 'https://picsum.photos/seed/s23/800/1200',
    images: [
      'https://picsum.photos/seed/pixel7/800/1200',
      'https://picsum.photos/seed/pixel7-2/800/1200',
      'https://picsum.photos/seed/pixel7-3/800/1200'
    ],
    description: 'Second Hand with the incredible 64MP+8MP+2MP',
    Front: '50MP camera.',
    specs: {
      display: '6.44" Full HD+ AMOLED',
      processor: 'Dimensity 900',
      ram: '12GB',
      storage: '256GB',
      battery: '4500mAh',
    },
    features: ['Power Full Performance.No Hang Phone', 'Attractive Selfies With Clear Sharp', '8 GB Extended Ram', 'IP54 Rated']
  },
  {
    id: 'samsung-s23-ultra',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    price: '₹62,000',
    Discount: '2000',
    condition: 'Excellent',
    image: 'https://picsum.photos/seed/s23/800/1200',
    images: [
      'https://picsum.photos/seed/s23/800/1200',
      'https://picsum.photos/seed/s23-2/800/1200',
      'https://picsum.photos/seed/s23-3/800/1200'
    ],
    description: 'Refurbished flagship with the incredible 200MP camera and S-Pen support.',
    Front: '12MP camera.',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 2',
      ram: '12GB',
      storage: '256GB',
      battery: '5000mAh',
    },
    features: ['S-Pen Included', '100x Space Zoom', '8K Video', 'IP68 Rated']
  },
  {
    id: 'google-pixel-7-pro',
    brand: 'Google',
    model: 'Pixel 7 Pro',
    price: '₹41,000',
    Discount: '1500',
    condition: 'Like New',
    image: 'https://picsum.photos/seed/pixel7/800/1200',
    images: [
      'https://picsum.photos/seed/pixel7/800/1200',
      'https://picsum.photos/seed/pixel7-2/800/1200',
      'https://picsum.photos/seed/pixel7-3/800/1200'
    ],
    description: 'The best of Google AI in a sleek design. Incredible computational photography.',
    Front: '10.8MP camera.',
    specs: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G2',
      ram: '12GB',
      storage: '128GB',
      battery: '5000mAh',
    },
    features: ['Magic Eraser', 'Real Tone', 'VPN by Google One', 'Titan M2 Security']
  },
  {
    id: 'iphone-14-pro',
    brand: 'Apple',
    model: 'iPhone 14 Pro',
    price: '₹69,000',
    Discount: '3000',
    condition: 'Excellent',
    image: 'https://picsum.photos/seed/iphone14/800/1200',
    images: [
      'https://picsum.photos/seed/iphone14/800/1200',
      'https://picsum.photos/seed/iphone14-2/800/1200',
      'https://picsum.photos/seed/iphone14-3/800/1200'
    ],
    description: 'Dynamic Island and the A16 Bionic chip. A pro-grade experience at a pre-owned price.',
    Front: '12MP camera.',
    specs: {
      display: '6.1" Super Retina XDR',
      processor: 'A16 Bionic',
      ram: '6GB',
      storage: '256GB',
      battery: '3200mAh',
    },
    features: ['Dynamic Island', 'Always-On Display', 'Crash Detection', 'ProRAW Photography']
  }
];
