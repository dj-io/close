import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';

interface ISubmit {
    label: string;
    func: Function;
}

export const Submit: React.FC<ISubmit> = ({ label, func }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <SubmitButton onClick={func} variant="contained">{label}</SubmitButton>
        </Grid>
    );
};