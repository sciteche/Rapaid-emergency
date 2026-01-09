import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EmergencyAlert = ({ message = "Always call emergency services if the situation is severe." }) => {
  return (
    <section className="bg-red-100 border-b border-red-300 dark:bg-red-900/30 dark:border-red-700/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center space-x-2 text-red-700 dark:text-red-300">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-sm font-medium">
            {message}
          </span>
        </div>
      </div>
    </section>
  );
};

export default EmergencyAlert;