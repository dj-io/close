import * as React from 'react';
import { StyledCard } from './Signin.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { signInfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISigninDispatchToProps, ISigninStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { Typography } from '@mui/material';

interface ISigninProps {

}

interface ISigninState {

}

export type SigninProps = ISigninStateToProps & ISigninDispatchToProps & ISigninProps

class Signin extends React.Component<SigninProps> {
    state: ISigninState = {

    }

    render(): JSX.Element {
        return (
            <>
                <StyledCard sx={{ minWidth: 275 }}>
                    <Form buttonLabel="Sign in" fields={signInfields} initialValues={{}} />
                    <Typography> {UserActionTypes.NO_ACCOUNT} </Typography>
                    <Confirm label="Signup" func={() => this.props.userHasAccount(false)} />
                </StyledCard>
            </>
        );
    }
}

export default Signin;