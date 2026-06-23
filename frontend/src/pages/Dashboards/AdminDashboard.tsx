import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const mockPendingGuides = [
  { id: 1, email: 'guide1@example.com', nationality: 'سعودي', status: 'pending' },
  { id: 2, email: 'guide2@example.com', nationality: 'مصري', status: 'pending' },
];

const AdminDashboard: React.FC = () => {
  const [guides, setGuides] = useState(mockPendingGuides);

  const handleApproval = (id: number, _approved: boolean) => {
    setGuides(guides.filter(g => g.id !== id));
  };

  return (
    <div className="min-h-screen bg-madinah-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-madinah-dark">لوحة تحكم المسؤول</h1>
          <p className="text-gray-600">إدارة المنصة واعتمادات المرشدين السياحيين.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center flex-row-reverse">
            <h2 className="text-xl font-bold text-madinah-dark">طلبات اعتماد المرشدين المعلقة</h2>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">{guides.length} معلق</span>
          </div>
          <div className="p-0">
            {guides.length === 0 ? (
              <div className="p-8 text-center text-gray-500">لا توجد طلبات اعتماد معلقة للمرشدين.</div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {guides.map(guide => (
                  <li key={guide.id} className="p-6 flex items-center justify-between hover:bg-gray-50 flex-row-reverse">
                    <div className="text-right">
                      <h3 className="font-bold text-gray-800">{guide.email}</h3>
                      <p className="text-sm text-gray-500">الجنسية: {guide.nationality}</p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => handleApproval(guide.id, true)} className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-sm">
                        <CheckCircle size={16} /> موافقة
                      </button>
                      <button onClick={() => handleApproval(guide.id, false)} className="flex items-center gap-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition text-sm">
                        <XCircle size={16} /> رفض
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
