import React, { useState, useEffect } from 'react';
import TourCard from '../../components/TourCard';
import { Search, Filter } from 'lucide-react';
import { getTours } from '../../services/api';

const ToursList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        setTours(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <h1 className="text-4xl font-bold text-madinah-dark mb-8 text-center">استكشف المدينة المنورة</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row-reverse gap-4 mb-10 text-right">
          <div className="flex-grow relative">
            <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="ابحث عن الجولات، المعالم، أو الكلمات المفتاحية..." 
              className="w-full pr-10 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-madinah-green text-right text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 justify-center bg-gray-100 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Filter size={18} /> تصفية
          </button>
        </div>

        {/* Tour Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">جاري تحميل الجولات...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours
              .filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(tour => (
              <TourCard key={tour.id} {...tour} type={tour.type} duration={tour.duration_hours} image={tour.image_url} />
            ))}
            {tours.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500">لم يتم العثور على جولات مطابقة لبحثك.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToursList;
