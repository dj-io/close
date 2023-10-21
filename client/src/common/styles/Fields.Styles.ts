import { styled } from "@mui/system";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { CardMedia } from "@mui/material";


export const StyledField = styled(TextField)({
    '&&': {
        marginTop: '25px',
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#238636',
        },

        '& .MuiInput-underline:after': { borderBottomColor: '#238636' },

        '& label': {
            color: '#238636',
        },

    },
});

export const CustomInput = styled(Input)({
    '&&': {

    }
});

export const Media = styled(CardMedia)(() => ({
    '&&': {
        width: 204,
        height: 204,
        borderRadius: '50%',
        cursor: 'pointer',

        '@media (max-width: 540px)': {
            width: 140,
            height: 140,
        }

    }
}))