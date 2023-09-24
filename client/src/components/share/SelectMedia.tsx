import * as React from 'react';
import { useState, useEffect } from 'react';
import { shareFields } from '../../common/constants/formFields.ts';
import { Form } from '../../common/components/form/Form.tsx';
import InputField from '../../common/components/fields/InputField.tsx';
import { Grid } from '@mui/material';
import { MyDropzone } from '../../common/hooks/Dropzone.tsx';

interface ISelectMedia {
    handleUpload: Function;
}

const SelectMedia: React.FC<ISelectMedia> = ({ handleUpload }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 'auto' }}
        >
            <MyDropzone
                handleUpload={handleUpload}
                children={
                    shareFields.map((field) => (
                        <InputField
                            handleChange={handleUpload}
                            row={field}
                            isSubmitting={false}
                        />
                    ))
                }
            />
        </Grid>
    );
}

export default SelectMedia;