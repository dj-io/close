import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/profile' id='profile' > <Typography> Profile </Typography> </Link>
            </>
        );
    }
}

export default Navigation;