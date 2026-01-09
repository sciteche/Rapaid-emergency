import React, { useState, useEffect } from 'react';
import { useApiKey } from '@/contexts/ApiKeyContext';
import { listAvailableModels } from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Loader } from 'lucide-react';

const DebugModelsPage = () => {
  const { isConfigured, openModal } = useApiKey();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleListModels = async () => {
    if (!isConfigured) {
      openModal();
      return;
    }

    setLoading(true);
    setError('');
    try {
      const modelList = await listAvailableModels();
      setModels(modelList);
      console.log('Models loaded:', modelList);
    } catch (err) {
      setError(err.message || 'Failed to load models');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isConfigured) {
      handleListModels();
    }
  }, [isConfigured]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Available AI Models
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            View all models available through your Gemini API key
          </p>
        </div>

        {!isConfigured ? (
          <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-800">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <CardTitle className="text-yellow-800 dark:text-yellow-200">
                  API Key Required
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                Please configure your Gemini API key to view available models.
              </p>
              <Button
                onClick={openModal}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                Configure API Key
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <Button
              onClick={handleListModels}
              disabled={loading}
              className="mb-6 bg-green-600 hover:bg-green-700 text-white"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Loading Models...
                </>
              ) : (
                'Load Available Models'
              )}
            </Button>

            {error && (
              <Card className="border-red-200 bg-red-50 dark:bg-red-900/30 dark:border-red-800 mb-6">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200">Error</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </CardContent>
              </Card>
            )}

            {models.length > 0 && (
              <div className="space-y-4">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Found {models.length} model{models.length !== 1 ? 's' : ''}
                </div>

                {models.map((model) => (
                  <Card
                    key={model.name}
                    className="dark:border-slate-700 dark:bg-slate-800 hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg break-all">
                            {model.name}
                          </CardTitle>
                          {model.displayName && (
                            <CardDescription>{model.displayName}</CardDescription>
                          )}
                        </div>
                        <Badge className="ml-2 whitespace-nowrap">
                          v{model.version}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {model.description && (
                        <div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Description
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {model.description}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {model.inputTokenLimit && (
                          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                            <p className="text-xs font-semibold text-blue-900 dark:text-blue-200">
                              Input Token Limit
                            </p>
                            <p className="text-sm text-blue-800 dark:text-blue-300 font-mono">
                              {model.inputTokenLimit.toLocaleString()}
                            </p>
                          </div>
                        )}

                        {model.outputTokenLimit && (
                          <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                            <p className="text-xs font-semibold text-green-900 dark:text-green-200">
                              Output Token Limit
                            </p>
                            <p className="text-sm text-green-800 dark:text-green-300 font-mono">
                              {model.outputTokenLimit.toLocaleString()}
                            </p>
                          </div>
                        )}
                      </div>

                      {model.supportedGenerationMethods &&
                        model.supportedGenerationMethods.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Supported Methods
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {model.supportedGenerationMethods.map((method) => (
                                <Badge key={method} variant="subtle">
                                  {method}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block overflow-x-auto text-slate-700 dark:text-slate-300">
                          {model.name}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DebugModelsPage;
