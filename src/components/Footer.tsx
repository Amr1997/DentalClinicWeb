import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/walydentalclinic1', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/walydentalclinic1', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://www.youtube.com/@walydentalclinic1', color: 'hover:text-red-600' },
    { icon: MessageCircle, href: 'https://wa.me/+201040758105', color: 'hover:text-green-600' }
  ];

  return (
    <footer id="footer" className="relative bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50" />
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {t('footer.clinic.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('footer.clinic.description')}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full bg-gray-50 text-gray-600 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-4">
              <a href="tel:+201040758105" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span>{t('footer.contact.phone')}</span>
              </a>
              <a href="mailto:walydentalclinic@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>{t('footer.contact.email')}</span>
              </a>
              {/* <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{t('footer.contact.hours')}</span>
              </div> */}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {t('footer.location.title')}
            </h3>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">{t('footer.location.mainBranch')}</p>
                <p>{t('footer.location.address')}</p>
              </div>
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.560581391391!2d31.142121484886083!3d29.992055981901327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845be40122343%3A0x896fabaa2105d9ad!2sWaly%20Dental%20Clinic!5e0!3m2!1sar!2seg!4v1739965915834!5m2!1sar!2seg"                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              {t('footer.legal.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('footer.legal.privacy')}
              </a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('footer.legal.terms')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;