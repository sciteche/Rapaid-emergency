import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Brain, AlertTriangle, Heart, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { analyzeSymptoms } from '@/lib/gemini';
import { useTranslation } from 'react-i18next';
import { useApiKey } from '@/contexts/ApiKeyContext';

const SymptomCheckerPage = () => {
  const { t } = useTranslation();
  const { apiKey, isConfigured, openModal } = useApiKey();
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    if (!isConfigured) {
      toast({
        title: 'API Key Required',
        description: 'Please configure your Gemini API key to use the Symptom Checker.',
        variant: "destructive"
      });
      openModal();
      return;
    }

    if (!symptoms.trim()) {
      toast({
        title: t('symptomCheckerPage.pleaseEnterSymptomsTitle'),
        description: t('symptomCheckerPage.pleaseEnterSymptomsDesc'),
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      const analysis = await analyzeSymptoms(symptoms, apiKey); 
      
      if (analysis) {
        setResults(analysis); 
        toast({
          title: t('symptomCheckerPage.analysisCompleteTitle'),
          description: t('symptomCheckerPage.analysisCompleteDesc'),
        });
      } else {
        toast({
          title: t('symptomCheckerPage.analysisFailedTitle'),
          description: t('symptomCheckerPage.analysisFailedDesc'),
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to analyze symptoms. Please check your API key and try again.',
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high': return <Heart className="h-5 w-5 text-orange-500" />;
      case 'medium': return <Thermometer className="h-5 w-5 text-yellow-500" />;
      default: return <Brain className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <section className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700 mb-4">
              {t('symptomCheckerPage.aiBadge')}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('symptomCheckerPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('symptomCheckerPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8 dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="dark:text-white">{t('symptomCheckerPage.describeSymptomsTitle')}</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  {t('symptomCheckerPage.describeSymptomsDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder={t('symptomCheckerPage.textareaPlaceholder')}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="min-h-[120px] text-base dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:focus:border-[#7ed957]"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('symptomCheckerPage.detailsPrompt')}
                </p>
                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-[#7ed957] hover:bg-[#7ed957]/90 text-white font-semibold px-8 dark:hover:bg-[#6acd49]"
                >
                  {isAnalyzing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      {t('symptomCheckerPage.analyzingButton')}
                    </>
                  ) : (
                    <>
                      {t('symptomCheckerPage.analyzeButton')}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="mb-8 dark:bg-slate-800 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getSeverityIcon(results.severity)}
                        <div>
                          <CardTitle className="text-xl dark:text-white">{t(results.condition) || results.condition}</CardTitle>
                          <CardDescription className="dark:text-gray-400">
                            {t('symptomCheckerPage.results.confidence', { confidence: results.confidence })}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getSeverityColor(results.severity)}>
                        {t(results.severity) || results.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('symptomCheckerPage.results.relatedSymptoms')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {results.symptoms.map((symptom, index) => (
                          <Badge key={index} variant="outline" className="dark:border-slate-600 dark:text-gray-300">
                            {t(symptom) || symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('symptomCheckerPage.results.firstAidSteps')}</h3>
                      <div className="space-y-3">
                        {results.firstAid.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#7ed957] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{t(step) || step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {results.emergencyId && (
                      <div className="pt-4 border-t dark:border-slate-700">
                        <Button 
                          className="bg-[#020bb5] hover:bg-[#020bb5]/90 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                          onClick={() => window.location.href = `/emergency/${results.emergencyId}`}
                        >
                          {t('symptomCheckerPage.results.viewDetailedGuide')}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {results.severity === 'critical' && (
                  <Card className="border-red-200 bg-red-50 dark:bg-red-900/30 dark:border-red-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">{t('symptomCheckerPage.results.emergencyWarningTitle')}</h3>
                          <p className="text-red-700 dark:text-red-400 mb-4">
                            {t('symptomCheckerPage.results.emergencyWarningText')}
                          </p>
                          <Button className="emergency-button text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
                            {t('symptomCheckerPage.results.callEmergency')}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-yellow-50 dark:bg-yellow-900/30 border-t border-yellow-200 dark:border-yellow-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              {t('symptomCheckerPage.disclaimerTitle')}
            </h3>
            <p className="text-yellow-700 dark:text-yellow-400 max-w-4xl mx-auto">
              {t('symptomCheckerPage.disclaimerText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SymptomCheckerPage;