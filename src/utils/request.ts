// api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.example.com', // 设置基本的 API URL
    timeout: 5000, // 设置请求超时时间
    headers: { 'Content-Type': 'application/json' } // 设置默认的请求头
});

// 自定义请求拦截器
instance.interceptors.request.use(
    config => {
        // 在请求发送之前可以进行一些处理，例如添加 token 等
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 自定义响应拦截器
instance.interceptors.response.use(
    response => {
        // 在接收到响应数据之前可以进行一些处理，例如处理错误状态码等
        return response;
    },
    error => {
        // 处理响应错误
        return Promise.reject(error);
    }
);

export default instance;
