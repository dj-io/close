import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export const SubmitButton = styled(Button)({
    '&&': {
        marginTop: '10px',
        minWidth: 275,
        backgroundColor: '#238636',
        borderRadius: '9px',
        color: '#3C4142',

        '&.Mui-disabled': {
            background: "#eaeaea",
            color: "#c0c0c0"
        }
    }
})

export const ConfirmButton = styled(Button)({
    '&&': {
        color: '#238636'
    }
})