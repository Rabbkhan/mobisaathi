/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from '../types';
import VivoV25 from '../images/vivov25.jpeg';
import OppoA3pro from '../images/oppoa3pro.jpeg';
import OppoReno8T from '../images/OppoReno8T.jpeg';
 import SamsungGalaxyS23Ultra from "../images/sasminggalaxys26ultra.png"
 import Vivoy56 from "../images/vivoy56.jpeg"
  import Vivoy29 from "../images/vivoy29.jpeg"

export const PHONES: Phone[] = [
  {
    id: 'Vivo V25',
    brand: 'Vivo',
    model: 'V25',
    price: '₹13500',
    Discount: '1000',
    condition: 'Mint',
    image: VivoV25,
    images: [
      VivoV25
      // 'https://picsum.photos/seed/pixel7/800/1200',
      // 'https://picsum.photos/seed/pixel7-2/800/1200',
      // 'https://picsum.photos/seed/pixel7-3/800/1200'
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
    features: [
      'Power Full Performance.No Hang Phone',
      'Attractive Selfies With Clear Sharp',
      '8 GB Extended Ram',
      'IP54 Rated'
    ]
  },

  {
    id: 'samsung-s23-ultra',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    price: '₹62,000',
    Discount: '2000',
    condition: 'Excellent',
    image: SamsungGalaxyS23Ultra,
    images: [
 SamsungGalaxyS23Ultra
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
    features: [
      'S-Pen Included',
      '100x Space Zoom',
      '8K Video',
      'IP68 Rated'
    ]
  },

  {
    id: 'oppo-a3-pro',
    brand: 'Oppo',
    model: 'A3 Pro',
    price: '₹10,500',
    Discount: '1000',
    condition: 'Mint',
    image:OppoA3pro,
    images: [
      OppoA3pro
      // 'https://picsum.photos/seed/oppoa3/800/1200',
      // 'https://picsum.photos/seed/oppoa3-2/800/1200',
      // 'https://picsum.photos/seed/oppoa3-3/800/1200'
    ],
    description: 'Second Hand with the incredible 50MP+50MP+2MP camera.',
    Front: '8MP camera.',
    specs: {
      display: '6.67" LCD Display',
      processor: 'Dimensity 6300',
      ram: '8GB',
      storage: '128GB',
      battery: '5100mAh',
    },
    features: [
      'Full HD',
      '120Hz Refresh Rate',
      '45W SuperVOOC'
    ]
  },

  {
    id: 'vivo-y56',
    brand: 'Vivo',
    model: 'Y56',
    price: '₹10,000',
    Discount: '500',
    condition: 'Mint',
    image: Vivoy56,
    images: [
   Vivoy56
    ],
    description: 'Second Hand with the incredible 50MP+2MP camera.',
    Front: '16MP camera.',
    specs: {
      display: '6.58" Full HD+ LCD Display',
      processor: 'Dimensity 7300',
      ram: '8GB',
      storage: '128GB',
      battery: '5000mAh',
    },
    features: [
      'Full HD+ Display'
    ]
  },

  {
    id: 'vivo-y29',
    brand: 'Vivo',
    model: 'Y29',
    price: '₹10,500',
    Discount: '1000',
    condition: 'Mint',
    image: Vivoy29,
    images: [
     Vivoy29
    ],
    description: 'Second Hand with the incredible 50MP camera.',
    Front: '8MP camera.',
    specs: {
      display: '6.68" LCD Display',
      processor: 'Dimensity 6300',
      ram: '6GB',
      storage: '128GB',
      battery: '5500mAh',
    },
    features: [
      'Full HD',
      '120Hz Refresh Rate',
      '44W Fast Charging'
    ]
  },

  // {
  //   id: 'google-pixel-7-pro',
  //   brand: 'Google',
  //   model: 'Pixel 7 Pro',
  //   price: '₹41,000',
  //   Discount: '1500',
  //   condition: 'Like New',
  //   image: 'https://picsum.photos/seed/pixel7/800/1200',
  //   images: [
  //     'https://picsum.photos/seed/pixel7/800/1200',
  //     'https://picsum.photos/seed/pixel7-2/800/1200',
  //     'https://picsum.photos/seed/pixel7-3/800/1200'
  //   ],
  //   description: 'The best of Google AI in a sleek design. Incredible computational photography.',
  //   Front: '10.8MP camera.',
  //   specs: {
  //     display: '6.7" LTPO OLED',
  //     processor: 'Google Tensor G2',
  //     ram: '12GB',
  //     storage: '128GB',
  //     battery: '5000mAh',
  //   },
  //   features: [
  //     'Magic Eraser',
  //     'Real Tone',
  //     'VPN by Google One',
  //     'Titan M2 Security'
  //   ]
  // },

  // {
  //   id: 'iphone-14-pro',
  //   brand: 'Apple',
  //   model: 'iPhone 14 Pro',
  //   price: '₹69,000',
  //   Discount: '3000',
  //   condition: 'Excellent',
  //   image: 'https://picsum.photos/seed/iphone14/800/1200',
  //   images: [
  //     'https://picsum.photos/seed/iphone14/800/1200',
  //     'https://picsum.photos/seed/iphone14-2/800/1200',
  //     'https://picsum.photos/seed/iphone14-3/800/1200'
  //   ],
  //   description: 'Dynamic Island and the A16 Bionic chip.',
  //   Front: '12MP camera.',
  //   specs: {
  //     display: '6.1" Super Retina XDR',
  //     processor: 'A16 Bionic',
  //     ram: '6GB',
  //     storage: '256GB',
  //     battery: '3200mAh',
  //   },
  //   features: [
  //     'Dynamic Island',
  //     'Always-On Display',
  //     'Crash Detection',
  //     'ProRAW Photography'
  //   ]
  // }
  
];
