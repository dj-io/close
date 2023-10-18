import utils from '../AxiosInstance.ts';
import axios from 'axios';

const { REACT_APP_TOKEN_ENDPOINT } = process.env;

export const auth = async (payload: any) => {

    try {
        const res = await utils.post(`${REACT_APP_TOKEN_ENDPOINT}`, payload)
        return res;
    } catch (e) {
        // do something
    }

} 
