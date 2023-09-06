import * as React from 'react';
import { Dialog } from '../../common/components/dialog/Dialog.tsx';
import { shareFields } from '../../common/constants/formFields.ts';

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

                    Drag photos and videos here
                    <Form buttonLabel="Select from computer" fields={shareFields} initialValues={{}} />

                </Dialog>
            </>
        );
    }
}

export default Share;