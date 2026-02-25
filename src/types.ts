/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Phone {
  id: string;
  brand: string;
  model: string;
  price: string;
  Discount?: string;
  condition: string;
  image: string;
  images: string[];
  description: string;
  Front?: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
  };
  features: string[];
}
