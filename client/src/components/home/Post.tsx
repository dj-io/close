import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShortTextIcon from '@mui/icons-material/ShortText';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { PostCard } from '../../common/components/cards/PostCard.tsx';

interface IPost {

}


export const Post: React.FC<IPost> = () => {

    const [open, setOpen] = useState(true);

    const posts = [{
        id: 1,
        picture: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        userName: 'gleam',
        post: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        likes: 2,
        caption: 'hello world',
        comments: [{
            userName: 'yoomeng',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic fr',
            commentTime: 'now'

        }],
        commentTime: 'now'
    },
    {
        id: 2,
        picture: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        userName: 'nelle',
        post: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500J',
        likes: 2,
        caption: 'hello world',
        comments: [{
            userName: 'hello',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic fr',
            commentTime: 'now'

        },
        {
            userName: 'yerp',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic ',
            commentTime: 'later'

        }],
        commentTime: 'now'
    },
    {
        id: 3,
        picture: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        userName: 'Mr Sir',
        post: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        likes: 2,
        caption: 'yupski',
        comments: [{
            userName: 'thisguy',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic g',
            commentTime: 'now'

        },
        {
            userName: 'yerp',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic ',
            commentTime: 'later'

        }],
        commentTime: 'now'
    }]

    const postId = useParams().post
    const post = posts.find((post) => post.id == postId)

    return (
        <ConfirmDialog
            isOpen={open}
            openDialog={() => setOpen(true)}
            closeDialog={() => setOpen(false)}
            label={<ShortTextIcon />}
            title={post.userName}
            spacing={2}
        >
            <PostCard
                postId={post.id}
                avatar={post.picture}
                userName={post.userName}
                media={post.post}
                likes={post.likes}
                caption={post.caption}
                comments={post.comments}
                commentTime={post.commentTime}
                expand={true}
            />
        </ConfirmDialog>
    );
}