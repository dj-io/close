import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { ConfirmButton } from '../../styles/Buttons.Styles.ts';
import CircularProgress from '@mui/material/CircularProgress';

interface IConfirm {
    label: string;
    func: Function;
    loading: boolean;
    disabled: boolean;
}

export const Confirm: React.FC<IConfirm> = ({ label, func, loading, disabled }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <ConfirmButton disabled={disabled} variant="text" onClick={func}>
                {loading ? <CircularProgress color="success" /> : label}
            </ConfirmButton>
        </Grid>

    );
}
