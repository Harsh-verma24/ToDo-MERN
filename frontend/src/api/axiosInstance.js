import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Change this to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true, // Optional: sends cookies (useful for auth)
});

export default axiosInstance;