import * as React from 'react';
import Grid from '@mui/material/Grid';
import { PostCard } from '../../common/components/cards/PostCard.tsx';


interface IHomeProps {

}

interface IHomeState {

}

export type HomeProps = IHomeStateToProps & IHomeDispatchToProps & IHomeProps;

/**
 * Home class Component
 * @class Home @extends React.Component<HomeProps>
 */
class Home extends React.Component<HomeProps> {
    state: IHomeState = {

    }

    posts = [{
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

        }, {
            userName: 'yerp',
            picture: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
            comment: 'this a dope pic ',
            commentTime: 'later'

        }],
        commentTime: 'now'
    }
    ]

    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '45vh', }}
            >

                {this.posts.map((post) => (
                    <PostCard
                        postId={post.id}
                        avatar={post.picture}
                        userName={post.userName}
                        media={post.post}
                        likes={post.likes}
                        caption={post.caption}
                        comments={post.comments}
                        commentTime={post.commentTime}
                    />
                ))}
            </Grid>

        );
    }
}

export default Home;