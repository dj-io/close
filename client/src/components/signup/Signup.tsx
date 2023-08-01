import * as React from 'react';
import { Form } from '../../common/components/form/Form.tsx';
import { Card, Typography } from '@mui/material';
import { StyledCard } from './Signup.Styles.ts';
import { signUpfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISignupDispatchToProps, ISignupStateToProps } from '../../types/user.ts';



interface ISignupProps {
    hasAccount: string;
}

interface ISignupState {

}

export type SignupProps = ISignupStateToProps & ISignupDispatchToProps & ISignupProps

/**
 * Signup class Component
 * @class Signup @extends React.Component<SignupProps>
 */
class Signup extends React.Component<SignupProps> {
    state: ISignupState = {

    }

    render(): JSX.Element {
        return (
            <>
                <StyledCard sx={{ minWidth: 275 }}>
                    <Form fields={signUpfields} initialValues={{}} />
                    <Confirm label="Have an account?" func={() => this.props.userHasAccount(true)} />
                </StyledCard>
            </>
        );
    }
}

export default Signup;