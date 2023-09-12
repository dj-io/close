import * as React from 'react';
import { Grid } from '@mui/material';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import SelectMedia from './SelectMedia.tsx'
import Caption from './Caption.tsx';
interface IShareProps {

}

interface IShareState {

}

export type ShareProps = IShareStateToProps & IShareDispatchToProps & IShareProps

class Share extends React.Component<ShareProps> {
    state: IShareState = {
        open: true,
    }

    setOpen = ({ open }) => this.setState({ open });

    render(): JSX.Element {
        return (
            <>
                <ConfirmDialog
                    isOpen={this.state.open}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => this.setOpen(false)}
                    label=''
                    title="Share New Post"
                >
                    {/*// Set render condition (if file uploaded)*/}
                    <SelectMedia />
                    {/* <Caption /> */}
                </ConfirmDialog>
            </>
        );
    }
}

export default Share;