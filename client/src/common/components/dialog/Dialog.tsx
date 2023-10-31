import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BootstrapDialog, Children } from './Dialog.Styles.ts';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

interface IDialog {
    label: string;
    confirmLabel: string;
    children: React.ReactElement;
    title: string;
    openDialog: Function;
    closeDialog: Function;
    isOpen: boolean;
    spacing: number;
    enableClose: boolean;
    enableBack?: boolean;
    back?: Function;
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
    isOpen,
    spacing,
    enableClose,
    enableBack,
    back,
}) => {

    const [open, setOpen] = React.useState(isOpen);

    return (
        <div>
            <BootstrapDialog
                onClose={(event, reason) => { if (reason && reason !== 'backdropClick') closeDialog() }}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
                spacing={spacing}
            >
                {enableBack &&
                    <IconButton
                        aria-label="close"
                        onClick={back}
                        sx={{
                            position: 'absolute',
                            left: 8,
                            top: 12,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <ArrowBackTwoToneIcon />
                    </IconButton>}
                <DialogTitle sx={{ m: 0, p: 2, marginLeft: enableBack && '32px' }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                {enableClose &&
                    <IconButton
                        aria-label="close"
                        onClick={() => {
                            closeDialog();
                            window.history.back()
                        }}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                <Children dividers>
                    {children}
                </Children>
                <DialogActions>
                    {/* <Button autoFocus onClick={closeDialog}>
                        {confirmLabel}
                    </Button> */}
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}