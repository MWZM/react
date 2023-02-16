import axios from 'axios'
import { getToken } from './auth'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  }
});

// request拦截器 设置请求头
request.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()
  return config
}, error => {
  Promise.reject(error)
})

export default request