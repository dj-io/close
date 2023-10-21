import * as React from 'react';
import { useState, useEffect } from 'react';
import { IconWrapper, NoActivityLink, NoActivityWrapper, Subject } from './Panels.Styles.ts';
import { Grid, Typography } from '@mui/material';
import { Confirm } from '../buttons/Confirm.tsx';

interface INoActivityProps {
    icon: React.ReactElement;
    title: string;
    description: string;
    link: React.AnchorHTMLAttributes;
    path: string;
    func: Function;
}

/**
 * Common No Activity Panel Functional component
 * Reusable No Activity/Data component 
 * @param props @interface INoActivityProps 
 * @returns 
 */
export const NoActivity: React.FC<INoActivityProps> = ({
    icon,
    title,
    description,
    link,
    path,
    func
}) => {
    return (
        <NoActivityWrapper>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '45vh' }}
            >
                <Grid item sx={12} >
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                </Grid>
                <Typography
                    sx={{ fontWeight: 'bold' }}
                    variant="h3"
                    color="text.primary"
                >
                    {title}
                </Typography>
                <Subject
                    variant="subtitle1"
                    color="text.secondary"
                >
                    {description}
                </Subject>
                {path && <NoActivityLink to={path} id={link} > {link} </NoActivityLink>}
                {func && <Confirm label={link} func={func} />}
            </Grid>
        </NoActivityWrapper>
    );
};

