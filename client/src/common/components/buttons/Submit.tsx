import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';
import CircularProgress from '@mui/material/CircularProgress';

interface ISubmit {
    label: string;
    func: Function;
    disabledButton: boolean;
    width: number;
    loading: boolean;
}

export const Submit: React.FC<ISubmit> = ({ label, func, disabledButton, width, loading }) => {
    return (
        <Grid
            container
            spacing={0}
            justifyContent="center"
        >
            <SubmitButton
                disabled={disabledButton}
                onClick={() => func()}
                variant="contained"
                width={width}
            >
                {loading ? <CircularProgress size="1.8rem" color="inherit" /> : label}
            </SubmitButton>
        </Grid>
    );
};