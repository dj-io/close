import { AppActions } from "../actionTypes/AppActionTypes.ts";

export interface UserStateConfig {

}

const initialState: UserStateConfig = {
    isFindOpen: false,
}

export default function reduce(state: UserStateConfig = initialState, action: any) {
    switch (action.type) {
        case AppActions.OPEN_FIND: {
            return {
                ...state,
                isFindOpen: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}