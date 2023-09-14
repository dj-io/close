import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export const SubmitButton = styled(Button)((props: any) => ({
    '&&': {
        marginTop: '10px',
        minWidth: 275,
        backgroundColor: props.viewChange ? 'red' : '#238636',
        borderRadius: '9px',
        color: '#3C4142',

        '&.Mui-disabled': {
            background: "#eaeaea",
            color: "#c0c0c0"
        }
    }
}))

export const ConfirmButton = styled(Button)({
    '&&': {
        color: '#238636'
    }
})