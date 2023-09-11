import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProfileDispatchToProps, IProfileStateToProps } from '../../types/user.ts';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, CardContent, CardHeader, Typography } from '@mui/material';
import { Seperate } from '../find/Find.Styles.ts';

interface IProfileProps {

}

interface IProfileState {
    userLikes: number;
}

export type ProfileProps = IProfileStateToProps & IProfileDispatchToProps & IProfileProps;

class Profile extends React.Component<ProfileProps> {
    state: IProfileState = {
        userLikes: 0,
    }

    userProfile = [{
        id: 1,
        userName: 'mrSir',
        profilePic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        userBio: 'just a cool sir coolin mr cooper',
        posts: [
            {
                id: 1,
                postImg: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
                likes: 3,
                title: 'newPic'

            },
            {
                id: 2,
                postImg: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                likes: 3,
                title: 'another silhouette'

            }
        ],
    }];

    userPosts = [
        {
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
            id: 3,
            picture: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            userName: 'nelle',
            post: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500J',
            likes: 5,
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
        }
    ]

    posts = this.userPosts.length;
    likes = this.userPosts.map((like) => like.likes)
        .forEach((like) => { this.state.userLikes += like })

    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="start"
            // sx={{ border: '1px solid red' }}
            >
                {this.userProfile.map((item) => (
                    <Grid item sx={8}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Mr sir"
                                    src={item.profilePic}
                                    sx={{ width: 204, height: 204 }}
                                />}
                            // action={
                            //     <IconButton aria-label="settings">
                            //         <FavoriteIcon />
                            //     </IconButton>
                            // }
                            title={<Typography sx={{ fontWeight: 'bold', color: '#3C414270' }} variant='h4'> {item.userName} </Typography>}
                            subheader={
                                <Typography variant='button'>
                                    {`${this.posts} posts ${this.state.userLikes} likes`} <br />
                                    <Typography variant="body2" color="text.secondary">
                                        {item.userBio}
                                    </Typography>
                                </Typography>
                            }
                        />
                    </Grid>
                ))}
                <Grid item xs={8}>
                    <Seperate />
                    <ImageList sx={{ width: 750, height: 450, marginTop: '32px' }} cols={3} rowHeight={164}>
                        {this.userPosts.map((post) => (
                            <Link id='profile-post-link' to={`/user/${post.id}`}>
                                <ImageListItem key={post.picture}>
                                    <img
                                        src={`${post.picture}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${post.picture}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={post.caption}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </Link>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        )
    }
}

export default Profile;