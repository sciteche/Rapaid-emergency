import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

const LoadingScreen = () => {
  const primaryColor = 'hsl(var(--primary))'; 
  const backgroundColor = 'hsl(var(--background))';
  const foregroundColor = 'hsl(var(--foreground))';

  const emojis = ['⛑️', '⚕️', '🆘', '🩹']; 

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ 
        background: `linear-gradient(135deg, ${backgroundColor} 0%, color-mix(in srgb, ${backgroundColor} 80%, ${primaryColor} 20%) 100%)`,
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing Heartbeat animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute"
        >
          <HeartPulse size={120} color={primaryColor} strokeWidth={1.5} />
        </motion.div>

        {/* Orbiting emojis */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="absolute w-40 h-40" 
        >
          {emojis.map((emoji, index) => {
            const angle = (index / emojis.length) * 2 * Math.PI;
            const x = Math.cos(angle) * 80; // 80 is radius
            const y = Math.sin(angle) * 80;
            return (
              <motion.div
                key={emoji}
                className="absolute text-2xl"
                style={{ 
                  top: `calc(50% + ${y}px - 12px)`, // 12px is half of font size approx
                  left: `calc(50% + ${x}px - 12px)`,
                  filter: `drop-shadow(0 0 3px ${primaryColor})`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              >
                {emoji}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="mt-28 text-center">
        <motion.h1 
          className="text-3xl font-bold mb-2"
          style={{color: foregroundColor}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          RapAID
        </motion.h1>
        <motion.p 
          className="text-lg"
          style={{color: `color-mix(in srgb, ${foregroundColor} 70%, transparent)`}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Loading your AId for emergencies...
        </motion.p>
      </div>

      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(${primaryColor} 1px, transparent 1px),
            radial-gradient(${primaryColor} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      ></div>
    </motion.div>
  );
};

export default LoadingScreen;