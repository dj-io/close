import * as React from 'react';
import { Dialog } from '../../common/components/dialog/Dialog.tsx';
import { shareFields } from '../../common/constants/formFields.ts';
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
                <Dialog>
                    // Set render condition (if file uploaded)
                    <SelectMedia />
                    <Caption />
                </Dialog>
            </>
        );
    }
}

export default Share;