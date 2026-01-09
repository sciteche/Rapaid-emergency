import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GuideNavigation = ({ currentStep, totalSteps, prevStep, nextStep }) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        onClick={prevStep}
        disabled={currentStep === 0}
        className="flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 dark:text-white"
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Step {currentStep + 1} of {totalSteps}
      </div>

      <Button
        onClick={nextStep}
        disabled={currentStep === totalSteps - 1}
        className="bg-[#7ed957] hover:bg-[#6acd49] text-white dark:text-slate-900 dark:bg-[#7ed957] dark:hover:bg-[#6acd49] dark:text-white flex items-center"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default GuideNavigation;