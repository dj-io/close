import * as React from 'react';
import Grid from '@mui/material/Grid';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import ImageNotSupportedTwoToneIcon from '@mui/icons-material/ImageNotSupportedTwoTone';
import { PostCard } from '../../common/components/cards/PostCard.tsx';
import { Seperate } from './Home.Styles.ts';
import { returnUsers } from '../../common/api/user/Users.Api.ts';
import { IHomeStateToProps, IHomeDispatchToProps } from '../../types/app.ts';
import { Nav, Find } from '../index.ts';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { UserActions } from '../../redux/actionTypes/UserActionTypes.js';


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
    }

    renderFeed = async () => {
        const res = await returnUsers();

        const following = this.props.user?.followed?.map((id) => id?.followedId)
        const users = res?.data?.filter((user) => following?.includes(user?.id))

        this.props.feed(users)
    }

    hasPosts = () => {
        for (const user of this.props.following) {
            if (user?.post?.length) {
                this.setState({ posts: true })
            }
        }
    }

    componentDidMount() {
        this.renderFeed();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.following !== this.props.following) this.hasPosts();
    }

    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '45vh' }}
            >
                {this.props.following.length > 0 ?
                    this.state.posts ? (
                        this.props.following.map((user) => (
                            user.post.map((post) => (
                                <>
                                    <PostCard
                                        page="home"
                                        post={post}
                                        user={user}
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