import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShortTextIcon from '@mui/icons-material/ShortText';
import HideImageTwoToneIcon from '@mui/icons-material/HideImageTwoTone';
import CrisisAlertTwoToneIcon from '@mui/icons-material/CrisisAlertTwoTone';
import { Grid } from '@mui/material';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { PostCard } from '../../common/components/cards/PostCard.tsx';
import { find, profilePicUrl, retreiveProfile, share, unfollow } from '../../common/api/user/Users.Api.ts';
import { retreivePost, newComment, deletePost, newLike, removeLike } from '../../common/api/user/Post.Api.ts';
import { ConfirmStatus } from '../../common/components/panels/ConfirmStatus.tsx';
import { renderPopList } from '../../common/utils/posts.ts';
import { actionConfirm } from '../../common/constants/postFields.ts';

interface IPost {

}


export const Post: React.FC<IPost> = ({ currentUser, profiles }) => {

    const [open, setOpen] = useState(true);
    const [isConfirming, setIsConfirming] = useState(false);
    const [newFollowId, setNewFollowId] = useState('');
    const [actionLabel, setActionLabel] = useState('');
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [newLikes, setNewLikes] = useState({
        username: currentUser?.username,
        name: currentUser?.name,
        user_id: currentUser?.id
    });
    const [likes, setLikes] = useState({})
    const [newComments, setNewComments] = useState({
        comment: '',
        user_id: currentUser?.id,
        username: currentUser?.username,
        likes: 0
    });
    const [text, setText] = useState({
        comment: '',
        likes: 0
    });

    const postId = useParams().post;
    const removeable = post?.user_id === currentUser?.id;
    const postLiked = post?.like?.map((like) => like).find(id => id.user_id === currentUser?.id)

    const handleChange = (e) => {
        setNewComments({
            ...newComments,
            comment: e.target.value
        })
    }

    const handlePopActions = (popLabel) => {
        setActionLabel(popLabel);
        setIsConfirming(true);
    }

    // returning selected post
    const returnPost = async () => {
        const res = await retreivePost(postId);
        setPost(res.data);
    }

    // returning user associated with post
    const returnUser = async () => {
        const res = await retreiveProfile(post?.user_id);
        setUser(res.data);
    }

    // comment added from viewer of post (user logged in)
    const addComment = async () => {
        const data = {
            ...post,
            comment: [
                ...post.comment,
                newComments
            ]
        };

        if (currentUser) {
            const res = await newComment(data);
            setText(res.data);
            setNewComments({ comment: '' })
        }

    }

    const addLike = async () => {
        const data = {
            ...post,
            like: [
                ...post.like,
                newLikes
            ]
        }

        if (currentUser) {
            const res = await newLike(data);
            setLikes(res.data);
        }
    }

    const unlike = async () => {
        const res = await removeLike(postLiked?.id);
        if (res.status === 200) returnPost();
    }

    const follow = async (friend) => {
        const { authorities, ...rest } = currentUser;
        const data = {
            ...rest,
            followed: [
                ...currentUser.followed,
                { followedId: friend.user_id }
            ]
        };

        const user = await share(data);
        profiles(user.data);

    }

    const setFollowedId = (post) => {

        // SETS FOLLOWING OBJ ID FOR UNFOLLOW
        const followedUserId = currentUser?.followed?.map((follows) => follows)
            .find(id => id.followedId === post.user_id);

        return followedUserId?.id;
    }

    useEffect(() => {
        returnPost();

        if (post?.user_id) returnUser();
    }, [
        postId,
        post?.user_id,
        likes,
        text
    ]);

    return (
        <ConfirmDialog
            isOpen={open}
            openDialog={() => setOpen(true)}
            closeDialog={() => setOpen(false)}
            label={<ShortTextIcon />}
            title={user?.username}
            spacing={2}
            enableClose={true}
            enableBack={isConfirming}
            back={() => setIsConfirming(false)}
        >
            {!isConfirming ? (
                <PostCard
                    page="user"
                    func={addComment}
                    like={postLiked ? unlike : addLike}
                    follow={follow}
                    popItems={renderPopList(removeable, handlePopActions)}
                    change={handleChange}
                    post={post}
                    user={user}
                    currentUser={currentUser}
                    value={newComments?.comment}
                    expand={true}
                />

            ) : (
                actionConfirm.map((action) => (
                    <ConfirmStatus
                        icon={<CrisisAlertTwoToneIcon fontSize="large" />}
                        title={action[actionLabel].title}
                        description={action[actionLabel].description}
                        link={action[actionLabel].link}
                        func={
                            () => action[actionLabel].func(
                                post,
                                profiles,
                                setOpen,
                                currentUser,
                                window.history.back(),
                                setFollowedId,
                            )
                        }
                    />
                ))
            )}
        </ConfirmDialog>
    );
}