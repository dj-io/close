import * as React from 'react';
import { Formik, FormikProps } from 'formik';
import { useState, useEffect } from 'react';
import { validationSchema } from '../../utils/validation.ts';
import { FormValues } from '../../types.ts';

import { InputField } from '../fields/InputField.tsx';
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
}

/**
 * Common Form Functional component
 * Reusable form component 
 * @param props @interface IFormProps 
 * @returns 
 */
export const Form: React.FC<IFormProps> = (props: IFormProps) => {

    const handleOnSubmit = () => {

    }


    return (
        <>
            <Formik
                initialValues={props.initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
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
                        {props.fields.map((field) => <InputField row={field} isSubmitting={formikProps.isSubmitting} />)}
                        <Submit label={props.buttonLabel} />
                    </form>
                )}
            </Formik>
        </>
    );
}