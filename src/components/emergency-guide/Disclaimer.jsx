import React from 'react';

const Disclaimer = ({ message = "This information is not a substitute for professional medical advice. In case of emergency, always call emergency services immediately. RapAID is for informational purposes only." }) => {
  return (
    <section className="py-8 bg-yellow-50 border-t border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Important Disclaimer
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-400 max-w-4xl mx-auto">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;