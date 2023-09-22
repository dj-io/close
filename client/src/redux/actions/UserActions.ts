import { IRegisterPayload } from '../../common/api/user/Registration.Api.ts';
import { retreiveProfile } from '../../common/api/user/Users.Api.ts';
import { UserActions } from '../actionTypes/UserActionTypes.ts';


export const userHasAccount = (hasAccount: boolean) => ({
    type: UserActions.HAS_ACCOUNT,
    payload: hasAccount,
});

export const registration = (data: IRegisterPayload) => ({
    type: UserActions.REGISTER_USER,
    payload: registration(data),
})

export const profiles = (profile) => ({
    type: UserActions.RETRIEVE_USER_PROFILE,
    payload: profile,
});

export const feed = (users) => ({
    type: UserActions.RENDER_FEED,
    payload: users,
})