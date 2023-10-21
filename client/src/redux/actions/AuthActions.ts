import { AuthActions } from '../actionTypes/AuthActionTypes.ts';


export const login = (userToken: any) => ({
    type: AuthActions.AUTHENTICATE_TOKEN,
    payload: userToken,
});

export const logout = () => ({
    type: AuthActions.LOGOUT,
    payload: null,
});

export const userCredentials = (userLogin: any) => ({
    type: AuthActions.AUTHENTICATED_USER,
    payload: userLogin,
});

export const expiredToken = (isExpired: boolean) => ({
    type: AuthActions.EXPIRED_TOKEN,
    payload: isExpired
});