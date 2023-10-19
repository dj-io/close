import * as React from 'react';
import { useState, useEffect } from 'react';
import { Confirm } from '../buttons/Confirm.tsx';
import { Grid, Typography } from '@mui/material';
import { ConfirmStatusWrapper } from './Panels.Styles.ts';

interface IConfirmStatusProps {
    title: string;
    description: string;
    link: React.AnchorHTMLAttributes;
    func: Function;
}

/**
 * Common Confirm Status Panel Functional component
 * Reusable Status Confirmation component 
 * @param props @interface IConfirmStatusProps 
 * @returns 
 */
export const ConfirmStatus: React.FC<IConfirmStatusProps> = ({
    icon,
    title,
    description,
    link,
    func
}) => {
    return (
        <ConfirmStatusWrapper>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item sx={12} >
                    {icon}
                </Grid>
                <Typography
                    sx={{ fontWeight: 'bold' }}
                    variant="subtitle1"
                    color="text.primary"
                >
                    {title}
                </Typography>
                <Confirm label={link} func={func} />
                <Grid item sx={8} >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </ConfirmStatusWrapper>
    );
}
