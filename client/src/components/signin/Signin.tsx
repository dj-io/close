import * as React from 'react';
import Grid from '@mui/material/Grid';
import { StyledCard } from './Signin.Styles.ts';
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

}

export type SigninProps = ISigninStateToProps & ISigninDispatchToProps & ISigninProps

class Signin extends React.Component<SigninProps> {
    state: ISigninState = {
        user: {}
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
        this.props.login(res.data);

        if (res.status === 200) {
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
                        alignItems="flex-start"
                    >
                        <Typography
                            color="#228B22"
                            sx={{
                                fontSize: '250px',
                                fontWeight: 'bold',
                                position: 'fixed',
                                marginLeft: 24
                            }} >
                            Close
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Typography
                            color="text.secondary"
                            sx={{
                                fontSize: '125px',
                                fontWeight: 'bold',
                                position: 'fixed',
                                p: 7
                            }} >
                            Share The Weird Stuff
                        </Typography>
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