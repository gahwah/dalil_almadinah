import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const mockRequests = [
  { id: 201, visitor: 'john@example.com', tour: 'موقع معركة جبل أحد التاريخي', date: '2026-07-20', status: 'pending' },
  { id: 202, visitor: 'sara@example.com', tour: 'جولة مسجد قباء التاريخي', date: '2026-07-21', status: 'pending' },
];

const GuideDashboard: React.FC = () => {
  const [requests, setRequests] = useState(mockRequests);

  const handleAction = (id: number, action: 'confirmed' | 'rejected') => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: action } : r));
  };

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-madinah-dark">بوابة المرشد</h1>
          <p className="text-gray-600">راجع طلبات الحجز الواردة إليك من الزوار.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50 text-right">
            <h2 className="text-xl font-bold text-madinah-dark">طلبات الجولات السياحية</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right" dir="rtl">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                  <th className="px-6 py-4 font-semibold text-right">رقم الطلب</th>
                  <th className="px-6 py-4 font-semibold text-right">الزائر</th>
                  <th className="px-6 py-4 font-semibold text-right">الجولة</th>
                  <th className="px-6 py-4 font-semibold text-right">التاريخ</th>
                  <th className="px-6 py-4 font-semibold text-right">الحالة</th>
                  <th className="px-6 py-4 font-semibold text-right">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requests.map(req => (
                  <tr key={req.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-right">#{req.id}</td>
                    <td className="px-6 py-4 text-right">{req.visitor}</td>
                    <td className="px-6 py-4 text-right">{req.tour}</td>
                    <td className="px-6 py-4 text-right">{req.date}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold 
                        ${req.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                          req.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {req.status === 'confirmed' ? 'مؤكد' : req.status === 'rejected' ? 'مرفوض' : 'معلق'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2 justify-start">
                      {req.status === 'pending' && (
                        <>
                          <button onClick={() => handleAction(req.id, 'confirmed')} className="p-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition" title="قبول">
                            <Check size={16} />
                          </button>
                          <button onClick={() => handleAction(req.id, 'rejected')} className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition" title="رفض">
                            <X size={16} />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDashboard;
