import { Link } from 'react-router-dom';
import { Grid, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';

export const StyledTip = styled(Tooltip)(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#3C4142',
        margin: '32px 24px 0px 0px',
    }
}));

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