import * as React from 'react';
import { useState, useEffect } from 'react';

import { StyledField } from '../../styles/Fields.Styles.ts';


interface IInputFieldProps {
    row: any;
    isSubmitting: boolean;
}

/**
 * Common Field Functional component
 * Reusable Field component 
 * @param props @interface IInputFieldProps 
 * @returns 
 */
export const InputField: React.FC<IInputFieldProps> = ({ row, isSubmitting }) => {

    return (
        <>
            <StyledField
                type={row.type}
                name={row.name}
                id={row.id}
                label={row.label}
                variant="outlined"
                disabled={isSubmitting}
            />
        </>
    );
}