import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TourCard from '../../components/TourCard';
import GuideCard from '../../components/GuideCard';
import { getTours, getGuides } from '../../services/api';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [tours, setTours] = useState<any[]>([]);
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [toursData, guidesData] = await Promise.all([getTours(), getGuides()]);
        setTours(toursData.slice(0, 3)); // Featured tours only
        setGuides(guidesData);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(46, 139, 87, 0.7), rgba(26, 26, 26, 0.8)), url("https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-arabic">{t('home.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
          <Link to="/tours" className="bg-madinah-gold text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
            {t('home.explore_btn')}
          </Link>
        </div>
      </div>

      {/* Featured Tours */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-madinah-dark mb-2">{t('home.featured_tours')}</h2>
            <p className="text-gray-600">{t('home.featured_tours_sub')}</p>
          </div>
          <Link to="/tours" className="text-madinah-green font-semibold hover:underline hidden sm:block">{t('home.view_all')}</Link>
        </div>
        {loading ? (
          <div className="text-center py-10 text-gray-500">جاري تحميل الجولات...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <TourCard key={tour.id} {...tour} type={tour.type} duration={tour.duration_hours} image={tour.image_url} />
            ))}
          </div>
        )}
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-madinah-dark mb-2 text-center">{t('home.meet_guides')}</h2>
          <p className="text-gray-600 text-center mb-10">{t('home.meet_guides_sub')}</p>
          {loading ? (
            <div className="text-center py-10 text-gray-500">جاري تحميل المرشدين...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
              {guides.map(guide => (
                <GuideCard key={guide.id} {...guide} image={guide.image_url} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section className="py-16 bg-madinah-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.ai_title')}</h2>
          <p className="text-lg mb-8 text-green-100">{t('home.ai_sub')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="text" 
              placeholder={t('home.ai_placeholder')}
              className="px-6 py-3 rounded-full text-gray-800 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-madinah-gold shadow-lg"
            />
            <button className="bg-madinah-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition shadow-lg">
              {t('home.ask_ai')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
