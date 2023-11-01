import { styled } from "@mui/system";
import { Card, CardMedia, Grid, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '325px',
        zIndex: 1000,
        border: 'none',
        boxShadow: 'none',
        background: 'none',

        '@media (max-width: 790px)': {
        },
    }
});

export const SignupWrapper = styled(Grid)(() => ({
    '&&': {
        minHeight: '101vh',

        '@media (max-width: 790px)': {
            minHeight: '87.2vh',
        }
    }
}));

export const CloseIcon = styled(CardMedia)(() => ({
    '&&': {
        height: 204,
        width: 204,

        '@media (max-width: 790px)': {
            height: 140,
            width: 140,
        }
    }
}))


export const BackGroundHeader = styled(Typography)(() => ({
    '&&': {
        fontSize: '220px',
        fontWeight: 'bold',
        position: 'fixed',
        marginLeft: 20,

        '@media (max-width: 790px)': {
            display: 'flex',
            fontSize: '120px',
        }
    }
}));

export const BackGroundText = styled(Typography)(() => ({
    '&&': {
        fontSize: '100px',
        fontWeight: 'bold',
        position: 'absolute',
        p: 7,

        '@media (max-width: 790px)': {
            display: 'flex',
            fontSize: '32px',
        }

    }
}))