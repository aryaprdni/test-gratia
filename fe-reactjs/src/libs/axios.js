import axios from "axios";

export const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});


export const APIWithToken = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

APIWithToken.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});