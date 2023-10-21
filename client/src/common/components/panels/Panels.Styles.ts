import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";


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

        '@media (max-width: 540px)': {
            width: 400,
            maxHeight: '100vh',
            height: 300,
            whiteSpace: 'nowrap',
            marginTop: '20px',
            overflowY: 'auto',
            overflowX: 'hidden',
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarHeight: 'none',
            '::-webkit-scrollbar': {
                display: 'none',
            },
        }
    }
}));

export const Subject = styled(Typography)(() => ({
    '&&': {
        fontSize: '0.82rem',
    },
}))

export const IconWrapper = styled('div')(() => ({
    '&&': {
        'svg': {
            fontSize: '3.1875rem'
        }

    }
}));

export const ConfirmStatusWrapper = styled('div')(() => ({
    '&&': {
        width: '100%',
        height: 150,
        marginTop: '12px',
    }
}))

