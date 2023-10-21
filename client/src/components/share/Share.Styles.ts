import { CardMedia, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const Media = styled(CardMedia)(() => ({
    '&&': {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

export const CaptionWrapper = styled(Paper)(() => ({
    '&&': {
        padding: 20,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        boxShadow: 'none',

        '@media (max-width: 540px)': {
            padding: 0,
        }
    }
}))
