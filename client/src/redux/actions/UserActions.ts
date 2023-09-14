import { IRegisterPayload } from '../../common/api/user/Registration.Api.ts';
import { UserActions } from '../actionTypes/UserActionTypes.ts';


export const userHasAccount = (hasAccount: boolean) => ({
    type: UserActions.USER_ACCOUNT,
    payload: hasAccount,
});

export const registration = (data: IRegisterPayload) => ({
    type: UserActions.REGISTER_USER,
    payload: registration(data),
})

export const find = () => ({

});