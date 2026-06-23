import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import GuideCard from '../../components/GuideCard';
import { getTourById, getGuides } from '../../services/api';

const TourDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [tour, setTour] = useState<any>(null);
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tourData, guidesData] = await Promise.all([getTourById(id as string), getGuides()]);
        setTour(tourData);
        setGuides(guidesData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-20">{t('tours.loading')}</div>;
  if (!tour) return <div className="text-center py-20 text-red-500">لم يتم العثور على الجولة.</div>;

  return (
    <div className="bg-madinah-white pb-16">
      {/* Hero Image */}
      <div className="h-[400px] relative">
        <img src={tour.image_url} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className="bg-madinah-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
              {tour.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{tour.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-madinah-dark mb-4">{t('details.overview')}</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">{tour.description}</p>
          
          <h3 className="text-xl font-bold text-madinah-dark mb-4">{t('details.highlights')}</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {tour.highlights && tour.highlights.map((h: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={20} className="text-madinah-green" /> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-madinah-green sticky top-24">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100 flex-row-reverse text-right">
              <div className="text-3xl font-bold text-madinah-dark flex items-center">
                <DollarSign size={28} className="text-madinah-green hidden" />{tour.price} <span className="text-lg mr-1 text-gray-500 font-normal">ر.س</span>
              </div>
              <div className="text-gray-500 flex items-center gap-1">
                <Clock size={20} /> {tour.duration_hours} {t('common.hours')}
              </div>
            </div>
            
            <Link 
              to={`/book/${id}`}
              className="block w-full text-center bg-madinah-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
            >
              {t('details.book_tour')}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-madinah-dark mb-6">{t('details.available_guides')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {guides.map(guide => (
            <GuideCard key={guide.id} {...guide} image={guide.image_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
