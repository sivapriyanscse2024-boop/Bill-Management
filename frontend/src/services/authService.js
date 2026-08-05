// API calls for authentication (login, logout, password reset, session).
import api from "./api";

const authService = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
};

export default authService;
