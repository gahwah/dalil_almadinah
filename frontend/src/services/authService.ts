import api from './api';

export const authService = {
  login: async (credentials: any) => {
    return await api.post('/auth/login/', credentials);
  },
  register: async (userData: any) => {
    return await api.post('/auth/register/', userData);
  },
  googleLogin: async (token: string) => {
    return await api.post('/auth/google/', { token });
  }
};
