import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, IconButton, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';

interface IPop {
    label: String | React.ReactElement;
    children: React.ReactElement;
    func: Function;
    tip: string;
}

export const Pop: React.FC<IPop> = ({ label, children, tip, func }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'close-popover' : undefined;

    return (
        <div>
            <IconButton
                sx={{
                    "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
                    }
                }}
                aria-describedby={id}
                variant="text"
                onClick={handleClick}
            >
                <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    enterDelay={2000} title={tip}
                    placement="right"
                >
                    {label}
                </Tooltip>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                sx={{ maxHeight: 300 }}
            >
                <Grid item sx={{ p: 2 }}>{children}</Grid>
            </Popover>
        </div>
    );
}