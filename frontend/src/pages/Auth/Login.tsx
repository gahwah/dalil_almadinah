import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      if (response && response.data) {
        login(response.data.access_token, response.data.id_token, response.data.role);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'فشل تسجيل الدخول');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-madinah-white">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border-t-4 border-madinah-green text-right">
        <h2 className="text-3xl font-bold text-center text-madinah-dark mb-8">تسجيل الدخول إلى دليل المدينة</h2>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-madinah-green text-left" 
              dir="ltr"
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">كلمة المرور</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-madinah-green text-left" 
              dir="ltr"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-madinah-green text-white py-2 rounded-md hover:bg-green-700 transition duration-200 font-semibold text-lg">
            تسجيل الدخول
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">ليس لديك حساب؟ <Link to="/auth/register" className="text-madinah-gold hover:underline">أنشئ حساباً هنا</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
