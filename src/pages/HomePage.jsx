import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, Heart, Shield, Zap, Globe, Mic, BookOpen, Brain, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { emergencyCategories, commonEmergencies } from '@/data/emergencies';
import { useTranslation } from 'react-i18next';
import { languages } from '@/lib/i18n.js';
import { useSearch } from '@/contexts/SearchContext.jsx';

const HomePage = ({ openEmergencyDialog }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { setSearchQuery: setGlobalSearchQuery } = useSearch();
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setGlobalSearchQuery(localSearchQuery);
    navigate(`/search?q=${encodeURIComponent(localSearchQuery)}`);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const features = [
    {
      icon: BookOpen,
      title: t('feature.stepByStep'),
      description: t('feature.stepByStepDesc'),
      color: 'text-blue-600 dark:text-blue-400',
      darkBg: 'dark:bg-blue-900/30'
    },
    {
      icon: Globe,
      title: t('feature.offline'),
      description: t('feature.offlineDesc'),
      color: 'text-red-600 dark:text-red-400',
      darkBg: 'dark:bg-red-900/30'
    },
    {
      icon: Mic,
      title: t('feature.voice'),
      description: t('feature.voiceDesc'),
      color: 'text-green-600 dark:text-green-400',
      darkBg: 'dark:bg-green-900/30'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7ed957]/10 via-white to-[#020bb5]/10 dark:from-[#7ed957]/5 dark:via-slate-900 dark:to-[#020bb5]/5">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-[#7ed957]/10 text-[#7ed957] border-[#7ed957]/20 dark:bg-[#7ed957]/20 dark:text-[#7ed957]">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero.title').split('Your Fingertips')[0]}
                <span className="bg-gradient-to-r from-[#7ed957] to-[#020bb5] bg-clip-text text-transparent">
                  {t('hero.title').includes('Your Fingertips') ? "Your Fingertips" : t('hero.title').split(' ').pop()}
                </span>
                 {t('hero.title').split('Your Fingertips')[1]}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories">
                <Button className="bg-[#7ed957] hover:bg-[#7ed957]/90 text-white font-semibold px-8 py-3 text-lg">
                  {t('hero.explore')}
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-[#ff3131] text-[#ff3131] hover:bg-[#ff3131] hover:text-white font-semibold px-8 py-3 text-lg dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white"
                onClick={openEmergencyDialog}
              >
                <Phone className="h-5 w-5 mr-2" />
                {t('hero.emergencyBtn')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
              <Input
                type="text"
                placeholder={t('search.placeholder')}
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-[#7ed957] rounded-xl dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-[#7ed957]"
              />
               <Button type="submit" variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('commonEmergencies.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('commonEmergencies.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {commonEmergencies.map((emergency, index) => (
              <motion.div
                key={emergency.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/emergency/${emergency.id}`}>
                  <Card className="card-hover cursor-pointer h-full dark:bg-slate-700/60 dark:border-slate-600/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{emergency.emoji}</div>
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{t(emergency.name) || emergency.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('categories.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('categories.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/category/${category.id}`}>
                  <Card className={`card-hover cursor-pointer h-full ${category.color} dark:bg-slate-800/60 dark:border-slate-700/50`}>
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{category.emoji}</div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {t(category.name) || category.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {t(category.description) || category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full group dark:text-gray-300 dark:hover:bg-slate-700">
                        {t('categoriesPage.viewCategory')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/categories">
              <Button variant="outline" size="lg" className="border-[#7ed957] text-[#7ed957] hover:bg-[#7ed957] hover:text-white dark:border-[#7ed957] dark:text-[#7ed957] dark:hover:bg-[#7ed957] dark:hover:text-slate-900">
                {t('categories.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900/80 dark:to-slate-800/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <Card className="p-6 sm:p-8 rounded-xl shadow-xl bg-white dark:bg-slate-800/70 dark:border-slate-700/60">
              <div className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{t('symptomChecker.commonSymptoms')}</h3>
                <div className="flex flex-wrap gap-2">
                  {['Chest Pain', 'Difficulty Breathing', 'Severe Headache', 'Unconsciousness', 'High Fever'].map((symptom) => (
                    <Badge key={symptom} variant="outline" className="bg-gray-100 text-gray-700 border-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600 text-sm px-3 py-1">
                      {t(symptom) || symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 sm:p-6 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white">
                      {t('symptomChecker.possibleCondition')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {t('symptomChecker.conditionDetail')}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full text-green-600 border-green-500 hover:bg-green-100 dark:text-green-400 dark:border-green-600 dark:hover:bg-green-800/50">
                  {t('symptomChecker.viewGuide')}
                </Button>
              </div>
            </Card>

            <div className="text-center lg:text-left">
              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-700/50 mb-4 py-1 px-3">
                <Brain className="inline-block h-4 w-4 mr-2" /> {t('symptomChecker.aiBadge')}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('symptomChecker.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                {t('symptomChecker.subtitle')}
              </p>
              <Link to="/symptom-checker">
                <Button className="bg-[#7ed957] hover:bg-[#6acd49] text-gray-900 font-semibold px-8 py-3 text-lg dark:bg-[#7ed957] dark:hover:bg-[#6acd49] dark:text-white">
                  {t('symptomChecker.checkNow')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`text-center h-full card-hover dark:bg-slate-800/60 dark:border-slate-700/50 ${feature.darkBg ? feature.darkBg.replace('dark:bg-', 'bg-opacity-30 ') : ''}`}>
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-full bg-gray-100 dark:bg-slate-700/50 mb-6 ${feature.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('multiLanguage.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('multiLanguage.subtitle')}
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Globe className="h-6 w-6 text-[#7ed957]" />
              <div className="flex items-center space-x-2 flex-wrap justify-center gap-2">
                {languages.map(lang => (
                  <Button 
                    key={lang.code} 
                    variant={i18n.language === lang.code ? "default" : "outline"}
                    onClick={() => changeLanguage(lang.code)}
                    className={`dark:border-slate-600 dark:text-gray-300 ${i18n.language === lang.code ? 'bg-[#7ed957] text-white dark:bg-[#7ed957] dark:text-white' : 'dark:hover:bg-slate-700'}`}
                  >
                    {lang.flag} {lang.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;