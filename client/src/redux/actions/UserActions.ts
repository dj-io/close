import { UserActions } from "../actionTypes/UserActionTypes";


export const userHasAccount = (hasAccount: boolean) => ({
    type: UserActions.USER_ACCOUNT,
    payload: hasAccount,
});