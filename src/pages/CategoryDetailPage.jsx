import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { emergencyCategories } from '@/data/emergencies';
import { useTranslation } from 'react-i18next';

const CategoryDetailPage = () => {
  const { t } = useTranslation();
  const { categoryId } = useParams();
  const categoryData = emergencyCategories.find(cat => cat.id === categoryId);

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center p-8 card dark:bg-slate-800/60 dark:border-slate-700/50">
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('categoryDetailPage.notFoundTitle')}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('categoryDetailPage.notFoundText')}
          </p>
          <Link to="/categories">
            <Button className="bg-[#7ed957] hover:bg-[#6acd49] text-white dark:text-slate-900 dark:bg-[#7ed957] dark:hover:bg-[#6acd49] dark:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('categoryDetailPage.back')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const category = {
    ...categoryData,
    name: t(categoryData.name) || categoryData.name,
    description: t(categoryData.description) || categoryData.description,
    emergencies: categoryData.emergencies.map(em => ({
      ...em,
      name: t(em.name) || em.name,
      // Assuming severity is a key like 'critical', 'high' etc. and can be translated if needed
      severity: t(em.severity) || em.severity 
    }))
  };


  const getSeverityColorClasses = (severityKey) => {
    // Use original severity key for logic, display translated severity
    const originalSeverity = categoryData.emergencies.find(e => (t(e.severity) || e.severity) === severityKey)?.severity || severityKey;
    switch (originalSeverity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600';
    }
  };
  
  const getSeverityIcon = (severityKey) => {
    const iconClasses = "h-4 w-4";
    const originalSeverity = categoryData.emergencies.find(e => (t(e.severity) || e.severity) === severityKey)?.severity || severityKey;
    if (originalSeverity === 'critical' || originalSeverity === 'high') {
      return <AlertTriangle className={`${iconClasses} text-red-500 dark:text-red-400`} />;
    }
    return <Clock className={`${iconClasses} text-gray-500 dark:text-gray-400`} />;
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950">
      <section className="bg-white dark:bg-slate-800/50 dark:border-b dark:border-slate-700/50 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/categories" className="inline-flex items-center text-[#7ed957] hover:text-[#7ed957]/80 mb-6 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('categoryDetailPage.back')}
            </Link>

            <div className="text-center">
              <div className="text-6xl mb-4">{category.emoji}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t('categoryDetailPage.guidesCount', { count: category.emergencies.length })}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('categoryDetailPage.selectGuide')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.emergencies.map((emergency, index) => (
              <motion.div
                key={emergency.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/emergency/${emergency.id}`}>
                  <Card className="card-hover cursor-pointer h-full dark:bg-slate-800/60 dark:border-slate-700/50">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-3xl">{emergency.emoji}</div>
                        <Badge className={`px-2.5 py-0.5 text-xs font-semibold ${getSeverityColorClasses(emergency.severity)}`}>
                          <div className="flex items-center space-x-1">
                            {getSeverityIcon(emergency.severity)}
                            <span className="capitalize">{emergency.severity}</span>
                          </div>
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {emergency.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 min-h-[40px]">
                        {t('Step-by-step first aid instructions for {{emergencyName}}.', { emergencyName: emergency.name.toLowerCase() }) || `Step-by-step first aid instructions for ${emergency.name.toLowerCase()}.`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full group text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                        {t('categoryDetailPage.viewGuide')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-yellow-50 dark:bg-yellow-900/30 border-t border-yellow-200 dark:border-yellow-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              {t('categoryDetailPage.disclaimerTitle')}
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-400 max-w-4xl mx-auto">
              {t('categoryDetailPage.disclaimerText')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetailPage;