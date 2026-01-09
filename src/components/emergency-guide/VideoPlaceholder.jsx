import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const VideoPlaceholder = ({ imageSrc, altText, emergencyTitle, videoUrl }) => {
  return (
    <Card className="mb-6 card dark:bg-slate-800/60 dark:border-slate-700/50">
      <CardContent className="p-0">
        <div className="relative bg-gray-900 dark:bg-black rounded-lg overflow-hidden aspect-video">
          <img 
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
            alt={altText}
           src="https://images.unsplash.com/flagged/photo-1565025998428-20c660a9862a" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
              onClick={() => videoUrl && window.open(videoUrl, '_blank')}
              disabled={!videoUrl}
            >
              <Play className="h-6 w-6 mr-2" />
              Play Video
            </Button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Visual guide for {emergencyTitle}. Follow steps carefully.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlaceholder;
