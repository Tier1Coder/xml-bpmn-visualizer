import axios from 'axios';
import { refreshToken } from './AuthService';

/**
 * Creates an Axios instance with a base URL and interceptors for handling
 * authorization tokens and refreshing tokens when they expire.
 */
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Interceptor for adding the access token to the request headers.
 */
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Interceptor for handling responses. If a 401 error is encountered, it attempts
 * to refresh the access token using the refresh token.
 */
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await refreshToken();
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                // Redirect to login page if refresh token is blacklisted
                if (err.response && err.response.data.code === 'token_not_valid') {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/';
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
