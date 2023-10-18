import { UserActions } from "../actionTypes/UserActionTypes.ts";

export interface UserStateConfig {
    hasAccount: boolean;
    userProfile: any; //TODO: Create IProfile
}

const initialState: UserStateConfig = {
    hasAccount: true,
    user: {},
    following: {}
}

export default function reduce(state: UserStateConfig = initialState, action: any) {
    switch (action.type) {
        case UserActions.HAS_ACCOUNT: {
            return {
                ...state,
                hasAccount: action.payload,
            }
        }

        case `${UserActions.RETRIEVE_USER_PROFILE}`: {
            return {
                ...state,
                user: action.payload,
            }
        }

        case `${UserActions.RENDER_FEED}`: {
            return {
                ...state,
                following: action.payload
            }
        }



        default: {
            return {
                ...state,
            }
        }
    }
}