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
import { FriendsAvatar, Seperate, ExternalLink } from './Find.Styles.ts';
import { find, profilePicUrl, retreiveProfile, share, unfollow } from '../../common/api/user/Users.Api.ts';
import { Submit } from '../../common/components/buttons/Submit.tsx';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { postImageUrl } from '../../common/api/user/Post.Api.ts';
import { Anchor, CustomCardHeader, CustomImageList, HeaderText, Source, Video } from '../profile/Profile.Styles.ts';
import useWindowDimensions from '../../common/hooks/GetWindowDimensions.tsx';

interface IFriends {

}

const Friends: React.FC<IFriends> = ({ currentUser, profiles }) => {

    const [friend, setFriend] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isMobile } = useWindowDimensions();

    const name = useParams().name;

    let userPosts = 0;
    let userLikes = 0;
    const posts = friend?.post?.forEach(post => userPosts += 1);
    const likes = friend?.post
        ?.map(post => post?.like)
        ?.filter(like => like?.length > 0)
        ?.forEach(
            post =>
                userLikes += post.length
        );
    const following = currentUser.followed?.map((id) => id.followedId)
        .find((id) => id === friend.id);

    const returnFriend = async () => {
        const res = await find(name);
        setFriend(res.data);
    }

    const follow = async () => {
        setLoading(true)
        const { authorities, ...rest } = currentUser;
        const data = {
            ...rest,
            followed: [
                ...currentUser.followed,
                { followedId: friend.id }
            ]
        };

        const user = await share(data);
        if (user.status === 200) profiles(user.data);
        setLoading(false);

    }

    const unfollowFriend = async () => {

        const followingId = currentUser.followed?.map((follows) => follows)
            .find(id => id?.followedId === friend?.id)

        unfollow(followingId?.id)
            .then(async () => {
                // UPDATES FRIEND PROFILE
                const newUser = await retreiveProfile(currentUser?.id);
                if (newUser.status === 200) profiles(newUser?.data);


            }).catch((err) => console.error('POST ERR: ', err))
    }

    const handleFollowing = () => following ? unfollowFriend() : follow();

    useEffect(() => {
        returnFriend();
    }, [name, following])

    const { id, username, biography, links, post } = friend;
    return (
        <Grid
            container
            spacing={isMobile ? 0 : 3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '45vh', marginLeft: isMobile ? null : '5%' }}
        >
            <Grid item sx={8} >
                <CustomCardHeader
                    avatar={
                        <FriendsAvatar
                            alt={username}
                            src={profilePicUrl(id)}
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
                        <HeaderText variant='h3'>
                            {username}
                        </HeaderText>
                    }
                    subheader={
                        <Typography sx={{ fontWeight: 600, color: '#238636' }} variant='button'>
                            {`${userPosts} posts ${userLikes}`} {userLikes > 1 ? 'likes' : 'like'} <br />
                            <Typography variant="body1" color="text.secondary">
                                {biography} <br />
                                <Typography variant="caption" color="text.secondary">
                                    <ExternalLink target='_blank' rel='external nofollow' href={links}>{links}</ExternalLink>
                                </Typography>
                                <Submit loading={loading} width={isMobile ? '100%' : null} label={following ? "Unfollow" : "Follow"} func={handleFollowing} disabledButton={loading} />
                            </Typography>
                        </Typography>
                    }
                />
            </Grid>
            <Grid item xs={8}>
                <Seperate />
                {post?.length ?
                    <CustomImageList cols={3} rowHeight={isMobile ? 295 : 395}>
                        {post?.map((posts) => (
                            <Link id='profile-post-link' to={`/user/${posts?.id}`}>
                                <ImageListItem key={postImageUrl(posts?.id)}>
                                    {posts?.mediaType === 'img' ? (
                                        <img
                                            src={postImageUrl(posts?.id)}
                                            srcSet={postImageUrl(posts?.id)}
                                            alt={posts.caption}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <Video width="auto" height={isMobile ? 295 : 395}>
                                            <Source
                                                src={postImageUrl(posts?.id)}
                                                srcSet={postImageUrl(posts?.id)}
                                                alt={posts.caption}
                                                loading="lazy"
                                            />
                                        </Video>
                                    )}
                                </ImageListItem>
                            </Link>
                        ))}
                    </CustomImageList> :
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