import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { emergencyCategories } from '@/data/emergencies';
import { useTranslation } from 'react-i18next';
import { useSearch } from '@/contexts/SearchContext';


const CategoriesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { searchQuery: globalSearchQuery, setSearchQuery: setGlobalSearchQuery } = useSearch();
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryFromUrl = queryParams.get('q');
    if (queryFromUrl) {
      setLocalSearchQuery(queryFromUrl);
      setGlobalSearchQuery(queryFromUrl);
    } else {
      setLocalSearchQuery(globalSearchQuery);
    }
  }, [location.search, globalSearchQuery, setGlobalSearchQuery]);


  const allEmergencies = emergencyCategories.flatMap(category => 
    category.emergencies.map(emergency => ({
      ...emergency,
      categoryId: category.id,
      categoryName: t(category.name) || category.name
    }))
  );

  const handleLocalSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };
  
  const handleLocalSearchSubmit = (e) => {
    e.preventDefault();
    setGlobalSearchQuery(localSearchQuery);
    // Update URL without navigating to a different page, just to reflect the search term
    navigate(`/categories?q=${encodeURIComponent(localSearchQuery)}`, { replace: true });
  };


  const filteredEmergencies = allEmergencies.filter(emergency => {
    const searchTerm = localSearchQuery.toLowerCase();
    const translatedName = (t(emergency.name) || emergency.name).toLowerCase();
    const originalName = emergency.name.toLowerCase();
    const translatedCategoryName = (t(emergency.categoryName) || emergency.categoryName).toLowerCase();
    const originalCategoryName = emergency.categoryName.toLowerCase();
    
    return translatedName.includes(searchTerm) || 
           originalName.includes(searchTerm) ||
           translatedCategoryName.includes(searchTerm) ||
           originalCategoryName.includes(searchTerm);
  });

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
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950">
      <section className="bg-white dark:bg-slate-800/50 dark:border-b dark:border-slate-700/50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('categoriesPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t('categoriesPage.subtitle')}
            </p>

            <form onSubmit={handleLocalSearchSubmit} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
                <Input
                  type="search"
                  placeholder={t('search.placeholderCategories')}
                  value={localSearchQuery}
                  onChange={handleLocalSearchChange}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-slate-600 focus:border-[#7ed957] dark:focus:border-[#7ed957] rounded-xl bg-white dark:bg-slate-700/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
                 <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#7ed957] hover:bg-[#7ed957]/90 text-white px-4 py-2 text-sm">
                  {t('search.button')}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {!localSearchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t('categoriesPage.guidesCount', { count: category.emergencies.length })}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {category.emergencies.slice(0, 3).map((emergency) => (
                              <Badge key={emergency.id} variant="outline" className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600">
                                {emergency.emoji} {t(emergency.name) || emergency.name}
                              </Badge>
                            ))}
                            {category.emergencies.length > 3 && (
                              <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600">
                                +{category.emergencies.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" className="w-full group text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                          {t('categoriesPage.viewCategory')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: localSearchQuery ? 0 : 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {localSearchQuery ? t('categoriesPage.searchResultsTitle') : t('categoriesPage.allEmergencies')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredEmergencies.map((emergency, index) => (
                <motion.div
                  key={`${emergency.categoryId}-${emergency.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/emergency/${emergency.id}`}>
                    <Card className="card-hover cursor-pointer h-full dark:bg-slate-800/60 dark:border-slate-700/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{emergency.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                              {t(emergency.name) || emergency.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {emergency.categoryName}
                            </p>
                            <Badge 
                              className={`text-xs mt-1 ${getSeverityColor(emergency.severity)}`}
                            >
                              {t(emergency.severity) || emergency.severity}
                            </Badge>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {localSearchQuery && filteredEmergencies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {t('categoriesPage.noResults', { query: localSearchQuery })}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setLocalSearchQuery('');
                    setGlobalSearchQuery('');
                    navigate('/categories', { replace: true });
                  }}
                  className="mt-4 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  {t('categoriesPage.clearSearch')}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;