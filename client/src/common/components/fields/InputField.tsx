import * as React from 'react';
import { CustomInput } from '../../styles/Fields.Styles.ts';
import { Button, Grid, InputLabel, FormHelperText } from '@mui/material';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';

interface IInputField {
    row: Object;
    isSubmitting: boolean;
}

const InputField: React.FC<IInputField> = ({ row, isSubmitting }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <FormHelperText>{row.inputTitle}</FormHelperText>
            <CustomInput
                accept="image/*"
                style={{ display: 'none' }}
                id={row.name}
                multiple
                type={row.type}
            />
            <InputLabel htmlFor={row.name}>
                <SubmitButton disabled={isSubmitting} variant="contained" component="span">
                    {row.label}
                </SubmitButton>
            </InputLabel>
        </Grid>
    );
}

export default InputField;