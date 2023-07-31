import * as React from 'react';
import { useState, useEffect } from 'react';

import { StyledField } from '../../styles/Fields.Styles.ts';


interface IInputFieldProps {
    row: any;
    isSubmitting: boolean;
}

export const InputField: React.FC<IInputFieldProps> = ({ row, isSubmitting }) => {

    return (
        <>
            <StyledField
                type="text"
                name={row.name}
                id={row.id}
                label={row.label}
                variant="outlined"
                disabled={isSubmitting}
            />
        </>
    );
}