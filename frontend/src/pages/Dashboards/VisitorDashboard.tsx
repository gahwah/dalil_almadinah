import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Clock } from 'lucide-react';
import { getBookings } from '../../services/api';

const VisitorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="mb-8 text-right">
          <h1 className="text-3xl font-bold text-madinah-dark">مرحباً بك مجدداً، {user?.email}</h1>
          <p className="text-gray-600">إدارة رحلاتك وحجوزاتك القادمة من هنا.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center text-right">
            <h2 className="text-xl font-bold text-madinah-dark">حجوزاتي</h2>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center p-10 text-gray-500">جاري تحميل حجوزاتك...</div>
            ) : (
              <table className="w-full text-right" dir="rtl">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                    <th className="px-6 py-4 font-semibold text-right">رقم الحجز</th>
                    <th className="px-6 py-4 font-semibold text-right">الجولة</th>
                    <th className="px-6 py-4 font-semibold text-right">التاريخ</th>
                    <th className="px-6 py-4 font-semibold text-right">الحالة</th>
                    <th className="px-6 py-4 font-semibold text-right">السعر</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map(booking => (
                    <tr key={booking.id} className="hover:bg-gray-50 text-right">
                      <td className="px-6 py-4 font-medium text-gray-900 text-right">#{booking.id}</td>
                      <td className="px-6 py-4 text-gray-700 text-right">{booking.tour_title}</td>
                      <td className="px-6 py-4 text-gray-600 flex items-center gap-2 justify-start text-right"><Clock size={16}/> {booking.date}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {booking.status === 'confirmed' ? 'مؤكد' : booking.status === 'rejected' ? 'مرفوض' : 'معلق'}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-madinah-green text-right">{booking.price} ر.س</td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-6 text-gray-500">لم يتم العثور على حجوزات.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;
