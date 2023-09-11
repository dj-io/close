import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#3C4142',
        margin: '32px 0px 0px 25px',
    }
}));

export const NavWrapper = styled(Grid)(() => ({
    '&&': {
        marginLeft: '20px',
        height: '100vh',
        maxWidth: '240px',
        borderRight: '1px solid #3C414270',
        position: 'fixed'
    }
}))