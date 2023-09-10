import * as React from 'react';
import { PostCard } from '../../common/components/card/PostCard.tsx';


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

    render(): JSX.Element {
        return (
            <>
                {this.props.posts.map((post) => (
                    <PostCard
                        avatar={post.picture}
                        userName={post.userName}
                        media={post.post}
                        likes={post.likes}
                        caption={post.caption}
                        comments={post.comments}
                        commentTime={post.commentTime}
                    />
                ))}
            </>
        );
    }
}

export default Home;