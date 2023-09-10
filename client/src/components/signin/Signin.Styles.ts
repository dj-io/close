import { styled } from "@mui/system";
import { Card } from '@mui/material';

export const StyledCard = styled(Card)({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '325px',
        borderBottom: '2px solid green'
    }
})