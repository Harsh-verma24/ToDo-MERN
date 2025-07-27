import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Change this to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true, // Optional: sends cookies (useful for auth)
});

export default axiosInstance;