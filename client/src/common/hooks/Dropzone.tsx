import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface IDropzone {
    handleUpload: Function;
    children: React.ReactElement;
}

export const MyDropzone: React.FC<IDropzone> = ({ handleUpload, children }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        handleUpload(acceptedFiles[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                // isDragActive ?
                //     <p>Drop your photo here</p> :
                children
            }
        </div>
    )
}