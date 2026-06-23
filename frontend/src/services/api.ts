import axios from 'axios';

// Base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for token handling
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getTours = async () => {
  const response = await api.get('/tours/');
  return response.data;
};

export const getTourById = async (id: string | number) => {
  const response = await api.get(`/tours/${id}/`);
  return response.data;
};

export const getGuides = async () => {
  const response = await api.get('/guides/');
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get('/bookings/');
  return response.data;
};

export const createBooking = async (data: any) => {
  const response = await api.post('/bookings/', data);
  return response.data;
};

export default api;
