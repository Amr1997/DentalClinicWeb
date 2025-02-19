import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Stethoscope, 
  Phone, 
  CalendarCheck, 
  Moon, 
  Sun, 
  Syringe,
  HeartPulse,
  Star
} from 'lucide-react';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();
  const isRTL = i18n.language === 'ar';
  
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const stats = [
    { value: '1000+', label: t('stats.patients'), icon: HeartPulse },
    { value: '15+', label: t('stats.experience'), icon: Stethoscope },
    { value: '4.9', label: t('stats.rating'), icon: Star }
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-blue-100/20 via-purple-100/10 to-transparent rounded-full"
          style={{ y, opacity }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-purple-100/20 via-blue-100/10 to-transparent rounded-full"
          style={{ y: useTransform(scrollY, [0, 500], [0, -200]), opacity }}
        />
      </div>

      {/* Theme toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 glass-card p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>

      <div className="container mx-auto px-4 relative">
        <div className={`flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <motion.div 
                className="relative bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center w-64 overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                animate={{
                  boxShadow: [
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    "0 25px 30px -12px rgba(0, 0, 0, 0.15)",
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src="/src/assets/images/logo.png"
                  alt="Dental Clinic Logo"
                  className="h-24 w-72 object-cover relative z-10 scale-125"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button bg-blue-600 text-white"
                onClick={() => scrollToElement('booking-form')}
              >
                <span className="flex items-center justify-center gap-2">
                  <CalendarCheck className="w-5 h-5" />
                  {t('hero.cta')}
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button bg-white/80 text-blue-600"
                onClick={() => scrollToElement('footer')}
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t('hero.contact')}
                </span>
              </motion.button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-4 rounded-xl text-center"
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <motion.p 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800"
              />
              <motion.div
                className="absolute inset-4 glass-card rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                  alt="Modern dental clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-20, 0, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass-card p-4 rounded-2xl"
              >
                <Stethoscope className="w-8 h-8 text-blue-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <span className="text-sm font-semibold">{t('booking.subtitle')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;