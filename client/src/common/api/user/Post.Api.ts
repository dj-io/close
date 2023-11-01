import utils from '../AxiosInstance.ts';
import axios from 'axios';

const {
    REACT_APP_BASE_URL,
    REACT_APP_POST_ENDPOINT,
    REACT_APP_S3_POST_ENDPOINT,
    REACT_APP_LIKES_ENDPOINT
} = process.env;

export const retreivePost = async (postId: number) =>
    await utils.get(`${REACT_APP_POST_ENDPOINT}${postId}`);

export const deletePost = async (postId: number) =>
    await utils.delete(`${REACT_APP_POST_ENDPOINT}${postId}`)

export const uploadPostImage = async (id, formData) =>
    await utils.post(`${REACT_APP_POST_ENDPOINT}${id}${REACT_APP_S3_POST_ENDPOINT}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

export const postImageUrl = (id) =>
    id ? `${REACT_APP_BASE_URL}${REACT_APP_POST_ENDPOINT}${id}${REACT_APP_S3_POST_ENDPOINT}` : null

export const newComment = async (comment) =>
    await utils.patch(`${REACT_APP_POST_ENDPOINT}`, comment);

export const newLike = async (like) =>
    await utils.patch(`${REACT_APP_POST_ENDPOINT}`, like);

export const removeLike = async (likeId) =>
    await utils.delete(`${REACT_APP_LIKES_ENDPOINT}${likeId}`)
