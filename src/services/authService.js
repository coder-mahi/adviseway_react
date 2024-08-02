import axios from 'axios';

const API_URL = '/api/auth/';

const login = async (email, password) => {
  const response = await axios.post(API_URL + 'login', { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (name, email, password, role) => {
  const response = await axios.post(API_URL + 'register', { name, email, password, role });
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
