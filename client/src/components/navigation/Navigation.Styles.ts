import { Link } from 'react-router-dom';
import { Avatar, Grid, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';

export const StyledTip = styled(Tooltip)(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#3C4142',
        margin: '32px 24px 0px 0px',
    }
}));

export const MoreWrapper = styled("div")(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#3C4142',
        margin: '100px 24px 0px 0px',
        position: 'relative',
    }
}));

export const NavLink = styled(Link)((props: any) => ({
    '&&': {
        color: props.$page ? '#228B22' : '#3C4142',
    }
}))

export const IconLink = styled(PersonSearchTwoToneIcon)((props: any) => ({
    '&&': {
        textDecoration: 'none',
        color: props.page ? '#228B22' : '#3C4142',
        cursor: 'pointer',
    }
}))

export const NavWrapper = styled(Grid)(() => ({
    '&&': {
        marginLeft: '20px',
        height: '100vh',
        maxWidth: '140px',
        borderRight: '1px solid #3C414250',
        position: 'fixed',
    }
}))

export const CustomAvatar = styled(Avatar)((props: any) => ({
    '&&': {
        borderRadius: '50%',
        boxShadow: props.page && '0 0 0 3px #228B22'
    }
}))