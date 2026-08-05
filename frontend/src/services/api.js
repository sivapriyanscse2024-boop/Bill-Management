// Configured Axios instance shared by all service modules
// (base URL, auth token interceptor, error handling).
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  try {
    const stored = localStorage.getItem("auth");
    const { token } = stored ? JSON.parse(stored) : {};
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch {
    // malformed storage — proceed unauthenticated
  }
  return config;
});

export default api;
