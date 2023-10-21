import * as React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import { Form } from '../../common/components/form/Form.tsx';
import { BackGroundHeader, BackGroundText, StyledCard } from './Signup.Styles.ts';
import { signUpfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISignupDispatchToProps, ISignupStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { register } from '../../common/api/user/Registration.Api.ts';
import { FormValues } from '../../common/types.js';
import { signupSchema } from '../../common/utils/validation.ts';



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
        user: {}
    }

    initialValues: FormValues = {
        name: '',
        email: '',
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const { name } = e.target;

        this.setState({
            user: {
                ...this.state.user,
                [name]: e.target.value
            }
        });
        console.log("=== user", this.state)
    };

    handleRegistration = () => {
        register(this.state.user);
        this.setState({ user: {} })
    }

    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '75vh' }}
            >
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <BackGroundHeader color="#228B22" >
                        Close
                    </BackGroundHeader>
                </Grid>
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <BackGroundText color="text.secondary">
                        Share The Weird Stuff
                    </BackGroundText>
                </Grid>
                <StyledCard sx={{ minWidth: 275, zIndex: 1000 }}>
                    <Form
                        buttonLabel="Sign up"
                        fields={signUpfields}
                        initialValues={this.initialValues}
                        validationSchema={signupSchema}
                        change={this.handleChange}
                        submit={this.handleRegistration}
                        disableValue='username'
                    />
                    <Typography
                        sx={{
                            marginTop: '10px',
                            color: '#3C414270'
                        }}
                    >
                        {UserActionTypes.HAS_ACCOUNT}
                    </Typography>
                    <Confirm
                        label="Sign in"
                        func={() => this.props.userHasAccount(true)}
                    />
                </StyledCard>
            </Grid>

        );
    }
}

export default Signup;