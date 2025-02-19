import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  Brain, 
  Syringe, 
  Baby, 
  Scissors 
} from 'lucide-react';

const services = [
  { icon: Stethoscope, key: 'general', color: 'blue' },
  { icon: Sparkles, key: 'cosmetic', color: 'purple' },
  { icon: Stethoscope, key: 'orthodontics', color: 'indigo' },
  { icon: Syringe, key: 'implants', color: 'pink' },
  { icon: Baby, key: 'pediatric', color: 'green' },
  { icon: Scissors, key: 'surgery', color: 'red' }
];

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card px-6 py-2 rounded-full text-blue-600 font-semibold inline-block mb-4"
          >
            {t('services.badge')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? 'rtl' : 'ltr'}`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              <motion.div 
                className="relative z-10"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t(`services.items.${service.key}`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('services.itemDescription')}
              </p>
              
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-radial from-blue-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;