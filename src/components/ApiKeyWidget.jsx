import React, { useState } from 'react';
import { useApiKey } from '@/contexts/ApiKeyContext';
import { Settings, ChevronRight } from 'lucide-react';

const ApiKeyWidget = () => {
  const { isConfigured, openModal } = useApiKey();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed right-0 bottom-20 z-40 transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
      {/* Expandable Widget */}
      <div className={`bg-white dark:bg-slate-900 shadow-lg rounded-l-xl border-l border-t border-b border-gray-200 dark:border-slate-700 ${isExpanded ? 'p-4' : 'p-4'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full flex items-center justify-between gap-3 ${!isExpanded ? 'justify-center' : ''}`}
        >
          <div className={`flex items-center ${!isExpanded ? 'justify-center' : ''}`}>
            <div className={`p-2 rounded-lg bg-gradient-to-br from-[#7ed957] to-green-600 text-white ${!isExpanded ? 'w-full' : ''}`}>
              <Settings className="h-5 w-5" />
            </div>
            {isExpanded && (
              <span className="ml-3 font-semibold text-gray-900 dark:text-white text-sm">
                {isConfigured ? 'API Key ✓' : 'API Key'}
              </span>
            )}
          </div>
          {isExpanded && <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 space-y-3">
            <div>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Status</p>
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${isConfigured ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {isConfigured ? 'Configured' : 'Not Set'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                openModal();
                setIsExpanded(false);
              }}
              className="w-full bg-gradient-to-r from-[#7ed957] to-green-600 hover:from-[#6bc946] hover:to-green-700 text-white font-semibold py-2 rounded-lg text-sm transition-all"
            >
              {isConfigured ? 'Update Key' : 'Add Key'}
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Click to configure AI features
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiKeyWidget;
