import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


const instance = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: (`${API_URL}/api`),
  // baseURL: "http://localhost:5000",
  baseURL: (`${API_URL}`),

});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')

  return config
});

export default instance;
