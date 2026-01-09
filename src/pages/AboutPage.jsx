import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Search,
      title: t('aboutPage.feature.clear.title'),
      description: t('aboutPage.feature.clear.desc'),
      color: 'text-blue-600',
      darkColor: 'dark:text-blue-400',
      darkBg: 'dark:bg-blue-900/30'
    },
    {
      icon: Clock,
      title: t('aboutPage.feature.quick.title'),
      description: t('aboutPage.feature.quick.desc'),
      color: 'text-orange-600',
      darkColor: 'dark:text-orange-400',
      darkBg: 'dark:bg-orange-900/30'
    },
    {
      icon: Heart,
      title: t('aboutPage.feature.evidence.title'),
      description: t('aboutPage.feature.evidence.desc'),
      color: 'text-red-600',
      darkColor: 'dark:text-red-400',
      darkBg: 'dark:bg-red-900/30'
    },
    {
      icon: Shield,
      title: t('aboutPage.feature.supportive.title'),
      description: t('aboutPage.feature.supportive.desc'),
      color: 'text-green-600',
      darkColor: 'dark:text-green-400',
      darkBg: 'dark:bg-green-900/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <section className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              {t('aboutPage.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('aboutPage.missionTitle')}</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  {t('aboutPage.missionText1')}
                </p>
                <p>
                  {t('aboutPage.missionText2')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  
                className="w-full h-auto rounded-2xl shadow-xl"
                alt={t('Medical professionals providing first aid training') || "Medical professionals providing first aid training"}
               src="https://images.unsplash.com/photo-1649260257600-8908e14752c2" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">{t('aboutPage.approachTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              {t('aboutPage.approachSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full card-hover dark:bg-slate-800/60 dark:border-slate-700/50">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-full bg-gray-50 mb-6 ${feature.color} ${feature.darkBg}`}>
                        <IconComponent className={`h-8 w-8 ${feature.darkColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed dark:text-gray-300">
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

      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">{t('aboutPage.contactTitle')}</h2>
            
            <Card className="max-w-2xl mx-auto card-hover dark:bg-slate-800/60 dark:border-slate-700/50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-medium text-gray-900 dark:text-white">{t('aboutPage.contactEmail')}</span>
                    <a 
                      href="mailto:contact@sciteche.com" 
                      className="text-[#7ed957] hover:text-[#7ed957]/80 dark:hover:text-[#6acd49]"
                    >
                      contact@sciteche.com
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('aboutPage.contactText')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50 border-t border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-yellow-800 mb-6 dark:text-yellow-300">{t('aboutPage.disclaimerTitle')}</h2>
            
            <Card className="max-w-4xl mx-auto bg-yellow-100 border-yellow-300 dark:bg-yellow-800/30 dark:border-yellow-700/50">
              <CardContent className="p-8">
                <div className="space-y-4 text-yellow-800 dark:text-yellow-300">
                  <p className="font-medium">
                    {t('aboutPage.disclaimerText1')}
                  </p>
                  <p>
                    {t('aboutPage.disclaimerText2')}
                  </p>
                  <p className="font-medium">
                    {t('aboutPage.disclaimerText3')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;