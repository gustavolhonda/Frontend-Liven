import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do seu backend
  withCredentials: true,
});

export default api;