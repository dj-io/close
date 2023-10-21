import * as React from 'react';
import Grid from '@mui/material/Grid';
import { BackGroundHeader, BackGroundText, StyledCard } from './Signin.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { signInfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISigninDispatchToProps, ISigninStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { Typography } from '@mui/material';
import { FormValues } from '../../common/types.ts';
import { signinSchema } from '../../common/utils/validation.ts';
import { auth } from '../../common/api/auth/Authenticate.Api.ts';
import withRouter from '../../common/hooks/WithRouter.tsx';
import { find } from '../../common/api/user/Users.Api.ts';

interface ISigninProps {

}

interface ISigninState {
    user: any;
    badCredentials: boolean;
}

export type SigninProps = ISigninStateToProps & ISigninDispatchToProps & ISigninProps

class Signin extends React.Component<SigninProps> {
    state: ISigninState = {
        user: {},
        badCredentials: false,
    }

    initialValues: FormValues = {
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
    };

    handleSignin = async () => {
        const { user } = this.state;
        const { navigate } = this.props;

        const res = await auth(user);
        if (!res) this.setState({ badCredentials: true });

        if (res?.status === 200) {
            this.props.login(res.data)
            const loggedIn = await find(user.username)
            this.props.profiles(loggedIn.data)
            navigate('/home')
        }

    }

    render(): JSX.Element {
        return (
            <>

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
                        alignItems="flex-end"
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
                            buttonLabel="Sign in"
                            fields={signInfields}
                            validationSchema={signinSchema}
                            initialValues={this.initialValues}
                            disableValue='username'
                            change={this.handleChange}
                            submit={this.handleSignin}
                        />
                        {
                            this.state.badCredentials && (
                                <Typography variant='caption' sx={{ marginTop: '10px', color: 'red' }}>
                                    {UserActionTypes.BAD_CREDENTIALS}
                                </Typography>
                            )
                        }
                        <Typography
                            sx={{
                                marginTop: '10px',
                                color: '#3C414270'
                            }}
                        >
                            {UserActionTypes.NO_ACCOUNT}
                        </Typography>
                        <Confirm
                            label="Signup"
                            func={() => this.props.userHasAccount(false)}
                        />
                    </StyledCard>
                </Grid>
            </>

        );
    }
}

export default withRouter(Signin);