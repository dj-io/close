import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { StyledField } from '../../styles/Fields.Styles.ts';

interface IMultiField {
    row: Object // make IRow
    maxRows: Number;
    rows: Number;
    isSubmitting: boolean;
    func: Function;
    change: Function;
    value: string;
}

const MultiField: React.FC<IMultiField> = ({
    row,
    maxRows,
    rows,
    func,
    change,
    isSubmitting,
    value
}) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >

            <StyledField
                multiline
                id={row.id}
                label={row.label}
                disabled={isSubmitting}
                variant="standard"
                sx={{ width: '100%' }}
                onChange={change}
                value={value}
                InputProps={{
                    maxRows,
                    rows,
                    endAdornment:
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="post a comment"
                                onClick={func}
                                onMouseDown={() => { }}
                            >
                                <PostAddIcon sx={{ color: '#238636' }} />
                            </IconButton>
                        </InputAdornment>
                }}
            />
        </Grid>


    );
}

export default MultiField;