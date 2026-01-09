import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const VoiceAssistant = ({ content, isActive = false }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported(
      'speechSynthesis' in window && 'webkitSpeechRecognition' in window
    );
  }, []);

  const speakText = (text) => {
    if (!speechSupported) {
      toast({
        title: "Voice not supported",
        description: "Your browser doesn't support voice features.",
        variant: "destructive"
      });
      return;
    }

    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
      setIsSpeaking(false);
      toast({
        title: "Speech error",
        description: "Unable to speak the text.",
        variant: "destructive"
      });
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const startListening = () => {
    if (!speechSupported) {
      toast({
        title: "Voice not supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive"
      });
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Say 'read' to hear the instructions or 'next' for next step.",
      });
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      
      if (command.includes('read') || command.includes('speak')) {
        speakText(content);
      } else if (command.includes('next')) {
        toast({
          title: "Voice command",
          description: "Moving to next step...",
        });
        // This would trigger next step in parent component
      } else if (command.includes('stop')) {
        stopSpeaking();
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Voice recognition error",
        description: "Please try again.",
        variant: "destructive"
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  if (!isActive) return null;

  return (
    <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg border border-green-200 dark:bg-green-900/30 dark:border-green-700/50">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={isSpeaking ? stopSpeaking : () => speakText(content)}
          className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 dark:border-green-600"
        >
          {isSpeaking ? (
            <>
              <VolumeX className="h-4 w-4 mr-2" />
              Stop
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4 mr-2" />
              Listen
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={startListening}
          disabled={isListening}
          className={`${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:border-red-700' 
              : 'bg-white hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600 dark:hover:bg-slate-600'
          } border-gray-300`}
        >
          {isListening ? (
            <>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <MicOff className="h-4 w-4 mr-2" />
              </motion.div>
              Listening...
            </>
          ) : (
            <>
              <Mic className="h-4 w-4 mr-2" />
              Ask
            </>
          )}
        </Button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        Use voice commands: "read", "next", "stop"
      </div>
    </div>
  );
};

export default VoiceAssistant;