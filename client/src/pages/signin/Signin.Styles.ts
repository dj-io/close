import { styled } from "@mui/system";
import { Card, Grid, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '325px',
        // zIndex: 1000,
        background: 'none',
        border: 'none',
        boxShadow: 'none',

        '@media (max-width: 790px)': {
        },
        // borderBottom: '2px solid green'
    }
});

export const SigninWrapper = styled(Grid)(() => ({
    '&&': {
        minHeight: '90vh',

        '@media (max-width: 790px)': {
            minHeight: '70vh',
        }
    },
}));


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
        position: 'fixed',
        p: 7,

        '@media (max-width: 790px)': {
            display: 'flex',
            fontSize: '32px',
        }

    }
}))