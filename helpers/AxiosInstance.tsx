import axios from 'axios';
import qs from 'qs';

export const httpApiRecipeGetRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
});

httpApiRecipeGetRequest.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['app_key'] = process.env.NEXT_PUBLIC_APP_KEY;
    config.params['app_id'] = process.env.NEXT_PUBLIC_APP_ID;
    config.params['type'] = 'public';
    return config;
});