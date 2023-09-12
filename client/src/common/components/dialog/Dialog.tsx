import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BootstrapDialog } from './Dialog.Styles.ts';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface IDialog {
    label: string;
    confirmLabel: string;
    children: React.ReactElement;
    title: string;
    openDialog: Function;
    closeDialog: Function;
    isOpen: boolean;
}

/**
 * Common Dialog Functional component
 * Reusable Dialog component 
 * @param props @interface IDialog 
 * @returns 
 */
export const ConfirmDialog: React.FC<IDialog> = ({
    label,
    children,
    confirmLabel,
    title,
    openDialog,
    closeDialog,
    isOpen
}) => {

    const [open, setOpen] = React.useState(isOpen);

    return (
        <div>
            {/* <Button variant="contained" onClick={openDialog}>
                {label}
            </Button> */}
            <BootstrapDialog
                onClose={(event, reason) => { if (reason && reason !== 'backdropClick') closeDialog() }}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <Link to='/home' id='home' >
                    <IconButton
                        aria-label="close"
                        onClick={closeDialog}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Link>
                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeDialog}>
                        {confirmLabel}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}