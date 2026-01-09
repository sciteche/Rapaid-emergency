import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearch } from '@/contexts/SearchContext.jsx';
import { emergencyCategories } from '@/data/emergencies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SearchResultsPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } = useSearch();

  useEffect(() => {
    if (queryFromUrl && queryFromUrl !== searchQuery) {
      setSearchQuery(queryFromUrl);
    }
  }, [queryFromUrl, searchQuery, setSearchQuery]);

  useEffect(() => {
    if (searchQuery) {
      const allEmergencies = emergencyCategories.flatMap(category =>
        category.emergencies.map(emergency => ({
          ...emergency,
          categoryId: category.id,
          categoryName: t(category.name) || category.name,
          translatedName: t(emergency.name) || emergency.name,
          translatedDescription: t(emergency.description) || emergency.description,
        }))
      );

      const filtered = allEmergencies.filter(emergency =>
        emergency.translatedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emergency.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Also search original name
        emergency.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (emergency.keywords && emergency.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (t(emergency.keywordsNamespace) && Object.values(t(emergency.keywordsNamespace, { returnObjects: true })).some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, t, setSearchResults]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-[#7ed957] hover:text-[#7ed957]/80 mb-6 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('searchResultsPage.backToHome')}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {t('searchResultsPage.title')}: <span className="text-[#7ed957]">&quot;{searchQuery}&quot;</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            {t('searchResultsPage.resultsFound', { count: searchResults.length })}
          </p>
        </motion.div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((emergency, index) => (
              <motion.div
                key={`${emergency.categoryId}-${emergency.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/emergency/${emergency.id}`}>
                  <Card className="card-hover cursor-pointer h-full dark:bg-slate-800/60 dark:border-slate-700/50">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-3xl">{emergency.emoji}</div>
                        <Badge className={`px-2.5 py-0.5 text-xs font-semibold ${getSeverityColor(emergency.severity)}`}>
                          {t(emergency.severity) || emergency.severity}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {emergency.translatedName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {t('searchResultsPage.category')}: {emergency.categoryName}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                        {emergency.translatedDescription || t('emergencyGuidePage.defaultDescription')}
                      </p>
                      <Button variant="ghost" className="w-full group text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                        {t('searchResultsPage.viewGuide')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-6" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {t('searchResultsPage.noResults', { query: searchQuery })}
            </p>
            <Link to="/categories">
              <Button variant="outline" className="mt-6 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700">
                {t('searchResultsPage.browseCategories')}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;