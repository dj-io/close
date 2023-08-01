import { UserActions } from "../actionTypes/UserActionTypes.ts";


export const userHasAccount = (hasAccount: boolean) => ({
    type: UserActions.USER_ACCOUNT,
    payload: hasAccount,
});