import * as React from 'react';
import { useState, useEffect } from 'react';
import HideImageTwoToneIcon from '@mui/icons-material/HideImageTwoTone';
import { ConfirmStatus } from './ConfirmStatus.tsx';

interface IConfirmItemProps {
    username: string;
    isOpen: boolean;
    confirmMode: boolean;
    setConfirmMode: Function;
    icon: React.ReactHTMLElement
    title: string;
    desc: string;
    link: string;
    removeItem: Function
}

const ConfirmItem: React.FC<IConfirmItemProps> = ({
    username,
    isOpen,
    confirmMode,
    setConfirmMode,
    icon,
    title,
    desc,
    link,
    removeItem
}) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <ConfirmDialog
            isOpen={open}
            openDialog={() => setOpen(true)}
            closeDialog={() => this.setOpen(false)}
            title={username}
            spacing={1}
            enableClose={true}
            enableBack={confirmMode}
            back={() => setConfirmMode(false)}
        >
            <ConfirmStatus
                icon={icon}
                title={title}
                description={desc}
                link={link}
                func={() => removeItem()}
            />
        </ConfirmDialog>
    );
}

export default ConfirmItem;