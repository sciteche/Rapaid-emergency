import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '@/lib/i18n.js';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { getLogoUrl } from '@/lib/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Footer = ({ openEmergencyDialog }) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const logoUrl = getLogoUrl(theme);

  return (
    <footer className="bg-gray-50 border-t dark:bg-slate-800 dark:border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src={logoUrl}
              alt={t('footer.logoAlt')}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600 max-w-xs dark:text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <span className="font-semibold text-gray-900 mb-4 block dark:text-white">{t('footer.quickLinks')}</span>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                {t('nav.home')}
              </Link>
              <Link to="/categories" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                {t('nav.categories')}
              </Link>
              <Link to="/symptom-checker" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                {t('nav.symptomChecker')}
              </Link>
              <Link to="/about" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                {t('nav.about')}
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-gray-900 mb-4 block dark:text-white">{t('footer.categories')}</span>
            <div className="space-y-2">
              <Link to="/category/trauma-injuries" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                Trauma & Injuries
              </Link>
              <Link to="/category/cardiac-respiratory" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                Cardiac & Respiratory
              </Link>
              <Link to="/category/animal-insect-bites" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                Animal & Insect Bites
              </Link>
              <Link to="/category/poisoning-overdose" className="block text-sm text-gray-600 hover:text-[#7ed957] transition-colors dark:text-gray-400 dark:hover:text-[#7ed957]">
                Poisoning & Overdose
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-gray-900 mb-4 block dark:text-white">{t('footer.contact')}</span>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              {t('footer.contactDesc')}
            </p>
            <Button 
              className="emergency-button text-white font-semibold px-4 py-2 rounded-md text-sm"
              onClick={openEmergencyDialog}
            >
              {t('nav.emergency')}
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t dark:border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('footer.copyright')}
            </p>
            <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">
              {t('footer.disclaimer')}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                    {lang.flag} {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;