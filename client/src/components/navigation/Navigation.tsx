import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from './Navigation.Styles.ts';

interface INavigationProps {

}

interface INavigationState {

}

class Navigation extends React.Component<NavigationProps, NavigationState> {
    state: INavigationState = {

    }

    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="start"
                sx={{ minHeight: '10vh', maxWidth: '280px', borderRight: '1px solid #228B2270' }}
            >
                <NavLink to='/home' id='home' > <Typography> <HomeIcon /> Home </Typography> </NavLink>
                <NavLink to='/find' id='find' > <Typography> <SearchIcon /> Find </Typography> </NavLink>
                <NavLink to='/share' id='share' > <Typography> <AddIcon /> Share </Typography> </NavLink>
                <NavLink to='/profile' id='profile' > <Typography> <img src='' /> Profile </Typography> </NavLink>
            </Grid>
        );
    }
}

export default Navigation;