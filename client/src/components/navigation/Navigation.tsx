import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { IconButton, Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import { StyledTip, IconLink, NavWrapper } from './Navigation.Styles.ts';
import { Find } from '../index.ts';

interface INavigationProps {

}

interface INavigationState {

}

export type NavProps = INavStateToProps & INavDispatchToProps & INavProps;

class Navigation extends React.Component<NavProps> {
    state: INavigationState = {
        profileIcon: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        pages: {
            home: false,
            find: false,
            share: false,
            profile: false,
        }

    }

    onNavSelect = (page, open) => {
        const newState = { ...this.state.pages };
        newState[page] = open;
        this.setState(newState)
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
                <StyledTip title="Home" placement="right">
                    <Link style={{ color: this.state.home ? '#228B22' : '#3C4142' }} to='/home' id='home' >
                        <HomeTwoToneIcon onClick={() => this.onNavSelect('home', !this.state.home)} fontSize="large" />
                    </Link>
                </StyledTip>
                <StyledTip title="Find" placement="right">
                    <IconLink
                        style={{ color: this.props.isFindOpen && this.state.find ? '#228B22' : '#3C4142' }}
                        onClick={() => {
                            this.props.openFind(!this.props.isFindOpen)
                            this.onNavSelect('find', !this.state.find)
                        }}
                        fontSize="large"
                    />
                </StyledTip>
                <StyledTip title="Share" placement="right">
                    <Link style={{ color: this.state.share ? '#228B22' : '#3C4142' }} to='/share' id='share' >
                        <AddAPhotoTwoToneIcon onClick={() => this.onNavSelect('share', !this.state.share)} fontSize="large" />
                    </Link>
                </StyledTip>
                <StyledTip title="Profile" placement="right">
                    <Link to='/profile' id='profile' >
                        <Avatar onClick={() => this.onNavSelect('profile', !this.state.profile)} sx={{ borderRadius: '50%', boxShadow: this.state.profile && '0 0 0 3px #228B22' }} alt="Apple" src={this.state.profileIcon} />
                    </Link>
                </StyledTip>
            </NavWrapper>
        );
    }
}

export default Navigation;