import { styled } from "@mui/system";
import TextField from '@mui/material/TextField';


export const StyledField = styled(TextField)({
    '&&': {
        marginTop: '25px',
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#238636',
        },

        '& .MuiInput-underline:after': { borderBottomColor: '#238636' },


        '& label': {
            color: '#238636'
        },

    },
})