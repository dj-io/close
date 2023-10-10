import utils from '../AxiosInstance.ts';

const { REACT_APP_REGISTRATION_ENDPOINT } = process.env;

export interface IRegisterPayload {
    username: string;
    email: string;
    password: string;
    name: string;
}

export const register = async (payload: IRegisterPayload) => await utils.post(`${REACT_APP_REGISTRATION_ENDPOINT}`, payload);