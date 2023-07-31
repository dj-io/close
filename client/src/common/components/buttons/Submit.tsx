import * as React from 'react';
import { useState, useEffect } from 'react';
import { SubmitButton } from '../../styles/Buttons.Styles.ts';

interface ISubmit {
    label: string;
    func: Function;
}

export const Submit: React.FC<ISubmit> = ({ label, func }) => {
    return (
        <>
            <SubmitButton onClick={func} variant="contained">{label}</SubmitButton>
        </>
    );
};