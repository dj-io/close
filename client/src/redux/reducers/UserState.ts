import { UserActions } from "../actionTypes/UserActionTypes.ts";

export interface UserStateConfig {

}

const initialState: UserStateConfig = {
    hasAccount: true,
}

export default function reduce(state: UserStateConfig = initialState, action: any) {
    switch (action.type) {
        case UserActions.USER_ACCOUNT: {
            return {
                ...state,
                hasAccount: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}