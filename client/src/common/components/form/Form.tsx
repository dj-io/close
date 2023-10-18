import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Formik, FormikProps } from 'formik';
import { useState, useEffect } from 'react';
import { validationSchema } from '../../utils/validation.ts';
import { FormValues } from '../../types.ts';

import { TextField } from '../fields/TextField.tsx';
import { Submit } from '../buttons/Submit.tsx';

/**
 * interface for Form
 * @interface IFormProps
 * @prop {any} initialValues - sets form initial values
 */
interface IFormProps {
    initialValues: any;
    fields: Array[];
    buttonLabel: string;
    submit: Function;
    change: Function;
    validationSchema: Object;
    disableValue: string;
    loading?: boolean;
}

/**
 * Common Form Functional component
 * Reusable form component 
 * @param props @interface IFormProps 
 * @returns 
 */
export const Form: React.FC<IFormProps> = (props: IFormProps) => {

    // const handleOnSubmit = () => {

    // }

    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={props.validationSchema}
            onSubmit={props.submit}
            enableReinitialize
        >
            {(formikProps: FormikProps<FormValues>) => (
                <form
                    id="submit"
                    name="submit"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    onSubmit={formikProps.handleSubmit}
                >
                    {props.fields.map((field) =>
                        <TextField
                            handleChange={props.change}
                            row={field}
                            isSubmitting={formikProps.isSubmitting}
                            errors={formikProps.errors}
                            touched={formikProps.touched}
                        />
                    )}
                    {props.buttonLabel &&
                        <Submit
                            func={props.submit}
                            label={props.buttonLabel}
                            disabledButton={
                                !formikProps.isValid ||
                                formikProps.isSubmitting ||
                                !formikProps.values[props.disableValue]
                            }
                            loading={props.loading}
                        />
                    }
                </form>
            )}
        </Formik>
    );
}