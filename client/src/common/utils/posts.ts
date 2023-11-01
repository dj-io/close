import { deletePost } from '../api/user/Post.Api.ts';
import { retreiveProfile, unfollow } from '../api/user/Users.Api.ts';


export const renderPopList = (
    isRemoveable,
    handleAction,
    postId,
) => {
    let postList;
    return (
        postList = [
            {
                label: 'unfollow',
                action: () => handleAction('removeFriend', postId!)
            },
            isRemoveable && {
                label: 'remove',
                action: () => handleAction('removePost', postId!)
            }
        ]
    )
}

export const removePost = async (
    post,
    profiles,
    setOpen,
    user,
    window,
    setFollowedId,
    renderFeed,
) => {
    if (post?.id) {
        deletePost(post?.id)
            .then(async () => {

                // UPDATES PROFILE
                const newUser = await retreiveProfile(user?.id);
                if (newUser.status === 200) profiles(newUser?.data);

                //UPDATES HOME PAGE
                renderFeed && renderFeed();
            }).catch((err) => console.error('POST ERR: ', err))
        setOpen(post?.id, false);
        window && window();
    }

}

export const removeFriend = async (
    post,
    profiles,
    setOpen,
    user,
    window,
    setFollowedId,
    renderFeed,
) => {
    const followedIdSet = setFollowedId(post);

    if (followedIdSet) {
        unfollow(followedIdSet)
            .then(async () => {
                // UPDATES PROFILE
                const newUser = await retreiveProfile(user?.id);
                if (newUser.status === 200) profiles(newUser?.data);

                // UPDATES HOME PAGE
                renderFeed && renderFeed()

            }).catch((err) => console.error('POST ERR: ', err))

        setOpen(post?.id, false);
        window && window();
    }
}