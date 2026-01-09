import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const GuideProgress = ({ currentStep, totalSteps, severity, getSeverityColor }) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <Badge className={`${getSeverityColor(severity)} px-2.5 py-0.5 text-xs font-semibold`}>
          {severity}
        </Badge>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
        <motion.div 
          className="bg-[#7ed957] h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default GuideProgress;