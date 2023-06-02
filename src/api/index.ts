/* eslint-disable no-param-reassign */
import axios from "axios";
// eslint-disable-next-line import/no-cycle

const axiosApiInstance = axios.create({});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosApiInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        return Promise.reject(err);
    }
);

export default axiosApiInstance;
