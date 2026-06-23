import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { Menu, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md border-b-4 border-madinah-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-madinah-green flex items-center gap-2">
              <span className="text-madinah-gold text-3xl">دليل</span> 
              <span>المدينة</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center rtl:space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-madinah-green transition">{t('navbar.home')}</Link>
            <Link to="/tours" className="text-gray-700 hover:text-madinah-green transition">{t('navbar.tours')}</Link>
            <Link to="/poster" className="text-gray-700 hover:text-madinah-green transition">ملصق المشروع</Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Link to={`/dashboard/${user?.role}`} className="text-gray-700 hover:text-madinah-green transition flex items-center gap-1">
                  <User size={18} /> {t('navbar.dashboard')}
                </Link>
                <button onClick={logout} className="text-gray-700 hover:text-red-600 transition flex items-center gap-1">
                  <LogOut size={18} /> {t('navbar.logout')}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Link to="/auth/login" className="text-gray-700 hover:text-madinah-green transition">{t('navbar.login')}</Link>
                <Link to="/auth/register" className="bg-madinah-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-medium">
                  {t('navbar.register')}
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-700 hover:text-madinah-green">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
