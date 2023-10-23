import { styled } from "@mui/system";
import { Card, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '325px',
    }
});


export const BackGroundHeader = styled(Typography)(() => ({
    '&&': {
        fontSize: '220px',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: 24,

        '@media (max-width: 790px)': {
            display: 'flex',
            fontSize: '140px',
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