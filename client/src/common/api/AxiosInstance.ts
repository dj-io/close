import axios, { AxiosRequestConfig } from 'axios';

const utils = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
    },
});

utils.interceptors.request.use((request) => {
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
        console.log(`ERR: ${err.response}`)
        // if (err.response.status === 404) throw err.response; // SET UP 404 NOT FOUND PAGE 
        return Promise.reject(err)
    })

export default utils;