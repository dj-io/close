import * as React from 'react';
import Grid from '@mui/material/Grid';
import { PostCard } from '../../common/components/cards/PostCard.tsx';
import { Seperate } from './Home.Styles.ts';
import { returnUsers } from '../../common/api/user/Users.Api.ts';
import { IHomeStateToProps, IHomeDispatchToProps } from '../../types/app.ts';
import { Nav, Find } from '../index.ts';


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
    state: IHomeState = {}

    renderFeed = async () => {
        const res = await returnUsers();

        const following = this.props.user.followed.map((id) => id.followedId)
        const users = res.data.filter((user) => following.includes(user.id))

        this.props.feed(users)
    }

    componentDidMount() {
        this.renderFeed();
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
                {this.props.following.length > 0 &&
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
                    ))}
            </Grid>

        );
    }
}

export default Home;