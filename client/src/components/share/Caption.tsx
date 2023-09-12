import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import MultiField from '../../common/components/fields/MultiField.tsx';
import { red } from '@mui/material/colors';
import { captionFields } from '../../common/constants/formFields.ts';
import { ButtonBase, Grid, Paper, Typography } from '@mui/material';
import { Media } from './Share.Styles.ts';

interface ICaption {
    avatar: string;
    userName: string;
    img: string;
    mediaType: string;
    isSubmitting: boolean;
}


const Caption: React.FC<ICaption> = ({ avatar, userName, img, mediaType, isSubmitting }) => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                boxShadow: 'none',
            }}
        >
            <Grid container spacing={12}>
                <Grid item >
                    <Media
                        component={mediaType || 'img'}
                        height="194"
                        src={img}
                        alt="Paella dish"
                        autoPlay style={{ width: 500, height: 300 }} />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={0}>
                        {
                            captionFields.map((field) => (
                                <MultiField
                                    rows={4}
                                    row={field}
                                    isSubmitting={isSubmitting}
                                />
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Caption;