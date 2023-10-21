import * as React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';
import { Form } from '../../common/components/form/Form.tsx';
import { BackGroundHeader, BackGroundText, StyledCard } from './Signup.Styles.ts';
import { signUpfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISignupDispatchToProps, ISignupStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { register } from '../../common/api/user/Registration.Api.ts';
import { FormValues } from '../../common/types.js';
import { signupSchema } from '../../common/utils/validation.ts';
import { ConfirmStatus } from '../../common/components/panels/ConfirmStatus.tsx';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';



interface ISignupProps {
    hasAccount: string;
}

interface ISignupState {
    user: any;
    accountCreated: boolean;
    open: boolean;
}

export type SignupProps = ISignupStateToProps & ISignupDispatchToProps & ISignupProps

/**
 * Signup class Component
 * @class Signup @extends React.Component<SignupProps>
 */
class Signup extends React.Component<SignupProps> {
    state: ISignupState = {
        user: {},
        accountCreated: false,
        open: false,
    }

    initialValues: FormValues = {
        name: '',
        email: '',
        username: '',
        password: ''
    }

    setOpen = open => this.setState({ open })

    handleChange = (e) => {
        const { name } = e.target;

        this.setState({
            user: {
                ...this.state.user,
                [name]: e.target.value
            }
        });
    };

    handleRegistration = async () => {
        const registered = await register(this.state.user);

        if (registered.data) {
            this.props.userCredentials({
                username: this.state.user.username,
                password: this.state.user.password
            });

            this.setState({ accountCreated: true })
            this.setState({ user: {} })
        };

    };

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
                    {
                        <ConfirmDialog
                            isOpen={this.state.accountCreated}
                            openDialog={() => this.setOpen(true)}
                            closeDialog={() => {
                                this.setOpen(false);
                                this.props.userHasAccount(true)
                            }}
                            title={this.state.user.email}
                            spacing={2}
                        >
                            <ConfirmStatus
                                icon={<ScheduleSendTwoToneIcon fontSize="large" />}
                                title={UserActionTypes.CONFIRM_EMAIL}
                                description={`${UserActionTypes.ACTIVATE_NOW} ${this.state.user.email || 'your email'}`}
                                link={UserActionTypes.EMAIL_CONFIRMED}
                                func={() => this.props.userHasAccount(true)}
                            />
                        </ConfirmDialog>
                    }
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
            </Grid >

        );
    }
}

export default Signup;