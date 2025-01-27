import axios from 'axios'

// Set up Axios interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // Add token to Authorization header
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axios
