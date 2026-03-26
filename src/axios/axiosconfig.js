import axios from "axios";

const httpRequest = axios.create({
    //请求后端的基础请求路径
    baseURL: "http://127.0.0.1:8080",
    //接口超时响应时间
    timeout: 10000
});
//请求拦截器
httpRequest.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token && token !== '') {
        config.headers['token'] = token;
    }
    return config;
})

//响应拦截器
httpRequest.interceptors.response.use(function (response) {
    const data = response.data;
    if (data) {
        if (data.code === '500') {
            window.alert(data.msg);
            throw new Error(data.msg);
        }
    }
    return data;
})
export default httpRequest;
