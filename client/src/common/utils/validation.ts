import * as yup from 'yup';
import { UserActionTypes } from '../enums/UserActionType.ts';

export const validationSchema = yup.object({

})

export const signupSchema = yup.object({
    name: yup.string().required(UserActionTypes.FULL_NAME),
    email: yup.string()
        .email(UserActionTypes.IS_VALID_EMAIL)
        .required(UserActionTypes.EMAIL),
    username: yup.string().required(UserActionTypes.USER_NAME),
    password: yup.string()
        .max(11, UserActionTypes.PASSWORD_LENGTH)
        .required(UserActionTypes.PASSWORD),
});

export const signinSchema = yup.object({
    username: yup.string().required(UserActionTypes.USER_NAME),
    password: yup.string().required(UserActionTypes.PASSWORD),
});

export const profileSchema = yup.object({

});