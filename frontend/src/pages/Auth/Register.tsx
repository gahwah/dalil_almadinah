import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../../services/authService';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('visitor');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.register({ email, password, role });
      navigate('/auth/login');
    } catch (err: any) {
      setError(err.response?.data?.error || 'فشل إنشاء الحساب');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-madinah-white">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border-t-4 border-madinah-green text-right">
        <h2 className="text-3xl font-bold text-center text-madinah-dark mb-8">إنشاء حساب جديد</h2>
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
          <div className="mb-4">
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
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">نوع الحساب:</label>
            <select 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-madinah-green"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <option value="visitor">زائر</option>
              <option value="guide">مرشد سياحي</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-madinah-gold text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200 font-semibold text-lg">
            إنشاء حساب
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">لديك حساب بالفعل؟ <Link to="/auth/login" className="text-madinah-green hover:underline">سجل دخولك هنا</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
