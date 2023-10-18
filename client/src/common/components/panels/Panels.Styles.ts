import { Link } from "react-router-dom";
import { styled } from "@mui/system";


export const NoActivityLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: '#228B22',
        cursor: 'pointer',
        fontSize: 'larger'
    }
}));

export const NoActivityWrapper = styled('div')(() => ({
    '&&': {
        width: 1000,
        height: 500,
        marginTop: '100px',
    }
}))

export const IconWrapper = styled('div')(() => ({
    '&&': {
        'svg': {
            fontSize: '3.1875rem'
        }

    }
}))

