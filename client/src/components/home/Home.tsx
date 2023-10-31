import * as React from 'react';
import Grid from '@mui/material/Grid';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ImageNotSupportedTwoToneIcon from '@mui/icons-material/ImageNotSupportedTwoTone';
import CrisisAlertTwoToneIcon from '@mui/icons-material/CrisisAlertTwoTone';
import HideImageTwoToneIcon from '@mui/icons-material/HideImageTwoTone';
import { PostCard } from '../../common/components/cards/PostCard.tsx';
import { Seperate } from './Home.Styles.ts';
import { retreiveProfile, returnUsers, share } from '../../common/api/user/Users.Api.ts';
import { IHomeStateToProps, IHomeDispatchToProps } from '../../types/app.ts';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { ConfirmStatus } from '../../common/components/panels/ConfirmStatus.tsx';
import { deletePost, newLike, removeLike } from '../../common/api/user/Post.Api.ts';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { renderPopList } from '../../common/utils/posts.ts';
import { actionConfirm } from '../../common/constants/postFields.ts';


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
        posts: false,
        openPost: {},
        newLikes: {
            username: this.props?.user?.username,
            name: this.props?.user?.name,
            user_id: this.props?.user?.id
        },
        actionLabel: '',
        followingId: '',
        removeable: false,
        isConfirming: false,
    }

    setIsConfirming = isConfirming => this.setState({ isConfirming });
    setActionLabel = actionLabel => this.setState({ actionLabel })

    setOpen = (postId, open) => {
        const newState = {};
        newState[postId] = open;
        this.setState({ openPost: newState });
    }

    handlePopActions = (popLabel, postId) => {
        this.setActionLabel(popLabel);
        this.setOpen(postId, true);
    }

    renderFeed = async () => {
        const res = await returnUsers();

        // SETS HOME PAGE FEED
        const following = this.props.user?.followed?.map((id) => id?.followedId);
        const users = res?.data?.filter((user) => following?.includes(user?.id));

        this.props.feed(users);
    }

    follow = async (friend) => {
        const { authorities, ...rest } = this.props.user
        const data = {
            ...rest,
            followed: [
                ...this.props.user.followed,
                { followedId: friend.user_id }
            ]
        };

        const updatedProfile = await share(data);

        this.props.profiles(updatedProfile.data);
    }

    setFollowedId = (post) => {
        // SETS FOLLOWING OBJ ID FOR UNFOLLOW
        const follows = this.props?.user?.followed?.map((follows) => follows)
            .find(id => id.followedId === post.user_id);

        return follows?.id;
    }

    hasPosts = () => {
        for (const user of this.props?.following) {
            if (user?.post?.length) {
                this.setState({ posts: true })
            }
        }
    }

    addLike = async (post) => {
        const data = {
            ...post,
            like: [
                ...post.like,
                this.state.newLikes
            ]
        }
        if (this.props.user) {
            const res = await newLike(data);
            if (res.status === 200) this.renderFeed();
        }
    }

    unlike = async (post) => {
        const likeId = post?.like?.map(id => id)
            .find(like => like?.user_id === this.props?.user?.id)

        if (this.props.user) {
            const res = await removeLike(likeId?.id);
            if (res.status === 200) this.renderFeed();
        }
    }

    componentDidMount() {
        this.renderFeed();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.following !== this.props.following) this.hasPosts();
    }

    render(): JSX.Element {
        const { actionLabel } = this.state;
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '45vh' }}
            >
                {this.props?.following?.length > 0 ?
                    this.state?.posts ? (
                        this.props?.following?.map((user) => (
                            user?.post?.map((post) => (
                                <>
                                    <ConfirmDialog
                                        isOpen={this.state.openPost[post?.id]}
                                        openDialog={() => this.setOpen(post?.id, true)}
                                        closeDialog={() => this.setOpen(post?.id, false)}
                                        label={<ShortTextIcon />}
                                        title={this.props?.user?.username}
                                        spacing={2}
                                        enableBack={this.state.openPost[post?.id]}
                                        back={() => this.setOpen(post?.id, false)}
                                    >
                                        {actionLabel &&
                                            actionConfirm.map((action) => (
                                                <ConfirmStatus
                                                    icon={<CrisisAlertTwoToneIcon fontSize="large" />}
                                                    title={action[actionLabel].title}
                                                    description={action[actionLabel].description}
                                                    link={action[actionLabel].link}
                                                    func={
                                                        () => action[actionLabel].func(
                                                            post,
                                                            this.props.profiles,
                                                            this.setOpen,
                                                            this.props.user,
                                                            window.history.go(0),
                                                            this.setFollowedId,
                                                            this.renderFeed,
                                                        )
                                                    }
                                                />
                                            ))
                                        }
                                    </ConfirmDialog>
                                    <PostCard
                                        page="home"
                                        post={post}
                                        user={user}
                                        currentUser={this.props.user}
                                        follow={this.follow}
                                        like={
                                            post?.like?.map(likes => likes)
                                                .find(id => id?.user_id === this.props?.user?.id) ?
                                                () => this.unlike(post) :
                                                () => this.addLike(post)
                                        }
                                        popItems={
                                            renderPopList(
                                                post?.user_id === this.props?.user?.id,
                                                this.handlePopActions,
                                                post?.id
                                            )
                                        }
                                    />
                                    <Seperate />
                                </>
                            ))

                        ))) : (
                        <NoActivity
                            icon={<ImageNotSupportedTwoToneIcon fontSize="large" />}
                            title={UserActionTypes.NO_POSTS}
                            description={UserActionTypes.NO_FRIENDS_POSTED}
                            link={UserActionTypes.FOLLOW_MORE_FRIENDS}
                            func={() => this.props.openFind(!this.props.isFindOpen)}
                        />
                    ) : (
                        <NoActivity
                            icon={<GroupAddTwoToneIcon fontSize="large" />}
                            title={UserActionTypes.FIND_FRIENDS}
                            description={UserActionTypes.FOLLOW_MESSAGE}
                            link={UserActionTypes.FOLLOW_FRIENDS}
                            func={() => this.props.openFind(!this.props.isFindOpen)}
                        />
                    )}
            </Grid>

        );
    }
}

export default Home;