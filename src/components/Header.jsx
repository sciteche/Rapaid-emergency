import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Search, Globe, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { getLogoUrl } from '@/lib/logo';
import { useTranslation } from 'react-i18next';
import { languages } from '@/lib/i18n.js';
import { useSearch } from '@/contexts/SearchContext.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ openEmergencyDialog }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { searchQuery, setSearchQuery } = useSearch();
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.categories'), path: '/categories' },
    { name: t('nav.symptomChecker'), path: '/symptom-checker' },
    { name: t('nav.about'), path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    navigate(`/search?q=${encodeURIComponent(localSearchQuery)}`);
    setIsSearchOpen(false); 
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const logoUrl = getLogoUrl(theme);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logoUrl}
                alt={t('header.logoAlt')}
                className="h-10 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#7ed957] ${
                    isActive(item.path) 
                      ? 'text-[#7ed957] border-b-2 border-[#7ed957] pb-1' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form 
                    onSubmit={handleSearchSubmit}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <Input
                      type="search"
                      placeholder={t('search.placeholderHeader')}
                      value={localSearchQuery}
                      onChange={(e) => setLocalSearchQuery(e.target.value)}
                      className="h-9 pr-8 pl-3 text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800"
                    />
                    <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9 text-gray-500 dark:text-gray-400">
                      <Search className="h-4 w-4" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
              
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="h-9 w-9"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-9">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                      {lang.flag} {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                className="emergency-button text-white font-semibold h-9"
                onClick={openEmergencyDialog}
              >
                <Phone className="h-4 w-4 mr-2" />
                {t('nav.emergency')}
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>
          </div>

          <AnimatePresence>
            {isSearchOpen && !isMenuOpen && (
                 <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t bg-background py-3"
                >
                    <form onSubmit={handleSearchSubmit} className="relative">
                        <Input
                        type="search"
                        placeholder={t('search.placeholderHeader')}
                        value={localSearchQuery}
                        onChange={(e) => setLocalSearchQuery(e.target.value)}
                        className="w-full h-10 pr-10 pl-4 text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800"
                        />
                        <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 dark:text-gray-400">
                            <Search className="h-4 w-4" />
                        </Button>
                    </form>
                </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t bg-background"
              >
                <div className="py-4 space-y-3">
                  {isSearchOpen && (
                     <div className="px-4 pb-3">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <Input
                            type="search"
                            placeholder={t('search.placeholderHeader')}
                            value={localSearchQuery}
                            onChange={(e) => setLocalSearchQuery(e.target.value)}
                            className="w-full h-10 pr-10 pl-4 text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800"
                            />
                            <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 dark:text-gray-400">
                                <Search className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                  )}

                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-[#7ed957] bg-[#7ed957]/10' 
                          : 'text-foreground hover:text-[#7ed957] hover:bg-[#7ed957]/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="px-4 pt-3 border-t">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild className="w-full">
                          <Button variant="outline" className="flex items-center justify-between w-full mb-3">
                            <div className="flex items-center space-x-1">
                                <Globe className="h-4 w-4" />
                                <span className="text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
                            </div>
                            <ChevronDown className="h-3 w-3 opacity-50" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)]">
                          {languages.map((lang) => (
                            <DropdownMenuItem key={lang.code} onClick={() => {changeLanguage(lang.code); setIsMenuOpen(false);}}>
                              {lang.flag} {lang.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>

                    <Button 
                      className="w-full emergency-button text-white font-semibold"
                      onClick={() => {
                        openEmergencyDialog();
                        setIsMenuOpen(false);
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {t('nav.emergency')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;