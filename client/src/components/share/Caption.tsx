import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import MultiField from '../../common/components/fields/MultiField.tsx';
import { red } from '@mui/material/colors';
import { captionFields } from '../../common/constants/formFields.ts';

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
                alt="uploaded image"
            />
            <CardHeader
                avatar={<Avatar alt="Apple" src={avatar} />}
                title={userName}
                subheader=''
            />
            {
                captionFields.map((field) => (
                    <MultiField
                        maxRows={4}
                        row={field}
                        isSubmitting={isSubmitting}
                    />
                ))
            }
        </>
    );
}

export default Caption;