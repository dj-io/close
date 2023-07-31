import * as React from 'react';
import { useState, useEffect } from 'react';
import { ConfirmButton } from '../../styles/Buttons.Styles.ts';

interface IConfirm {
    label: string;
    func: Function;
}

export const Confirm: React.FC<IConfirm> = ({ label, func }) => {
    return (
        <>
            <ConfirmButton variant="text" onClick={func}>{label}</ConfirmButton>
        </>
    );
}
