import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

interface IMultiField {
    row: Object // make IRow
    maxRows: Number;
    isSubmitting: boolean;
}

const MultiField: React.FC<IMultiField> = ({ row, maxRows, isSubmitting }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >

            <TextField
                multiline
                id={row.id}
                label={row.label}
                maxRows={maxRows}
                disabled={isSubmitting}
            />
        </Grid>


    );
}

export default MultiField;