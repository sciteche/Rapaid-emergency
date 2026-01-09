import React, { createContext, useState, useContext, useEffect } from 'react';
import { initializeGemini } from '@/lib/gemini';

const ApiKeyContext = createContext();

export const useApiKey = () => {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within ApiKeyProvider');
  }
  return context;
};

export const ApiKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      const initialized = initializeGemini(savedKey);
      setIsConfigured(initialized);
    } else {
      setShowModal(true);
    }
  }, []);

  const updateApiKey = (newKey) => {
    const trimmedKey = newKey.trim();
    if (!trimmedKey) {
      console.warn('API key cannot be empty');
      return false;
    }
    
    const initialized = initializeGemini(trimmedKey);
    if (initialized) {
      setApiKey(trimmedKey);
      localStorage.setItem('gemini_api_key', trimmedKey);
      setIsConfigured(true);
      setShowModal(false);
      return true;
    }
    return false;
  };

  const clearApiKey = () => {
    setApiKey('');
    setIsConfigured(false);
    localStorage.removeItem('gemini_api_key');
    setShowModal(true);
  };

  const openModal = () => setShowModal(true);

  return (
    <ApiKeyContext.Provider value={{
      apiKey,
      isConfigured,
      showModal,
      setShowModal,
      updateApiKey,
      clearApiKey,
      openModal,
    }}>
      {children}
    </ApiKeyContext.Provider>
  );
};
