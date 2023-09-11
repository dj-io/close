import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import { NavLink, NavWrapper } from './Navigation.Styles.ts';

interface INavigationProps {

}

interface INavigationState {

}

class Navigation extends React.Component<NavigationProps, NavigationState> {
    state: INavigationState = {

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
                <NavLink to='/home' id='home' >  <HomeTwoToneIcon fontSize="large" /> Home </NavLink>
                <NavLink to='/find' id='find' >  <PersonSearchTwoToneIcon fontSize="large" /> Find </NavLink>
                <NavLink to='/share' id='share' > <AddAPhotoTwoToneIcon fontSize="large" /> Share </NavLink>
                <NavLink to='/profile' id='profile' > <img src='' /> Profile </NavLink>
            </NavWrapper>
        );
    }
}

export default Navigation;