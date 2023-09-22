import { AppActions } from "../actionTypes/AppActionTypes.ts";

export const openFind = (isFindOpen: boolean) => ({
    type: AppActions.OPEN_FIND,
    payload: isFindOpen,
});

export const returnFind = (user) => ({
    type: AppActions.FIND_USER,
    payload: user,
});