import * as React from 'react';
import { StyledCard } from './Signin.Styles';
import { Form } from '../../common/components/form/Form.tsx';
import { signInfields } from '../../common/constants/formFields.ts';

interface SigninProps {

}

interface SigninState {

}

class Signin extends React.Component<SigninProps, SigninState> {
    constructor(props: SigninProps) {
        super(props);
        this.state = { : };
    }
    render() {
        return (
            <>
                <StyledCard sx={{ minWidth: 275 }}>

                    <Form fields={signInfields} initialValues={{}} />
                </StyledCard>
            </>
        );
    }
}

export default Signin;