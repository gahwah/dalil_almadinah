import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Globe } from 'lucide-react';

interface GuideCardProps {
  id: string | number;
  name: string;
  nationality: string;
  rating: number;
  languages: string[];
  image: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ id, name, nationality, rating, languages, image }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100 hover:border-madinah-gold transition duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 rounded-full object-cover border-4 border-madinah-white shadow-sm mb-4"
      />
      <h3 className="text-lg font-bold text-madinah-dark">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{nationality}</p>
      
      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
        <Star size={16} fill="currentColor" />
        <span className="text-sm font-semibold text-gray-700">{rating} / 5.0</span>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {languages.map((lang, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <Globe size={12} /> {lang}
          </span>
        ))}
      </div>

      <Link 
        to={`/guides/${id}`}
        className="mt-auto text-sm text-madinah-green hover:text-madinah-gold font-medium transition"
      >
        عرض الملف الشخصي &larr;
      </Link>
    </div>
  );
};

export default GuideCard;
