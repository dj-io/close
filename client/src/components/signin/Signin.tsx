import * as React from 'react';
import { StyledCard } from './Signin.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { signInfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISigninDispatchToProps, ISigninStateToProps } from '../../types/user.ts';

interface ISigninProps {

}

interface ISigninState {

}

export type SigninProps = ISigninStateToProps & ISigninDispatchToProps & ISigninProps

class Signin extends React.Component<SigninProps> {
    state: ISigninState = {

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log("=== nooo conditionn ==", prevProps, this.props)

        if (prevProps.hasAccount !== this.props.hasAccount) {
            console.log("=== stateee ==", this.props.hasAccount)
        }
    }

    render() {
        return (
            <>
                <StyledCard sx={{ minWidth: 275 }}>
                    <Form fields={signInfields} initialValues={{}} />
                    <Confirm label="Don't have an account?" func={() => this.props.userHasAccount(false)} />
                </StyledCard>
            </>
        );
    }
}

export default Signin;