import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export const SubmitButton = styled(Button)({
    '&&': {
        marginTop: '10px',
        minWidth: 275,
        backgroundColor: '#2BB02B',
        borderRadius: '9px',

    }
})

export const ConfirmButton = styled(Button)({
    '&&': {
        color: '#228B22'
    }
})