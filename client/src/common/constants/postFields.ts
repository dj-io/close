import { removeFriend, removePost } from '../utils/posts.ts';

export const actionConfirm = [
    {
        removeFriend: {
            title: 'Are you sure you want to unfollow this friend?',
            description: 'You can always follow them back by visting there page or posts',
            link: 'Unfollow',
            func: removeFriend,
        },
        removePost: {
            title: 'Are you sure you want to delete this post?',
            description: 'Once you take this action it can not be undone.',
            link: 'Delete Post',
            func: removePost,
        },
    }
]