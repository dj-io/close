import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShortTextIcon from '@mui/icons-material/ShortText';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { PostCard } from '../../common/components/cards/PostCard.tsx';
import { retreiveProfile } from '../../common/api/user/Users.Api.ts';
import { retreivePost, newComment } from '../../common/api/user/Post.Api.ts';

interface IPost {

}


export const Post: React.FC<IPost> = () => {

    const [open, setOpen] = useState(true);
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [text, setText] = useState({
        comment: '',
        likes: 0
    });
    const [newComments, setNewComments] = useState({
        comment: '',
        likes: 0
    });

    const handleChange = (e) => {
        setText({
            ...text,
            comment: e.target.value
        })
    }

    const postId = useParams().post;

    const returnPost = async () => {
        const res = await retreivePost(postId)
        setPost(res.data)
    }

    const returnUser = async () => {
        const res = await retreiveProfile(post?.user_id)
        setUser(res.data)
    }

    const addComment = async (comment) => {
        const data = {
            ...post,
            comment: [
                ...post.comment,
                text
            ]
        };

        const res = await newComment(data);
        setNewComments(res.data);
        setText({ comment: '' })
    }


    useEffect(() => {
        returnPost();

        if (post.user_id) returnUser();
    }, [
        postId,
        post.user_id,
        newComments
    ]);

    return (
        <ConfirmDialog
            isOpen={open}
            openDialog={() => setOpen(true)}
            closeDialog={() => setOpen(false)}
            label={<ShortTextIcon />}
            title={user.username}
            spacing={2}
        >
            <PostCard
                page="user"
                func={addComment}
                change={handleChange}
                post={post}
                user={user}
                value={text.comment}
                expand={true}
            />
        </ConfirmDialog>
    );
}