import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface TourCardProps {
  id: string | number;
  title: string;
  type: string;
  price: number;
  duration: number;
  image: string;
}

const TourCard: React.FC<TourCardProps> = ({ id, title, type, price, duration, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-madinah-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {type}
        </div>
      </div>
      <div className="p-6 text-right">
        <h3 className="text-xl font-bold text-madinah-dark mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4 rtl:space-x-reverse">
          <span className="flex items-center gap-1"><Clock size={16} /> {duration} ساعة</span>
          <span className="flex items-center gap-1 text-madinah-green font-semibold">{price} ر.س</span>
        </div>
        <Link 
          to={`/tours/${id}`}
          className="block w-full text-center bg-madinah-white text-madinah-green border border-madinah-green hover:bg-madinah-green hover:text-white py-2 rounded-lg transition font-medium"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
