import * as React from 'react';
import { useState, useEffect } from 'react';

const SelectMedia: React.FC<ISelectMedia> = () => {
    return (
        <>
            Drag photos and videos here
            <Form buttonLabel="Select from computer" fields={shareFields} initialValues={{}} />
        </>
    );
}

export default SelectMedia;