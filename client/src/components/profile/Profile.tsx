import * as React from 'react';
import { Link } from 'react-router-dom';
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
import Fade from '@mui/material/Fade';
import { Avatar, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import { IProfileDispatchToProps, IProfileStateToProps } from '../../types/user.ts';
import { Seperate } from '../find/Find.Styles.ts';
import { find, profilePicUrl, retreiveProfile, share, uploadProfilePic } from '../../common/api/user/Users.Api.ts';
import { profiles } from '../../redux/actions/UserActions.ts';
import { Submit } from '../../common/components/buttons/Submit.tsx';
import { profileFields } from '../../common/constants/formFields.ts';
import { BodyEditor, CustomCardHeader, CustomImageList, HeaderEditor, HeaderText, PostLink, ProfileWrapper, Source, Video } from './Profile.Styles.ts';
import { MyDropzone } from '../../common/hooks/Dropzone.tsx';
import { Toll } from '@mui/icons-material';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { postImageUrl } from '../../common/api/user/Post.Api.ts';
import InputField from '../../common/components/fields/InputField.tsx'
import withWindowDimensions from '../../common/hooks/WithWindowDimensions.tsx';

interface IProfileProps {

}

interface IProfileState {
    userLikes: number;
    posts: number;
    editing: boolean;
    pictures: string; // TODO: make IFields
    fields: any;
    loading: boolean;
}

export type ProfileProps = IProfileStateToProps & IProfileDispatchToProps & IProfileProps;

class Profile extends React.Component<ProfileProps> {
    state: IProfileState = {
        userLikes: 0,
        posts: 0,
        editing: false,
        profilePic: profilePicUrl(this.props?.user?.id),
        loading: false,
        fields: {
            username: this.props.user.username,
            biography: this.props.user.biography
        }
    }

    posts = this.props?.user?.post?.forEach(post => this.setState({ posts: this.state.posts += 1 }));
    likes = this.props?.user?.post?.forEach(post => this.setState({ userLikes: this.state.userLikes += post.likes }));
    following = this.props?.user?.followed?.map((id) => id.followedId)
        .find((id) => id === this.props.user.id);

    setLoading = loading => this.setState({ loading });

    saveName = username => this.setState({ fields: { ...this.state.fields, username } })
    saveBio = biography => this.setState({ fields: { ...this.state.fields, biography } });
    savePic = picture => this.setState({ fields: { ...this.state.fields } });

    handleUpload = async (file) => {
        this.setLoading(true)
        const { id } = this.props.user;

        const formData = new FormData();
        formData.append("file", file);

        const profileImage = await uploadProfilePic(id, formData);
        if (profileImage.status === 200) this.setState({ loading: false, editing: !this.state.editing })
    }

    handleEditing = async () => {
        const { authorities, ...rest } = this.props.user;

        const data = {
            ...rest,
            ...this.state.fields,
        };

        this.setState({ editing: !this.state.editing })

        if (this.state.editing) {
            const edited = await share(data);
            this.props.profiles(edited.data);
            localStorage.setItem('user', JSON.stringify(this.state.fields.username));
        }

    }


    follow = async () => {
        const { authorities, ...rest } = this.props.user
        const data = {
            ...rest,
            followed: [
                ...this.props.user.followed,
                { followedId: this.props.foundUser.id }
            ]
        };

        const updatedProfile = await share(data);

        this.props.profiles(updatedProfile.data);
    }


    render(): JSX.Element {
        const { username, biography, post } = this.props.user;

        return (
            <Grid
                container
                spacing={this.props.isMobile ? 0 : 3}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '45vh', marginLeft: this.props.isMobile ? null : '5%' }}
            >
                <Grid item sx={8} >
                    <CustomCardHeader
                        avatar={
                            <HeaderEditor>
                                <EasyEdit
                                    allowEdit={false}
                                    type={Types.FILE}
                                    value={profilePicUrl(this.props?.user?.id) || 'Upload a picture'}
                                    onSave={this.savePic}
                                    editMode={this.state.editing}
                                    saveButtonLabel={<CloudSyncTwoToneIcon fontSize="small" />}
                                    attributes={{ name: "picture" }}
                                    hideCancelButton
                                    hideSaveButton
                                    displayComponent={
                                        <Avatar
                                            alt={username}
                                            src={profilePicUrl(this.props?.user?.id)}
                                        />}
                                    editComponent={
                                        <MyDropzone
                                            handleUpload={this.handleUpload}
                                            children={
                                                <InputField
                                                    row={profileFields}
                                                    image={profilePicUrl(this.props?.user?.id)}
                                                    isSubmitting={this.state.loading}
                                                />
                                            }
                                        />
                                    }
                                />
                            </HeaderEditor>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <Tooltip
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                    title={this.state.editing ? "Save Edit" : "Edit Profile"}
                                    placement="right"
                                >
                                    {this.state.editing ?
                                        <SaveAsTwoToneIcon onClick={this.handleEditing} /> :
                                        <SettingsTwoToneIcon onClick={this.handleEditing} />
                                    }
                                </Tooltip>
                            </IconButton>
                        }
                        title={
                            <HeaderText variant='h3' >
                                <HeaderEditor>
                                    <EasyEdit
                                        allowEdit={false}
                                        type={Types.TEXT}
                                        placeholder={username || 'Choose a username'}
                                        onSave={this.saveName}
                                        editMode={this.state.editing}
                                        saveButtonLabel={<CloudSyncTwoToneIcon fontSize="small" />}
                                        attributes={{ name: "username" }}
                                        hideCancelButton
                                    />
                                </HeaderEditor>
                            </HeaderText>
                        }
                        subheader={
                            <Typography variant='button'>
                                {`${this.state.posts} posts ${this.state.userLikes} likes`} <br />
                                <Typography variant="body1" color="text.secondary">
                                    <BodyEditor>
                                        <EasyEdit
                                            allowEdit={false}
                                            type={Types.TEXT}
                                            placeholder={biography || 'Add a Bio'}
                                            onSave={this.saveBio}
                                            editMode={this.state.editing}
                                            saveButtonLabel={<CloudSyncTwoToneIcon fontSize="small" />}
                                            attributes={{ name: "biography" }}
                                            hideCancelButton
                                        />
                                    </BodyEditor>
                                    <Submit width={this.props.isMobile ? '100%' : null} label="Follow" func={this.follow} disabledButton={!this.following} />
                                </Typography>
                            </Typography>
                        }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Seperate />
                    {post?.length ?
                        <CustomImageList cols={3} rowHeight={this.props.isMobile ? 295 : 395}>
                            {post.map((posts) => (
                                <PostLink id='profile-post-link' to={`/user/${posts?.id}`}>
                                    <ImageListItem key={postImageUrl(posts?.id)}>
                                        {posts?.mediaType === 'img' ? (
                                            <img
                                                src={`${postImageUrl(posts?.id)}`}
                                                srcSet={`${postImageUrl(posts?.id)}`}
                                                alt={posts.caption}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <Video width="auto" height={this.props.isMobile ? 295 : 395} controls>
                                                <Source
                                                    src={`${postImageUrl(posts?.id)}`}
                                                    srcSet={`${postImageUrl(posts?.id)}`}
                                                    alt={posts.caption}
                                                    loading="lazy"
                                                />
                                            </Video>
                                        )}
                                    </ImageListItem>
                                </PostLink>
                            ))}
                        </CustomImageList> :
                        (
                            <NoActivity
                                icon={<NoPhotographyTwoToneIcon fontSize="large" />}
                                title={UserActionTypes.SHARE_PHOTOS}
                                description={UserActionTypes.SHARE_MESSAGE}
                                link={UserActionTypes.SHARE_LINK}
                                path={UserActionTypes.SHARE_PATH}
                            />
                        )
                    }
                </Grid>
            </Grid >
        )
    }
}

export default withWindowDimensions(Profile);