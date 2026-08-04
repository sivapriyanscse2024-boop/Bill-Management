// Configured Axios instance shared by all service modules
// (base URL, auth token interceptor, error handling).
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
