import { CardMedia } from "@mui/material";
import { styled } from "@mui/system";

export const Media = styled(CardMedia)(() => ({
    '&&': {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));
