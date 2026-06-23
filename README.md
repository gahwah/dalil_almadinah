# 🕌 DALIL TAIBAH | دليل المدينة المنورة الرقمي

[![React](https://img.shields.io/badge/Frontend-React%20%2F%20Vite-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Django REST Framework](https://img.shields.io/badge/Backend-Django%20DRF-092E20?style=for-the-badge&logo=django)](https://www.django-rest-framework.org/)
[![Python](https://img.shields.io/badge/Language-Python%203.10%2B-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)
[![AWS Cognito](https://img.shields.io/badge/Auth-AWS%20Cognito-FF9900?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/cognito/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

---

## 📖 Overview | نبذة عن المشروع

### English
**DALIL TAIBAH** is an interactive, premium tourism guiding platform specifically designed for visitors to Al-Madinah Al-Munawwarah (طيبه الطيبة). The website aims to enrich the spiritual and cultural experiences of visitors by connecting them with historical landmarks, ancient mosques, and facilitating the booking of guided tours with certified multicultural, multilingual tour guides.

### العربية
**دليل طيبة (دليل المدينة المنورة الرقمي)** هو منصة سياحية إرشادية تفاعلية مصممة خصيصاً لزوار المدينة المنورة (طيبة الطيبة)، تهدف إلى إثراء تجربتهم الروحية والثقافية عبر ربطهم بالمعالم التاريخية والمساجد الأثرية، وتسهيل حجز الجولات السياحية مع مرشدين معتمدين متعددي الجنسيات واللغات.

---

## 🌟 Key Features | الميزات الرئيسية

### English
1. **Landmarks & Tours Exploration**: Browse detailed historical tours (e.g., Quba Mosque, Mount Uhud Battle site, Date Farms) with seamless filtering.
2. **AI Travel Planner**: Build instant, customized visit itineraries based on duration of stay, accommodation location, and personal interests.
3. **Certified Multicultural Guides**: Wide support for visitors' native languages (Arabic, Turkish, Indonesian, Urdu, French, English) with native guides.
4. **Local Currency Booking**: Secure and transparent checkout process displaying prices in Saudi Riyals (`ر.س`).
5. **Role-Based Access Control (RBAC)**:
   - **Visitor Dashboard**: Track active bookings and upcoming tours.
   - **Guide Dashboard**: Accept/reject booking requests, update availability, and manage guide profiles.
   - **Admin Dashboard**: Approve new guides and manage tour packages.
6. **Medina-Themed Print-Ready Poster**: An elegant `/poster` page styled using the official `Saudi` font, optimized for instant high-quality A4/A3 printing or PDF downloads.

### العربية
1. **استكشاف المعالم والجولات الدينية والتاريخية**: تصفح الجولات مثل (جولة مسجد قباء التاريخي، معركة جبل أحد، مزارع التمور) وتصفيتها بسهولة.
2. **مساعد الذكاء الاصطناعي (AI Travel Planner)**: إمكانية بناء خطة زيارة مخصصة فورياً بناءً على مدة إقامة الزائر واهتماماته التاريخية.
3. **مرشدين سياحيين معتمدين بلغات متعددة**: دعم واسع للغات الزوار عبر مرشدين من جنسيات مختلفة يتحدثون (العربية، التركية، الإندونيسية، الأوردو، الفرنسية، الإنجليزية).
4. **حجز فوري بالعملة المحلية**: نظام حجز آمن وميسر يعرض الأسعار بالريال السعودي (`ر.س`).
5. **لوحات تحكم متكاملة للأدوار (RBAC Dashboards)**:
   - **لوحة الزائر (Visitor)**: لمتابعة الحجوزات النشطة والرحلات القادمة.
   - **بوابة المرشد (Guide)**: لقبول أو رفض طلبات الحجز وإدارة الملف الشخصي واللغات.
   - **لوحة المسؤول (Admin)**: للموافقة على المرشدين الجدد وإدارة الجولات السياحية.
6. **ملصق تعريفي بطابع مديني مخصص للطباعة**: صفحة تفاعلية مخصصة تحت مسار `/poster` مصممة بخط `Saudi` الرسمي ومثالية للطباعة المباشرة بقياسات A4/A3 أو تحميلها بدقة عالية.

---

## 🛠️ Tech Stack | البنية التقنية

* **Frontend**: React / TypeScript / Vite / Tailwind CSS
* **Localization & RTL**: i18next (Fully RTL formatted in Arabic with a custom `Saudi` typography layout)
* **Backend**: Django REST Framework (DRF)
* **Database**: PostgreSQL / Django ORM
* **Authentication & Identity**: AWS Cognito (JWT-based secure authentication)
* **Concurrent Runner**: Concurrently (to start both frontend & backend with a single command)

---

## 📂 Project Structure | هيكل المشروع

```bash
├── backend/            # Django REST API backend (Models, Views, Authentication, Database)
├── frontend/           # React SPA frontend (Components, Dashboards, Poster, i18n, Tailwind)
├── package.json        # Root package.json managing concurrent dev servers and setup
└── README.md           # Project documentation and setup guide
```

---

## 🚀 Setup & Execution | خطوات تشغيل المشروع محلياً

### Prerequisites | المتطلبات الأساسية
- **Node.js** (v18.0.0 or higher)
- **Python** (v3.10 or higher)

---

### Option A: The Quick Way (Concurrent Running) | الخيار الأول: التشغيل السريع المتزامن
The root project includes configuration to automatically install and run both frontend and backend servers together.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gahwah/dalil_almadinah.git
   cd dalil_almadinah
   ```

2. **Initialize and install all dependencies**:
   Run this from the project root. It will automatically trigger `npm install` inside the `frontend` folder as well:
   ```bash
   npm install
   ```

3. **Set up the backend virtual environment & database**:
   - In a terminal at the root directory, create the virtual environment:
     - **macOS / Linux**:
       ```bash
       python3 -m venv .venv
       source .venv/bin/activate
       pip install -r backend/requirements.txt
       python backend/manage.py migrate
       ```
     - **Windows**:
       ```bash
       python -m venv .venv
       .venv\Scripts\activate
       pip install -r backend/requirements.txt
       python backend/manage.py migrate
       ```

4. **Run both servers concurrently**:
   ```bash
   npm run dev
   ```
   * **Frontend Dev Server**: running at [http://localhost:5173](http://localhost:5173)
   * **Backend API Server**: running at [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### Option B: Step-by-Step Manual Running | الخيار الثاني: تشغيل كل خادم على حدة

#### 1. Backend Setup & Run (Django)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate virtual environment:
   - **macOS / Linux**:
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```
   - **Windows**:
     ```bash
     python -m venv .venv
     .venv\Scripts\activate
     ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Run the server:
   ```bash
   python manage.py runserver
   ```
   *API will run at:* [http://127.0.0.1:8000](http://127.0.0.1:8000)

#### 2. Frontend Setup & Run (React + Vite)
1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install npm packages:
   ```bash
   npm install
   ```
3. Start Vite dev server:
   ```bash
   npm run dev
   ```
   *Frontend will run at:* [http://localhost:5173](http://localhost:5173)

---

## 🖨️ Project Poster Page | صفحة الملصق التعريفي

The project features a dedicated printable poster displaying the workflow, tech stack, and tourist experience. 
* Access it directly at the path: `/poster` (or via the **ملصق المشروع** links in the header and footer).
* Features built-in CSS `@media print` configurations for perfect scaling to physical papers (A4/A3) or high-quality PDF files.
* Includes a download option directly to your local computer.
