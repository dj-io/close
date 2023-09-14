import * as React from 'react';
import { Grid } from '@mui/material';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import SelectMedia from './SelectMedia.tsx'
import Caption from './Caption.tsx';
interface IShareProps {

}

interface IShareState {
    open: boolean;
    file: string;
    mediaType: string;
}

export type ShareProps = IShareStateToProps & IShareDispatchToProps & IShareProps

class Share extends React.Component<ShareProps> {
    state: IShareState = {
        open: true,
        file: '',
        mediaType: 'img',
    }

    setOpen = ({ open }) => this.setState({ open });

    handleUpload = (files) => {
        const file = URL.createObjectURL(files);

        if (!files.type.startsWith('image'))
            this.setState({ mediaType: 'video' });

        this.setState({ file });
    }

    render(): JSX.Element {
        return (
            <>
                <ConfirmDialog
                    title="Share New Post"
                    spacing={!this.state.file && 20}
                    enableBack={true}
                    isOpen={this.state.open}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => this.setOpen(false)}
                    back={() => this.setState({ file: '' })}
                >
                    {!this.state.file && <SelectMedia handleUpload={this.handleUpload} />}
                    {this.state.file && <Caption img={this.state.file} mediaType={this.state.mediaType} />}
                </ConfirmDialog>
            </>
        );
    }
}

export default Share;