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
    }

    render(): JSX.Element {
        return (
            <NavWrapper
                container
                spacing={0}
                direction="column"
                alignItems="start"
                justifyContent="start"
            >
                <StyledTip title="Home" placement="right"> <Link style={{ color: '#3C4142' }} to='/home' id='home' > <HomeTwoToneIcon fontSize="large" /> </Link> </StyledTip>
                <StyledTip title="Find" placement="right"> <IconLink onClick={() => this.props.openFind(!this.props.isFindOpen)} fontSize="large" /> </StyledTip>
                <StyledTip title="Share" placement="right"> <Link style={{ color: '#3C4142' }} to='/share' id='share' > <AddAPhotoTwoToneIcon fontSize="large" /> </Link> </StyledTip>
                <StyledTip title="Profile" placement="right"> <Link to='/profile' id='profile' > <Avatar alt="Apple" src={this.state.profileIcon} /> </Link> </StyledTip>
            </NavWrapper>
        );
    }
}

export default Navigation;