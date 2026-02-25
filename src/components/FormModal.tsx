/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
}

export const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, formUrl }) => {
  // Ensure the URL has embedded=true if it's a Google Form
  const embeddedUrl = formUrl.includes('viewform') && !formUrl.includes('embedded=true')
    ? `${formUrl}${formUrl.includes('?') ? '&' : '?'}embedded=true`
    : formUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
              <h3 className="text-xl font-bold text-gray-900">Complete the Form</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 w-full bg-gray-50 relative">
              <iframe 
                src={embeddedUrl}
                className="w-full h-full border-none"
                title="Google Form"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
