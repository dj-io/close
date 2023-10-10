import { AuthActions } from '../actionTypes/AuthActionTypes.ts';


export const login = (userLogin: any) => ({
    type: AuthActions.AUTHENTICATE_USER,
    payload: userLogin,
});

export const logout = () => ({
    type: AuthActions.LOGOUT,
    payload: null,
})