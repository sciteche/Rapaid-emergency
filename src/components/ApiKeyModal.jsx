import React, { useState } from 'react';
import { useApiKey } from '@/contexts/ApiKeyContext';
import { X, AlertCircle } from 'lucide-react';

const ApiKeyModal = () => {
  const { showModal, setShowModal, updateApiKey, apiKey } = useApiKey();
  const [inputKey, setInputKey] = useState(apiKey || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!showModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate key format (basic check)
    if (!inputKey.trim()) {
      setError('API key cannot be empty');
      setLoading(false);
      return;
    }

    if (inputKey.length < 20) {
      setError('API key appears to be too short. Please check and try again.');
      setLoading(false);
      return;
    }

    const success = updateApiKey(inputKey);
    if (!success) {
      setError('Failed to configure API key. Please check and try again.');
    }
    setLoading(false);
  };

  const handleClose = () => {
    if (apiKey) {
      // Only allow closing if already configured
      setShowModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#7ed957] to-green-600 px-6 py-8 text-white relative">
          <button
            onClick={handleClose}
            disabled={!apiKey}
            className={`absolute top-4 right-4 ${
              !apiKey ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
            } p-2 rounded-full transition-colors`}
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold mb-2">🤖 AI Features Setup</h2>
          <p className="text-green-50">Configure your Gemini API key to unlock AI-powered features</p>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Features List */}
          <div className="mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#7ed957] text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Symptom Checker</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered symptom analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ed957] text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">First Aid Assistant</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Chat with our AI assistant</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ed957] text-xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Smart Guidance</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Personalized recommendations</p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-200">
              <p className="font-semibold mb-1">Free API Key Required</p>
              <p>Get your free Gemini API key from <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Google AI Studio</a></p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Gemini API Key
              </label>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => {
                  setInputKey(e.target.value);
                  setError('');
                }}
                placeholder="sk-..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !inputKey.trim()}
              className="w-full bg-gradient-to-r from-[#7ed957] to-green-600 hover:from-[#6bc946] hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all"
            >
              {loading ? 'Configuring...' : 'Enable AI Features'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
            Your API key is stored securely in your browser only
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
