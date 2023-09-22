import utils from '../AxiosInstance.ts';
import axios from 'axios';

const { REACT_APP_POST_ENDPOINT } = process.env;

export const retreivePost = async (postId: number) => await utils.get(`${REACT_APP_POST_ENDPOINT}${postId}`);

export const newComment = async (comment) => await utils.patch(`${REACT_APP_POST_ENDPOINT}`, comment);
