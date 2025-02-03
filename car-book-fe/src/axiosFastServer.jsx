import axios from 'axios'

const axiosFastApi = axios.create({
    baseURL: import.meta.env.VITE_FASTAPI_URL
});

export default axiosFastApi;