import { AuthActions } from "../actionTypes/AuthActionTypes.ts";

export interface AuthStateConfig {

}

const initialState: AuthStateConfig = {
    authenticatedUser: null,
    token: null,
    isExpired: false,
    returnUrl: '/'
}

export default function reduce(state: AuthStateConfig = initialState, action: any) {
    switch (action.type) {
        case AuthActions.AUTHENTICATE_USER: {
            return {
                ...state,
                token: action.payload,
            }
        }

        case AuthActions.LOGOUT: {
            return {
                ...state,
                token: action.payload
            }
        }

        case AuthActions.EXPIRED_TOKEN: {
            return {
                ...state,
                isExpired: action.payload
            }
        }


        default: {
            return {
                ...state,
            }
        }
    }
}