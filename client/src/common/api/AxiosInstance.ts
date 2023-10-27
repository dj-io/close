import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../../index.js';
import { expiredToken } from '../../redux/actions/AuthActions.ts';

const { REACT_APP_BASE_URL } = process.env;


const utils = axios.create({
    baseURL: `${REACT_APP_BASE_URL}`,
    // headers: {
    //     Accept: 'application/json',
    // },
});

utils.interceptors.request.use((request) => {
    const state = store && store.getState();
    const token = state?.AuthState?.token;
    const isExpired = state?.AuthState?.isExpired;

    if (token) request.headers["Authorization"] = `Bearer ${token}`;

    console.log(' request sent ')

    return request;
}, (err) => {
    return Promise.reject(err)
});

utils.interceptors.response.use(
    (response) => {
        console.log(' got response ')
        return response;
    }, (err) => {
        console.log(`ERR: ${err}`)
        const error = `${err}`;
        // if (error.endsWith('401')) store.dispatch(expiredToken(true)); // TODO: Implement precise auth token exp. logic for tokenExp exec.
        // if (err.response.status === 404) throw err.response; // SET UP 404 NOT FOUND PAGE 
        return Promise.reject(err)
    })

export default utils;