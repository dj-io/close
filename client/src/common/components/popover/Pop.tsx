import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
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
            <IconButton aria-describedby={id} variant="text" onClick={handleClick}>
                <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={tip} placement="right">{label}</Tooltip>
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
            >
                <Typography onClick={func} sx={{ p: 2 }}>{children}</Typography>
            </Popover>
        </div>
    );
}