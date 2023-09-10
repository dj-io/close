import * as React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import { Form } from '../../common/components/form/Form.tsx';
import { StyledCard } from './Signup.Styles.ts';
import { signUpfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISignupDispatchToProps, ISignupStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';



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
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '75vh' }}
            >
                {/* <Grid item xs={3}> */}
                <StyledCard sx={{ minWidth: 275 }}>
                    <Form buttonLabel="Sign up" fields={signUpfields} initialValues={{}} />
                    <Typography sx={{ marginTop: '10px' }}>{UserActionTypes.HAS_ACCOUNT}</Typography>
                    <Confirm label="Sign in" func={() => this.props.userHasAccount(true)} />
                </StyledCard>
                {/* </Grid> */}
            </Grid>

        );
    }
}

export default Signup;