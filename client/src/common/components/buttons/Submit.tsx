import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';

interface ISubmit {
    label: string;
    func: Function;
    disabledButton: boolean;
}

export const Submit: React.FC<ISubmit> = ({ label, func, disabledButton }) => {
    return (
        <Grid
            container
            spacing={0}
            justifyContent="center"
        >
            <SubmitButton
                disabled={disabledButton}
                onClick={func}
                variant="contained"
            >
                {label}
            </SubmitButton>
        </Grid>
    );
};