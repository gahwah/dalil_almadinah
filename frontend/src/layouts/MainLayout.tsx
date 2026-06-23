import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  const { i18n } = useTranslation();
  
  // Force Arabic language and RTL
  if (i18n.language !== 'ar') {
    i18n.changeLanguage('ar');
  }

  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-madinah-white font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
