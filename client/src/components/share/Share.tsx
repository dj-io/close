import * as React from 'react';
import { Grid } from '@mui/material';
import SelectMedia from './SelectMedia.tsx'
import Caption from './Caption.tsx';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { share } from '../../common/api/user/Users.Api.ts';
import { IShareStateToProps, IShareDispatchToProps } from '../../types/user.ts'
import { userValues } from '../../common/constants/requests.ts';

interface IPost {
    picture: string;
    caption: string;
    likes: number;
    comment: any //TODO: make IComment
    shares: number;
}
interface IShareProps {

}

interface IShareState {
    open: boolean;
    mediaType: string;
    post: IPost
}

export type ShareProps = IShareStateToProps & IShareDispatchToProps & IShareProps

class Share extends React.Component<ShareProps> {
    state: IShareState = {
        open: true,
        mediaType: 'img',
        post: {
            picture: '',
            caption: '',
        },
    }

    setOpen = ({ open }) => this.setState({ open });

    handleUpload = (files) => {
        const file = URL.createObjectURL(files);

        if (!files.type.startsWith('image'))
            this.setState({ mediaType: 'video' });

        this.setState({ post: { picture: file } })
    }

    handleChange = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                caption: e.target.value
            }
        })
    }

    post = async () => {
        const { authorities, updated, created, ...rest } = this.props.user
        const data = {
            ...rest,
            post: [
                ...this.props.user.post,
                this.state.post
            ]
        };

        const newPost = await share(data);
        this.props.profiles(newPost.data)
        window.history.back();
    }

    render(): JSX.Element {
        return (
            <>
                <ConfirmDialog
                    title="Share New Post"
                    spacing={!this.state.post.picture && 20}
                    enableBack={true}
                    isOpen={this.state.open}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => this.setOpen(false)}
                    back={() => this.setState({ post: {} })}
                >
                    {!this.state.post.picture &&
                        <SelectMedia handleUpload={this.handleUpload} />
                    }
                    {this.state.post.picture &&
                        <Caption
                            change={this.handleChange}
                            post={this.post}
                            img={this.state.post.picture}
                            mediaType={this.state.mediaType}
                        />
                    }
                </ConfirmDialog>
            </>
        );
    }
}

export default Share;