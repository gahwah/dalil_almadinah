import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, CreditCard, ShieldCheck } from 'lucide-react';
import { createBooking } from '../../services/api';

const BookingCheckout: React.FC = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await createBooking({ tourId, date });
      alert('تم تأكيد الحجز بنجاح!');
      navigate('/dashboard/visitor');
    } catch (err: any) {
      setError(err.response?.data?.error || 'فشل في إتمام الحجز');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-madinah-green">
          <div className="p-8 border-b border-gray-100 bg-gray-50 text-right">
            <h1 className="text-3xl font-bold text-madinah-dark mb-2">إتمام الحجز الآمن</h1>
            <p className="text-gray-600">أكمل تفاصيل حجزك للجولة رقم #{tourId}</p>
          </div>

          <form onSubmit={handleConfirm} className="p-8 text-right">
            {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
            
            <h2 className="text-xl font-bold text-madinah-dark mb-4 flex items-center gap-2 justify-start">
              <Calendar className="text-madinah-green" /> اختر التاريخ
            </h2>
            <div className="mb-8">
              <input 
                type="date" 
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-madinah-green text-right"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <h2 className="text-xl font-bold text-madinah-dark mb-4 flex items-center gap-2 justify-start">
              <CreditCard className="text-madinah-green" /> طريقة الدفع
            </h2>
            <div className="bg-gray-50 border rounded-lg p-4 mb-8">
              <p className="text-gray-600 text-sm mb-2">نظراً لأن هذه نسخة تجريبية، لا يلزم الدفع الفعلي حالياً.</p>
              <div className="flex items-center gap-2 text-madinah-green font-medium justify-start">
                <ShieldCheck size={20} /> عملية دفع تجريبية آمنة
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col items-start">
              <div className="text-2xl font-bold text-madinah-dark mb-4">المجموع: 50.00 ر.س</div>
              <button  
                type="submit" 
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-bold text-white transition shadow-md w-full sm:w-auto ${isSubmitting ? 'bg-gray-400' : 'bg-madinah-green hover:bg-green-700'}`}
              >
                {isSubmitting ? 'جاري المعالجة...' : 'تأكيد الحجز'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingCheckout;
