import axios from 'axios';

const service = axios.create({
  // responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  timeout: 6000 // 请求超时时间
});
service.interceptors.request.use((config) => {
  config.withCredentials = true
  return config
}, (error) => {
  return Promise.reject(error)
})

export default service