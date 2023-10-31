import * as React from 'react';
import { Grid } from '@mui/material';
import SelectMedia from './SelectMedia.tsx'
import Caption from './Caption.tsx';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { retreiveProfile, share } from '../../common/api/user/Users.Api.ts';
import { IShareStateToProps, IShareDispatchToProps } from '../../types/user.ts'
import { userValues } from '../../common/constants/requests.ts';
import { uploadPostImage } from '../../common/api/user/Post.Api.ts';

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
        files: '',
        picture: '',
        post: {
            caption: '',
            mediaType: 'img',
        },
    }

    setOpen = ({ open }) => this.setState({ open });

    handleChange = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                caption: e.target.value
            }
        })
    };

    handlePreview = (files) => {
        // SET PREVIEW IMAGE IN COMPONENT 
        const file = URL.createObjectURL(files);

        if (!files.type.startsWith('image')) {
            this.setState({
                post: {
                    ...this.state.post,
                    mediaType: 'video'
                }
            });
        }

        this.setState({ picture: file });
        this.setState({ files });
    }

    uploadImage = async (id) => {
        const formData = new FormData();
        formData.append("file", this.state.files);

        await uploadPostImage(id, formData);

        return retreiveProfile(this.props.user.id)
    };

    post = async () => {
        const { authorities, updated, created, ...rest } = this.props.user;

        const data = {
            ...rest,
            post: [
                ...this.props.user.post,
                this.state.post
            ]
        };

        // SHARE -> USER POST OBJECT MUST EXIST BEFORE IMAGE CAN BE UPLOADED TO BUCKET
        share(data)
            .then(async (newPost) => {
                // RETURNS ID OF POSTS CREATED IN SHARE DATA RESPONSE 
                // WHICH ARE NOT FOUND IN CURRENT REDUX USER DATA 
                const newPostId = newPost.data.post.filter(
                    posts =>
                        !this.props.user.post.some(
                            oldPosts =>
                                posts.id === oldPosts.id
                        )
                );

                // UPLOAD IMAGE TO S3 BUCKET USING ID RETURNED
                const uploadedImage = await this.uploadImage(newPostId[0].id)

                // UPDATE REDUX STATE WITH NEW PROFILE WITH UPDATED POST OBJECT 
                //(RETURNED FROM UPLOAD IMAGE PROMISE)
                this.props.profiles(uploadedImage.data);

            }).catch((err) => {
                console.error("SHARE ERR: ", err)
            });
        // SHARE COMPONENT IS AVAILABLE FROM ANY PAGE IN APP, ALLOWS FOR RETURN TO PAGE BEFORE SHARE 
        window.history.back();
    };

    render(): JSX.Element {
        return (
            <>
                <ConfirmDialog
                    title="Share New Post"
                    spacing={!this.state.picture && 20}
                    enableClose={true}
                    enableBack={true}
                    isOpen={this.state.open}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => this.setOpen(false)}
                    back={() => this.setState({ picture: '' })}
                >
                    {!this.state.picture &&
                        <SelectMedia handleUpload={this.handlePreview} />
                    }
                    {this.state.picture &&
                        <Caption
                            change={this.handleChange}
                            post={this.post}
                            img={this.state.picture}
                            mediaType={this.state.post.mediaType}
                        />
                    }
                </ConfirmDialog>
            </>
        );
    }
}

export default Share;