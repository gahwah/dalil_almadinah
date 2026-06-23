import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-madinah-dark text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        <div>
          <h3 className="text-2xl font-bold text-madinah-gold mb-4">دليل المدينة</h3>
          <p className="text-gray-400">
            بوابتكم الأولى لاستكشاف التاريخ العريق والثقافة الغنية للمدينة المنورة.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">روابط سريعة</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-madinah-green transition">الرئيسية</a></li>
            <li><a href="/tours" className="hover:text-madinah-green transition">استكشاف الجولات</a></li>
            <li><a href="/poster" className="hover:text-madinah-green transition">ملصق المشروع</a></li>
            <li><a href="/auth/login" className="hover:text-madinah-green transition">تسجيل الدخول</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">اتصل بنا</h4>
          <p className="text-gray-400">البريد الإلكتروني: info@dalilmadinah.com</p>
          <p className="text-gray-400">الهاتف: 0000 000 50 966+</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        &copy; {new Date().getFullYear()} دليل المدينة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
