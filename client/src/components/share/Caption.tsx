import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import MultiField from '../../common/components/fields/MultiField.tsx';

interface ICaption {
    avatar: string;
    userName: string;
    img: string;
    isSubmitting: boolean;
}

const Caption: React.FC<ICaption> = ({ avatar, userName, img, isSubmitting }) => {
    return (
        <>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="profile-pic">
                        {avatar}
                    </Avatar>
                }

                title={userName}
                subheader=''
            />
            <MultiField
                maxRows={4}
                row={captionFields}
                isSubmitting={isSubmitting}
            />
        </>
    );
}

export default Caption;