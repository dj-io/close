import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

interface INavigationProps {

}

interface INavigationState {

}

class Navigation extends React.Component<NavigationProps, NavigationState> {
    state: INavigationState = {

    }

    render(): JSX.Element {
        return (
            <>
                <Link to='/home' id='home' > <Typography> <HomeIcon /> Home </Typography> </Link>
                <Link to='/find' id='find' > <Typography> <SearchIcon /> Find </Typography> </Link>
                <Link to='/share' id='share' > <Typography> <AddIcon /> Share </Typography> </Link>
                <Link to='/profile' id='profile' > <Typography> <img src='' /> Profile </Typography> </Link>
            </>
        );
    }
}

export default Navigation;