import axios from 'axios';

const service = axios.create({
  // responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  // timeout: 6000 // 请求超时时间
});

export default service