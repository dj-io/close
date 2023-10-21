import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

import { StyledField } from '../../styles/Fields.Styles.ts';
import { Typography } from '@mui/material';


interface ITextFieldProps {
    row: any;
    handleChange: Function;
    isSubmitting: boolean;
    initialValues: any;
    errors: any;
    touched: boolean;
}

/**
 * Common Field Functional component
 * Reusable Field component 
 * @param props @interface ITextFieldProps 
 * @returns 
 */
export const TextField: React.FC<ITextFieldProps> = ({
    row,
    handleChange,
    isSubmitting,
    initialValues,
    errors,
    touched
}) => {
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
                defaultValue={initialValues[row.name]}
                label={row.label}
                variant="outlined"
                disabled={isSubmitting}
                sx={{ minWidth: 275 }}
                onChange={handleChange}
            />
            {errors[row.name] && touched[row.name] && (
                <Grid item sm  >
                    <Typography
                        variant="text.secondary"
                        sx={{
                            color: 'red',
                            marginLeft: 3,
                            fontSize: 14,
                            display: 'inline-block'
                        }}
                    >
                        {errors[row.name]}
                    </Typography>
                </Grid>
            )}
        </Grid>

    );
}