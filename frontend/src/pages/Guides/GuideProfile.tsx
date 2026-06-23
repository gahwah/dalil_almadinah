import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Globe, MapPin, Award } from 'lucide-react';
import { getGuides } from '../../services/api';

const GuideProfile: React.FC = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const guides = await getGuides();
        const found = guides.find((g: any) => g.id === parseInt(id as string));
        setGuide(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGuide();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-500">جاري تحميل ملف المرشد...</div>;
  if (!guide) return <div className="text-center py-20 text-red-500">لم يتم العثور على المرشد.</div>;

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="h-32 bg-madinah-green"></div>
          <div className="px-8 flex flex-col sm:flex-row gap-8 relative -top-16 flex-row-reverse text-right">
            <img 
              src={guide.image_url} 
              alt={guide.name} 
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
            />
            <div className="pt-16 sm:pt-20 flex-grow text-right">
              <h1 className="text-3xl font-bold text-madinah-dark">{guide.name}</h1>
              <p className="text-gray-500 text-lg flex items-center gap-1 mb-4 justify-end"><MapPin size={18} /> مرشد محلي • {guide.nationality}</p>
              
              <div className="flex flex-wrap gap-6 text-sm justify-end">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="text-madinah-gold" size={20} fill="currentColor" />
                  <span className="font-bold text-lg">{guide.rating}</span> 
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="text-madinah-green" size={20} />
                  <span className="font-bold text-lg">{guide.trips}</span>
                  <span>رحلة مكتملة</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-10 border-t border-gray-100 pt-8 text-right">
            <h2 className="text-xl font-bold text-madinah-dark mb-4">نبذة عني</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{guide.about}</p>
            
            <h2 className="text-xl font-bold text-madinah-dark mb-4">اللغات</h2>
            <div className="flex gap-3 justify-start flex-row-reverse">
              {guide.languages && guide.languages.map((lang: string) => (
                <span key={lang} className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 flex items-center gap-2">
                  <Globe size={18} className="text-madinah-green" /> {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
