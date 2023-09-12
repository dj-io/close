import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

import { StyledField } from '../../styles/Fields.Styles.ts';


interface ITextFieldProps {
    row: any;
    isSubmitting: boolean;
}

/**
 * Common Field Functional component
 * Reusable Field component 
 * @param props @interface ITextFieldProps 
 * @returns 
 */
export const TextField: React.FC<ITextFieldProps> = ({ row, isSubmitting }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <StyledField
                type={row.type}
                name={row.name}
                id={row.id}
                label={row.label}
                variant="outlined"
                disabled={isSubmitting}
                sx={{ minWidth: 275 }}
            />
        </Grid>

    );
}