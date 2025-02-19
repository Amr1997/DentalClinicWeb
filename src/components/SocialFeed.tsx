import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Video, ExternalLink } from 'lucide-react';

const socialPosts = [
  {
    type: 'video',
    platform: 'tiktok',
    thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
    title: 'Dental Care Tips',
    url: 'https://www.tiktok.com/@walydentalclinic1'
  },
  {
    type: 'image',
    platform: 'instagram',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80',
    title: 'Before & After',
    url: 'https://www.instagram.com/walydentalclinic1'
  },
  {
    type: 'video',
    platform: 'facebook',
    thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80',
    title: 'Patient Testimonial',
    url: 'https://www.facebook.com/walydentalclinic1'
  }
];

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Video
};

const SocialFeed: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20" />
      
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
            {t('social.title')}
          </motion.span>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('social.subtitle')}
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? 'rtl' : 'ltr'}`}>
          {socialPosts.map((post, index) => {
            const Icon = platformIcons[post.platform as keyof typeof platformIcons];
            
            return (
              <motion.a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative block"
              >
                <div className="glass-card rounded-2xl overflow-hidden aspect-video relative">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 glass-card p-2 rounded-full">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{post.title}</h3>
                    <span className="inline-flex items-center gap-2 text-blue-200 text-sm">
                      Visit {post.platform}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Facebook, color: 'text-blue-600', href: 'https://www.facebook.com/walydentalclinic1', label: t('social.platforms.facebook') },
            { icon: Instagram, color: 'text-pink-600', href: 'https://www.instagram.com/walydentalclinic1', label: t('social.platforms.instagram') },
            { icon: Video, color: 'text-black dark:text-white', href: 'https://www.tiktok.com/@walydentalclinic1', label: t('social.platforms.tiktok') }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <social.icon className={`w-5 h-5 ${social.color}`} />
              <span className="font-semibold">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed;