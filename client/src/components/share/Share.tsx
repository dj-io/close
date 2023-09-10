import * as React from 'react';
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

    }

    render(): JSX.Element {
        return (
            <>
                <ConfirmDialog>
                    // Set render condition (if file uploaded)
                    <SelectMedia />
                    <Caption />
                </ConfirmDialog>
            </>
        );
    }
}

export default Share;