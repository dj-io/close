import { AuthActions } from '../actionTypes/AuthActionTypes.ts';


export const login = (userLogin: any) => ({
    type: AuthActions.AUTHENTICATE_USER,
    payload: userLogin,
});

export const logout = () => ({
    type: AuthActions.LOGOUT,
    payload: null,
})

export const expiredToken = (isExpired: boolean) => ({
    type: AuthActions.EXPIRED_TOKEN,
    payload: isExpired
})