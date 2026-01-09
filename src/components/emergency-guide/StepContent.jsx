import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StepContent = ({ stepNumber, stepData }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepNumber}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="mb-6 guide-step dark:bg-slate-800/60 dark:border-slate-700/50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-start">
              <span className="guide-step-number w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center mr-4 flex-shrink-0">
                {stepNumber + 1}
              </span>
              {stepData.title}
            </h2>
            
            <div className="mb-6">
              <img 
                className="w-full h-auto max-h-96 object-contain rounded-lg mb-4 bg-gray-100 dark:bg-slate-700 p-2"
                alt={stepData.title}
               src="https://images.unsplash.com/photo-1681150138609-7d57a2bf1601" />
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm italic">
                {stepData.description.split('.')[0]}.
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 whitespace-pre-line">
              {stepData.description}
            </p>

            {stepData.warning && (
              <div className="guide-warning bg-red-50 border border-red-200 dark:bg-red-900/30 dark:border-red-700/50 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Warning</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm">{stepData.warning}</p>
                  </div>
                </div>
              </div>
            )}

            {stepData.tips && stepData.tips.length > 0 && (
              <div className="guide-tips bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Tips</h4>
                <ul className="space-y-1">
                  {stepData.tips.map((tip, index) => (
                    <li key={index} className="text-blue-700 dark:text-blue-400 text-sm flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepContent;