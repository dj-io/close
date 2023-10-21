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
        '@media (max-width: 790px)': {
            margin: '25px 24px 0px 14px',
        }
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

        '@media (max-width: 790px)': {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            width: '100vw',
            maxHeight: '90px',
            maxWidth: '100vw',
            borderRight: 'none',
            position: 'fixed',
            bottom: '0 !important',
            background: 'white',
            zIndex: 1000
        }
    }
}))

export const CustomAvatar = styled(Avatar)((props: any) => ({
    '&&': {
        borderRadius: '50%',
        boxShadow: props.page && '0 0 0 3px #228B22'
    }
}))