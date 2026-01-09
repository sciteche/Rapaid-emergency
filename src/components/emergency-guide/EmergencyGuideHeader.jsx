import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const EmergencyGuideHeader = ({
  emergencyTitle,
  emergencyEmoji,
  currentStepData,
  speakText,
  stopSpeaking,
  isSpeaking,
  startPageListening,
  isListening,
  openEmergencyDialog,
  onBackLink = "/categories"
}) => {
  return (
    <section className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to={onBackLink} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{emergencyEmoji}</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{emergencyTitle}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">First Aid Guide</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={isSpeaking ? stopSpeaking : () => speakText(`${currentStepData.title}. ${currentStepData.description}`)}
              className={`border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white ${isSpeaking ? 'bg-red-100 dark:bg-red-700 text-red-700 dark:text-white' : 'bg-white dark:bg-slate-700'}`}
            >
              {isSpeaking ? <VolumeX className="h-4 w-4 sm:mr-2" /> : <Volume2 className="h-4 w-4 sm:mr-2" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Stop' : 'Listen'}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={startPageListening}
              disabled={isListening}
              className={`border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white ${isListening ? 'bg-green-100 dark:bg-green-700 text-green-700 dark:text-white animate-pulse' : 'bg-white dark:bg-slate-700'}`}
            >
              {isListening ? <MicOff className="h-4 w-4 sm:mr-2" /> : <Mic className="h-4 w-4 sm:mr-2" />}
              <span className="hidden sm:inline">{isListening ? 'Listening' : 'Ask'}</span>
            </Button>
            <Button 
              className="emergency-button bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600"
              onClick={openEmergencyDialog}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Emergency</span> Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyGuideHeader;