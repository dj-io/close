import { styled } from "@mui/system";
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#228B22'
    }
}))