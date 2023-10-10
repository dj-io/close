import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { IconButton, Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import Fade from '@mui/material/Fade';
import { StyledTip, IconLink, NavWrapper, CustomAvatar, MoreWrapper } from './Navigation.Styles.ts';
import { Find } from '../index.ts';
import { Pop } from '../../common/components/popover/Pop.tsx';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import withRouter from '../../common/hooks/WithRouter.tsx';
import { find } from '../../common/api/user/Users.Api.js';



interface IPages {
    home: boolean,
    find: boolean,
    share: boolean,
    profile: boolean,
}
interface INavigationProps {
    user: any //TODO: make IUser
}

interface INavigationState {
    profileIcon: string;
    pages: IPages;
}

export type NavProps = INavStateToProps & INavDispatchToProps & INavProps;


class Navigation extends React.Component<NavProps> {
    state: INavigationState = {
        pages: {
            home: false,
            find: false,
            share: false,
            profile: false,
        },
    }


    onNavSelect = (page, open) => {
        const newState = { ...this.state.pages };
        newState[page] = open;
        this.setState(newState)
    }

    closeFind = (page, open) => {
        this.onNavSelect(page, open);
        if (this.props.isFindOpen) this.props.openFind(false)
    }

    onLogout = () => {
        this.props.logout();
        this.props.navigate('/');
        if (this.props.isFindOpen) this.props.openFind(false)
    }

    render(): JSX.Element {
        return (
            <NavWrapper
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="start"
            >
                <StyledTip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Home" placement="right">
                    <Link style={{ color: this.state.home ? '#228B22' : '#3C4142' }} to='/home' id='home' >
                        <HomeTwoToneIcon
                            onClick={() => this.closeFind('home', !this.state.home)}
                            fontSize="large"
                        />
                    </Link>
                </StyledTip>
                <StyledTip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Find" placement="right">
                    <IconLink
                        style={{
                            color: this.props.isFindOpen &&
                                this.state.find ? '#228B22' : '#3C4142'
                        }}
                        onClick={() => {
                            this.props.openFind(!this.props.isFindOpen)
                            this.onNavSelect('find', !this.state.find)
                        }}
                        fontSize="large"
                    />
                </StyledTip>
                <StyledTip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Share" placement="right">
                    <Link style={{ color: this.state.share ? '#228B22' : '#3C4142' }}
                        to='/share'
                        id='share'
                    >
                        <AddAPhotoTwoToneIcon
                            onClick={() => this.closeFind('share', !this.state.share)}
                            fontSize="large"
                        />
                    </Link>
                </StyledTip>
                <StyledTip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Profile" placement="right">
                    <Link to={`/profile/${this.props.user.id}`} id='profile' >
                        <CustomAvatar
                            onClick={() => this.closeFind('profile', !this.state.profile)}
                            page={this.state.profile}
                            alt="Apple"
                            src={this.props.user.picture}
                        />
                    </Link>
                </StyledTip>
                {
                    this.props.token && (
                        <MoreWrapper>
                            <Pop
                                tip="More"
                                label={<SettingsSuggestTwoToneIcon fontSize="large" />}
                                children={
                                    <Tooltip
                                        TransitionComponent={Fade}
                                        TransitionProps={{ timeout: 600 }}
                                        title="Logout"
                                        placement="right"
                                    >
                                        <IconButton onClick={this.onLogout}>
                                            <LogoutTwoToneIcon />
                                        </IconButton>
                                    </Tooltip>
                                }
                            />
                        </MoreWrapper>
                    )
                }
            </NavWrapper>
        );
    }
}

export default withRouter(Navigation);