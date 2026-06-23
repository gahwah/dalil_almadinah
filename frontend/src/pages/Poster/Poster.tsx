import { Compass, Bot, UserCheck, CalendarCheck, Layers, RefreshCw, MapPin, Globe, Shield, Wallet, BookOpen } from 'lucide-react';

const Poster = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 md:p-8 font-sans" dir="rtl">
      
      {/* Action Controls */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-6 flex-row-reverse">
        <h2 className="text-xl font-bold text-white font-arabic">الملصق التعريفي للمشروع</h2>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="bg-madinah-green hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-lg flex items-center gap-2 border border-green-600 text-sm"
          >
            <span>طباعة الملصق</span>
            <span>🖨️</span>
          </button>
        </div>
      </div>

      {/* Main Printable Poster - Rendered dynamically via React using site Saudi font */}
      <div id="printable-poster-card" className="w-full max-w-7xl aspect-[16/9] bg-[#0c2e1f] text-white rounded-3xl border-8 border-madinah-gold shadow-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
        
        {/* Decorative Islamic Geometric Patterns (Watermarks) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-madinah-gold opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-madinah-green opacity-20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Title Banner */}
        <div className="text-center relative z-10 border-b border-gray-800 border-opacity-40 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-madinah-gold font-arabic mb-1">
            موقع دليل المدينة المنورة الرقمي
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-light">
            منصة سياحية إرشادية تفاعلية لربط الزوار بالمعالم التاريخية والمساجد الأثرية والمرشدين المعتمدين
          </p>
        </div>

        {/* Poster Grid Section */}
        <div className="grid grid-cols-12 gap-6 my-4 flex-grow items-stretch relative z-10">
          
          {/* Right Column: Platform Features (3 columns) */}
          <div className="col-span-3 bg-slate-950 bg-opacity-40 border border-gray-800 border-opacity-65 rounded-2xl p-4 flex flex-col justify-between text-right">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-800 border-opacity-50 pb-2">
                <Globe size={18} className="text-madinah-gold" />
                <h3 className="text-madinah-gold font-bold text-sm font-arabic">مزايا ومواصفات الموقع</h3>
              </div>

              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-2 flex-row-reverse">
                  <span className="bg-[#123826] text-madinah-gold p-1.5 rounded-lg mt-0.5"><Globe size={14} /></span>
                  <div className="text-right">
                    <h5 className="text-xs font-bold text-white">دعم لغات متعددة</h5>
                    <p className="text-gray-300 text-[10px] leading-snug mt-0.5">تغطية لغات الزوار (العربية، الإنجليزية، التركية، الإندونيسية، الأوردو).</p>
                  </div>
                </li>

                <li className="flex items-start gap-2 flex-row-reverse">
                  <span className="bg-[#123826] text-madinah-gold p-1.5 rounded-lg mt-0.5"><Shield size={14} /></span>
                  <div className="text-right">
                    <h5 className="text-xs font-bold text-white">صلاحيات حماية مخصصة</h5>
                    <p className="text-gray-300 text-[10px] leading-snug mt-0.5">توثيق هوية آمن للفصل بين لوحات الزوار، المرشدين، والمسؤولين.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2 flex-row-reverse">
                  <span className="bg-[#123826] text-madinah-gold p-1.5 rounded-lg mt-0.5"><Wallet size={14} /></span>
                  <div className="text-right">
                    <h5 className="text-xs font-bold text-white">العملة والتوثيق المحلي</h5>
                    <p className="text-gray-300 text-[10px] leading-snug mt-0.5">توفير تسعير مباشر وحجوزات رقمية بالريال السعودي (ر.س).</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tech Stack Info Block */}
            <div className="bg-[#0f3d29] border border-gray-800 border-opacity-50 rounded-xl p-3 text-right">
              <h4 className="text-xs font-bold text-madinah-gold mb-1.5">البنية والتقنيات البرمجية</h4>
              <div className="grid grid-cols-2 gap-1 text-[9px] text-gray-200">
                <div>• واجهات ريأكت</div>
                <div>• قواعد بيانات</div>
                <div>• معالجة لغات</div>
                <div>• توثيق كوجنيتو</div>
              </div>
            </div>
          </div>

          {/* Middle Column: 6-Step Journey Flow (5 columns) */}
          <div className="col-span-5 bg-slate-950 bg-opacity-40 border border-gray-800 border-opacity-65 rounded-2xl p-4 flex flex-col justify-between">
            <h3 className="text-madinah-gold font-bold text-sm border-b border-gray-800 border-opacity-50 pb-2 flex items-center gap-1 justify-start">
              <BookOpen size={16} /> دورة حياة الخدمة ودورة حجز الرحلات
            </h3>

            {/* Vertical/Horizontal step pipeline cards */}
            <div className="grid grid-cols-2 gap-3 flex-grow my-2">
              
              {/* Step 1 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">١</span>
                  <Compass className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">الاستكشاف والبحث</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">تصفح المعالم والجولات وتصفيتها بحسب التواريخ والمساجد.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">٢</span>
                  <Bot className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">مساعد الذكاء الاصطناعي</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">تخطيط فوري لبرامج الزيارة مقترح بناءً على اهتمامات الزائر.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">٣</span>
                  <UserCheck className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">المرشدين السياحيين</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">استعراض تفاصيل وتقييمات المرشدين السياحيين المعتمدين.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">٤</span>
                  <CalendarCheck className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">الحجز الفوري</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">تحديد التواريخ المناسبة للجولة وتأكيد الحجز وتوثيقه.</p>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">٥</span>
                  <Layers className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">تزامن لوحات التحكم</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">إرسال التنبيهات وإدارة الصلاحيات وقبول الحجوزات فورياً.</p>
              </div>

              {/* Step 6 */}
              <div className="bg-slate-950 bg-opacity-60 border border-gray-800 rounded-xl p-3 flex flex-col justify-between text-right">
                <div className="flex justify-between items-start flex-row-reverse">
                  <span className="bg-madinah-gold text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">٦</span>
                  <RefreshCw className="text-madinah-gold" size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mt-1">التقييم والتغذية الراجعة</h4>
                <p className="text-gray-300 text-[9px] mt-0.5 leading-snug">تقييم جودة خدمات الجولة ومرشدها لضمان استدامة الخدمة.</p>
              </div>

            </div>
          </div>

          {/* Left Column: Visual Landmarks Gallery & Map (4 columns) */}
          <div className="col-span-4 bg-slate-950 bg-opacity-40 border border-gray-800 border-opacity-65 rounded-2xl p-4 flex flex-col justify-between text-right">
            <h3 className="text-madinah-gold font-bold text-sm mb-2 flex items-center gap-1 border-b border-gray-800 border-opacity-50 pb-2">
              <MapPin size={16} /> معالم المدينة والجولات النشطة
            </h3>

            {/* Map Preview Graphic */}
            <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-slate-950 flex items-center justify-center h-28 lg:h-36">
              <img 
                src="https://images.unsplash.com/photo-1598977123118-4e50bb6c469b?q=80&w=600&auto=format&fit=crop" 
                alt="Medina Map" 
                className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
              />
              
              {/* Pulsing Indicators */}
              <div className="absolute top-1/4 right-1/3 flex flex-col items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="bg-slate-950 border border-madinah-green text-[8px] px-1 rounded mt-0.5 whitespace-nowrap">مسجد قباء</span>
              </div>

              <div className="absolute top-2/3 left-1/4 flex flex-col items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="bg-slate-950 border border-madinah-green text-[8px] px-1 rounded mt-0.5 whitespace-nowrap">جبل أحد</span>
              </div>
            </div>

            {/* Attracton Photo grid */}
            <div className="mt-2">
              <div className="grid grid-cols-4 gap-1.5">
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-10">
                  <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                    <span className="text-[7px] text-white font-bold pb-0.5">الحرم النبوي</span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-10">
                  <img src="https://images.unsplash.com/photo-1598977123118-4e50bb6c469b?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                    <span className="text-[7px] text-white font-bold pb-0.5">مسجد قباء</span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-10">
                  <img src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                    <span className="text-[7px] text-white font-bold pb-0.5">جبل أحد</span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-10">
                  <img src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                    <span className="text-[7px] text-white font-bold pb-0.5">مزارع التمور</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-[9px] leading-relaxed mt-2">
              مسارات جغرافية نشطة وتكامل مباشر مع بيانات الجولات السياحية.
            </p>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-850 pt-4 flex flex-col sm:flex-row justify-between items-center relative z-10 flex-row-reverse text-right">
          <div className="flex items-center gap-2 text-madinah-green font-bold text-lg mb-2 sm:mb-0">
            <span className="text-madinah-gold text-2xl">دليل</span>
            <span>المدينة</span>
          </div>
          <p className="text-gray-400 text-[10px] flex items-center gap-1">
            منصة مخصصة ومؤمنة بالكامل لحماية بيانات وهوية الحجاج والمعتمرين والزوار.
          </p>
        </div>

      </div>

      {/* Styled Printable media styling */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-poster-card, #printable-poster-card * {
            visibility: visible;
          }
          #printable-poster-card {
            position: absolute;
            left: 0;
            top: 0;
            width: 297mm; /* Landscape A4 width */
            height: 210mm; /* Landscape A4 height */
            background-color: #0c2e1f !important;
            border: 8px solid #c5a85c !important;
            padding: 24px !important;
            margin: 0 !important;
            box-shadow: none !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .min-h-screen {
            padding: 0 !important;
            margin: 0 !important;
          }
          /* Ensure all background colors print correctly in browsers */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Poster;
