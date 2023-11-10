import { profiles } from '../../../redux/actions/UserActions.ts';
import utils from '../AxiosInstance.ts';
import axios from 'axios';

const {
    REACT_APP_BASE_URL,
    REACT_APP_USERS_ENDPOINT,
    REACT_APP_POST_ENDPOINT,
    REACT_APP_FOLLOWING_ENDPOINT,
    REACT_APP_S3_IMAGE_ENDPOINT
} = process.env;

export const returnUsers = async () =>
    await utils.get(`${REACT_APP_USERS_ENDPOINT}`);

export const retreiveProfile = async (profileId: number) =>
    await utils.get(`${REACT_APP_USERS_ENDPOINT}${profileId}`);

export const uploadProfilePic = async (id, formData) =>
    await utils.post(`${REACT_APP_USERS_ENDPOINT}${id}${REACT_APP_S3_IMAGE_ENDPOINT}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

export const profilePicUrl = (id) =>
    id ? `${REACT_APP_BASE_URL}${REACT_APP_USERS_ENDPOINT}${id}${REACT_APP_S3_IMAGE_ENDPOINT}` : null

export const find = async (field: string) => {
    const payload = {
        params: {
            username: `${field}`,
        }
    }

    return await utils.get(`${REACT_APP_USERS_ENDPOINT}search`, payload)
}

export const findfuzzy = async (field: string) => {
    const payload = {
        params: {
            username: `${field}`,
        }
    }

    return await utils.get(`${REACT_APP_USERS_ENDPOINT}find`, payload)
}


export const share = async (post) =>
    await utils.patch(`${REACT_APP_USERS_ENDPOINT}`, post);

export const unfollow = async (followedId) =>
    await utils.delete(`${REACT_APP_FOLLOWING_ENDPOINT}${followedId}`)

