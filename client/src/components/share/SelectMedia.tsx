import * as React from 'react';
import { useState, useEffect } from 'react';
import { shareFields } from '../../common/constants/formFields.ts';
import { Form } from '../../common/components/form/Form.tsx';
import InputField from '../../common/components/fields/InputField.tsx';
import { Grid } from '@mui/material';

interface ISelectMedia {

}

const SelectMedia: React.FC<ISelectMedia> = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 'auto' }}
        >
            {shareFields.map((field) => <InputField row={field} isSubmitting={false} />)}
        </Grid>
    );
}

export default SelectMedia;