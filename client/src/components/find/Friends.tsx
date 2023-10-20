import * as React from 'react';
import { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import EasyEdit, { Types } from 'react-easy-edit';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import SaveAsTwoToneIcon from '@mui/icons-material/SaveAsTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
import NoPhotographyTwoToneIcon from '@mui/icons-material/NoPhotographyTwoTone';
import { Avatar, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Seperate } from './Find.Styles.ts';
import { find, profilePicUrl, retreiveProfile, share } from '../../common/api/user/Users.Api.ts';
import { Submit } from '../../common/components/buttons/Submit.tsx';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { postImageUrl } from '../../common/api/user/Post.Api.ts';

interface IFriends {

}

const Friends: React.FC<IFriends> = ({ currentUser, profiles }) => {

    const [friend, setFriend] = useState([]);

    const name = useParams().name;

    let userPosts = 0;
    let userLikes = 0;
    const posts = friend?.post?.forEach(post => userPosts += 1);
    const likes = friend?.post?.forEach(post => userLikes += post.likes);
    const following = currentUser.followed.map((id) => id.followedId)
        .find((id) => id === friend.id);

    const returnFriend = async () => {
        const res = await find(name)
        setFriend(res.data);
    }

    const follow = async () => {
        const { authorities, ...rest } = currentUser;
        const data = {
            ...rest,
            followed: [
                ...currentUser.followed,
                { followedId: friend.id }
            ]
        };

        const followed = await share(data);
        profiles(followed.data);

    }

    useEffect(() => {
        returnFriend();
    }, [name, following])

    const { id, username, biography, post } = friend;
    return (
        <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginLeft: '3%' }}
        >
            <Grid item sx={8} >
                <CardHeader
                    avatar={
                        <Avatar
                            alt={username}
                            src={profilePicUrl(id)}
                            sx={{ width: 204, height: 204 }}
                        />
                    }
                    action={
                        <IconButton disabled={true} aria-label="settings">
                            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Options" placement="right">
                                <MoreVertIcon />
                            </Tooltip>
                        </IconButton>
                    }
                    title={
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: '#3C414270'
                            }}
                            variant='h3'
                        >
                            {username}
                        </Typography>
                    }
                    subheader={
                        <Typography variant='button'>
                            {`${userPosts} posts ${userLikes} likes`} <br />
                            <Typography variant="body1" color="text.secondary">
                                {biography}
                                <Submit label="Follow" func={follow} disabledButton={following} />
                            </Typography>
                        </Typography>
                    }
                />
            </Grid>
            <Grid item xs={8}>
                <Seperate />
                {post?.length ?
                    <ImageList sx={{ width: 1000, height: 500, marginTop: '32px', overflowY: 'inherit', }} cols={3} rowHeight={395}>
                        {post?.map((posts) => (
                            <Link id='profile-post-link' to={`/user/${posts.id}`}>
                                <ImageListItem key={postImageUrl(posts.id)}>
                                    <img
                                        src={`${postImageUrl(posts.id)}`}
                                        srcSet={`${postImageUrl(posts.id)}`}
                                        alt={posts.caption}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </Link>
                        ))}
                    </ImageList> :
                    (
                        <NoActivity
                            icon={<NoPhotographyTwoToneIcon fontSize="large" />}
                            title={UserActionTypes.NO_POSTS}
                            description={UserActionTypes.NO_POSTS_MESSAGE}
                        />
                    )
                }
            </Grid>
        </Grid >
    );
}

export default Friends;