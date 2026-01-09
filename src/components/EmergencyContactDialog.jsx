import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Shield, Truck, Heart, HelpCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const EmergencyContactDialog = ({ isOpen, onClose }) => {
  const emergencyContacts = [
    {
      type: 'Police',
      number: '100',
      icon: Shield,
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'For crimes, accidents, and security emergencies'
    },
    {
      type: 'Fire Department',
      number: '101',
      icon: Truck,
      color: 'bg-red-500 hover:bg-red-600',
      description: 'For fires, building collapses, and rescue operations'
    },
    {
      type: 'Ambulance',
      number: '108',
      icon: Heart,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'For medical emergencies and health crises'
    },
    {
      type: 'Helpline',
      number: '1098',
      icon: HelpCircle,
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'For child helpline and general assistance'
    }
  ];

  const handleCall = (type, number) => {
    // In a real app, this would initiate a phone call
    window.location.href = `tel:${number}`;
    toast({
      title: `Calling ${type}`,
      description: `Dialing ${number}...`,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Emergency Contacts</h2>
              <p className="text-sm text-gray-600 mt-1">Select the appropriate emergency service</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {emergencyContacts.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <motion.button
                  key={contact.type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCall(contact.type, contact.number)}
                  className="w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${contact.color} text-white transition-colors`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                          {contact.type}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{contact.number}</span>
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              These numbers are for Indian emergency services. 
              <br />
              Please use your local emergency numbers if you're in a different country.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EmergencyContactDialog;