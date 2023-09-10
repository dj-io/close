import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { ConfirmButton } from '../../styles/Buttons.Styles.ts';

interface IConfirm {
    label: string;
    func: Function;
}

export const Confirm: React.FC<IConfirm> = ({ label, func }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <ConfirmButton variant="text" onClick={func}>{label}</ConfirmButton>
        </Grid>

    );
}
