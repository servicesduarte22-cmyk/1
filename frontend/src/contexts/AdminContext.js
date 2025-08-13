import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdminSettings = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminSettings must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [socialMedia, setSocialMedia] = useState({
    instagram: "@Multiser_Duarte",
    instagramUrl: "https://instagram.com/Multiser_Duarte",
    facebook: "Services Duarte",
    facebookUrl: "https://facebook.com/servicesduarte",
    whatsapp: "+505 5705 0821",
    whatsappUrl: "https://wa.me/50557050821",
    youtube: "Services Duarte",
    youtubeUrl: "https://youtube.com/@servicesduarte",
    tiktok: "@servicesduarte",
    tiktokUrl: "https://tiktok.com/@servicesduarte",
    linkedin: "Services Duarte",
    linkedinUrl: "https://linkedin.com/company/servicesduarte",
    twitter: "@ServicesD",
    twitterUrl: "https://twitter.com/ServicesD"
  });

  const [visualEffects, setVisualEffects] = useState({
    parallaxEnabled: true,
    animationsEnabled: true,
    particleEffect: false,
    vertigoEffect: false,
    glassmorphism: true,
    fadeInAnimation: true,
    hoverEffects: true,
    gradientAnimation: true,
    floatingElements: false,
    scrollAnimations: true
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "SERVICES DUARTE",
    tagline: "Tu inversión está segura y con sello de calidad, nuestra experiencia es nuestro mayor orgullo.",
    phone: "+505 5705 0821",
    address: "WALTER FERRETI (WASPAN NORTE), KM 7 CARRETERA NORTE 7C AL LAGO M/I ESQUINERA",
    email: "servicesduarte22@gmail.com"
  });

  // Cargar configuraciones guardadas
  useEffect(() => {
    const savedSocialMedia = localStorage.getItem('admin_social_media');
    if (savedSocialMedia) {
      try {
        setSocialMedia(JSON.parse(savedSocialMedia));
      } catch (e) {
        console.error('Error loading social media settings:', e);
      }
    }

    const savedEffects = localStorage.getItem('admin_effects');
    if (savedEffects) {
      try {
        setVisualEffects(JSON.parse(savedEffects));
      } catch (e) {
        console.error('Error loading visual effects:', e);
      }
    }

    const savedCompanyInfo = localStorage.getItem('admin_company');
    if (savedCompanyInfo) {
      try {
        setCompanyInfo(JSON.parse(savedCompanyInfo));
      } catch (e) {
        console.error('Error loading company info:', e);
      }
    }
  }, []);

  const updateSocialMedia = (newSocialMedia) => {
    setSocialMedia(newSocialMedia);
    localStorage.setItem('admin_social_media', JSON.stringify(newSocialMedia));
  };

  const updateVisualEffects = (newEffects) => {
    setVisualEffects(newEffects);
    localStorage.setItem('admin_effects', JSON.stringify(newEffects));
  };

  const updateCompanyInfo = (newInfo) => {
    setCompanyInfo(newInfo);
    localStorage.setItem('admin_company', JSON.stringify(newInfo));
  };

  const value = {
    socialMedia,
    visualEffects,
    companyInfo,
    updateSocialMedia,
    updateVisualEffects,
    updateCompanyInfo
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};