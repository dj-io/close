import * as React from 'react';
import { CustomInput, Media } from '../../styles/Fields.Styles.ts';
import { Button, Grid, InputLabel, FormHelperText, CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';

interface IInputField {
    row: Object;
    isSubmitting: boolean;
    handleChange: Function;
    image: string;
}

const InputField: React.FC<IInputField> = ({ row, isSubmitting, handleChange, image }) => {
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
                accept="image/*, video/mp4, video/x-m4v, video/*"
                style={{ display: 'none' }}
                id={row.name}
                multiple={false}
                type={row.type}
                onChange={handleChange}
            />
            {/* render text button */}
            {row.label && (
                <InputLabel htmlFor={row.name}>
                    <SubmitButton disabled={isSubmitting} variant="contained" component="span">
                        {isSubmitting ? <CircularProgress color="success" /> : row.label}
                    </SubmitButton>
                </InputLabel>
            )}
            {/* render image */}
            {image && (
                <InputLabel htmlFor={row.name}>
                    <Media
                        component="img"
                        image={image}
                        alt={row.name}
                    />
                </InputLabel>
            )}
        </Grid>
    );
}

export default InputField;