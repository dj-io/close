import { styled } from "@mui/system";
import TextField from '@mui/material/TextField';


export const StyledField = styled(TextField)({
    '&&': {
        marginTop: '25px',
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#228B22',
        },


        '& label': {
            color: '#228B22'
        },

    },
})