import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/lib/theme';
import { SearchProvider } from '@/contexts/SearchContext.jsx';
import { ApiKeyProvider } from '@/contexts/ApiKeyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ApiKeyModal from '@/components/ApiKeyModal';
import ApiKeyWidget from '@/components/ApiKeyWidget';
import HomePage from '@/pages/HomePage';
import CategoriesPage from '@/pages/CategoriesPage';
import CategoryDetailPage from '@/pages/CategoryDetailPage';
import EmergencyGuidePage from '@/pages/EmergencyGuidePage';
import SymptomCheckerPage from '@/pages/SymptomCheckerPage';
import AboutPage from '@/pages/AboutPage';
import SearchResultsPage from '@/pages/SearchResultsPage';
import DebugModelsPage from '@/pages/DebugModelsPage';
import ChatBot from '@/components/ChatBot';
import EmergencyContactDialog from '@/components/EmergencyContactDialog';
import './lib/i18n.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmergencyDialogOpen, setIsEmergencyDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const openEmergencyDialog = () => setIsEmergencyDialogOpen(true);
  const closeEmergencyDialog = () => setIsEmergencyDialogOpen(false);

  return (
    <ApiKeyProvider>
      <ThemeProvider>
        <SearchProvider>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <Router>
              <div className="min-h-screen flex flex-col">
                <Header openEmergencyDialog={openEmergencyDialog} />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage openEmergencyDialog={openEmergencyDialog} />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/category/:categoryId" element={<CategoryDetailPage />} />
                    <Route path="/emergency/:emergencyId" element={<EmergencyGuidePage openEmergencyDialog={openEmergencyDialog} />} />
                    <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/search" element={<SearchResultsPage />} />
                    <Route path="/debug/models" element={<DebugModelsPage />} />
                  </Routes>
                </main>
                <Footer openEmergencyDialog={openEmergencyDialog} />
                <ChatBot />
                <Toaster />
                <EmergencyContactDialog
                  isOpen={isEmergencyDialogOpen}
                  onClose={closeEmergencyDialog}
                />
                <ApiKeyModal />
                <ApiKeyWidget />
              </div>
            </Router>
          )}
        </SearchProvider>
      </ThemeProvider>
    </ApiKeyProvider>
  );
}

export default App;