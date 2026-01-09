import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { emergencySteps as allEmergencyStepsData } from '@/data/emergencies'; 
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

import EmergencyGuideHeader from '@/components/emergency-guide/EmergencyGuideHeader';
import EmergencyAlert from '@/components/emergency-guide/EmergencyAlert';
import GuideProgress from '@/components/emergency-guide/GuideProgress';
import VideoPlaceholder from '@/components/emergency-guide/VideoPlaceholder';
import StepContent from '@/components/emergency-guide/StepContent';
import GuideNavigation from '@/components/emergency-guide/GuideNavigation';
import SidebarInfo from '@/components/emergency-guide/SidebarInfo';
import Disclaimer from '@/components/emergency-guide/Disclaimer';

const EmergencyGuidePage = ({ openEmergencyDialog }) => {
  const { t } = useTranslation();
  const { emergencyId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const translateEmergencyData = (data) => {
    if (!data) return null;
    return {
      ...data,
      title: t(data.title) || data.title,
      description: t(data.description) || data.description,
      severity: t(data.severity) || data.severity,
      symptoms: (data.symptoms || []).map(symptom => t(symptom) || symptom),
      steps: (data.steps || []).map(step => ({
        ...step,
        title: t(step.title) || step.title,
        description: t(step.description) || step.description,
      })),
      warnings: (data.warnings || []).map(warning => t(warning) || warning),
      tips: (data.tips || []).map(tip => t(tip) || tip),
      importantInfo: (data.importantInfo || []).map(info => t(info) || info),
    };
  };
  
  const emergencyData = allEmergencyStepsData[emergencyId];
  const emergency = translateEmergencyData(emergencyData);


  useEffect(() => {
    if (!emergency) return;
    setCurrentStep(0); 
    toast({
      title: t('emergencyGuidePage.alertTitle'),
      description: t('emergencyGuidePage.alertDescription'),
      variant: "destructive",
      duration: 5000
    });
  }, [emergencyId, emergency, t]);

  if (!emergency) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center p-8">
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('emergencyGuidePage.notFoundTitle')}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('emergencyGuidePage.notFoundText')}
          </p>
          <Link to="/categories">
            <Button className="bg-[#7ed957] hover:bg-[#6acd49] text-white dark:text-slate-900 dark:bg-[#7ed957] dark:hover:bg-[#6acd49] dark:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('emergencyGuidePage.backToCategories')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextStep = () => {
    if (currentStep < emergency.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = emergency.steps[currentStep];

  const getSeverityColor = (severityKey) => {
    const originalSeverity = emergencyData?.severity || severityKey; 
    switch (originalSeverity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600';
    }
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      toast({ title: "Voice not supported", description: "Your browser doesn't support voice features.", variant: "destructive" });
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = t('languageCode', { ns: 'translation', defaultValue: 'en-US' }); 
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
      setIsSpeaking(false);
      toast({ title: "Speech error", description: "Unable to speak the text.", variant: "destructive" });
    };
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  
  const startPageListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({ title: "Voice not supported", description: "Your browser doesn't support voice recognition.", variant: "destructive" });
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = t('languageCode', { ns: 'translation', defaultValue: 'en-US' });
    recognition.onstart = () => {
      setIsListening(true);
      toast({ title: "Listening...", description: "Say 'read', 'next', 'previous', or 'stop'.", });
    };
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      if (command.includes(t('voiceCommand.read')) || command.includes(t('voiceCommand.speak'))) speakText(`${currentStepData.title}. ${currentStepData.description}`);
      else if (command.includes(t('voiceCommand.next'))) nextStep();
      else if (command.includes(t('voiceCommand.previous')) || command.includes(t('voiceCommand.back'))) prevStep();
      else if (command.includes(t('voiceCommand.stop'))) stopSpeaking();
    };
    recognition.onerror = (event) => {
      setIsListening(false);
      toast({ title: "Voice recognition error", description: `Error: ${event.error}. Please try again.`, variant: "destructive" });
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
      <EmergencyGuideHeader
        emergencyTitle={emergency.title}
        emergencyEmoji={emergency.emoji}
        currentStepData={currentStepData}
        speakText={speakText}
        stopSpeaking={stopSpeaking}
        isSpeaking={isSpeaking}
        startPageListening={startPageListening}
        isListening={isListening}
        openEmergencyDialog={openEmergencyDialog}
      />
      <EmergencyAlert />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <GuideProgress
                currentStep={currentStep}
                totalSteps={emergency.steps.length}
                severity={emergency.severity} 
                getSeverityColor={() => getSeverityColor(emergency.severity)}
              />
              <VideoPlaceholder
                imageSrc={currentStepData.image}
                altText={t('First aid demonstration for {{title}}', { title: currentStepData.title })}
                emergencyTitle={emergency.title}
                videoUrl={emergency.videoUrl}
              />
              <StepContent
                stepNumber={currentStep}
                stepData={currentStepData}
              />
              <GuideNavigation
                currentStep={currentStep}
                totalSteps={emergency.steps.length}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            </div>
            <SidebarInfo emergencyData={emergency} />
          </div>
        </div>
      </section>
      <Disclaimer />
    </div>
  );
};

export default EmergencyGuidePage;