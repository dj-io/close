import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

export const BootstrapDialog = styled(Dialog)(({ theme, spacing }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(spacing),
        '@media (max-width: 790px)': {
            padding: theme.spacing(2),
        }
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const Children = styled(DialogContent)(() => ({
    '&&': {
        msOverflowStyle: 'none',  /* IE and Edge */
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
            display: 'none',
        },
    }
}))