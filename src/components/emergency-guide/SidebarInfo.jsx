import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, AlertTriangle, Play } from 'lucide-react';

const SidebarInfo = ({ emergencyData }) => {
  if (!emergencyData) return null;

  const { importantInfo = [], estimatedTime, severity, videoUrl } = emergencyData;

  return (
    <div className="space-y-6">
      {importantInfo.length > 0 && (
        <Card className="card dark:bg-slate-800/60 dark:border-slate-700/50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Important Information</h3>
            <div className="space-y-3">
              {importantInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#7ed957] rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{info}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card dark:bg-slate-800/60 dark:border-slate-700/50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Emergency Details</h3>
          <div className="space-y-3">
            {estimatedTime && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Estimated time: {estimatedTime}
                </span>
              </div>
            )}
            {severity && (
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Severity: <span className={`font-medium ${
                    severity === 'critical' ? 'text-red-500 dark:text-red-400' :
                    severity === 'high' ? 'text-orange-500 dark:text-orange-400' :
                    severity === 'medium' ? 'text-yellow-500 dark:text-yellow-400' :
                    'text-green-500 dark:text-green-400'
                  }`}>{severity}</span>
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {videoUrl && (
        <Card className="card dark:bg-slate-800/60 dark:border-slate-700/50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Educational Video</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Watch a detailed video demonstration of this first aid procedure.
            </p>
            <Button 
              variant="outline" 
              className="w-full dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 dark:text-white"
              onClick={() => window.open(videoUrl, '_blank')}
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Video
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SidebarInfo;