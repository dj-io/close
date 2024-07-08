import * as React from 'react';
import Grid from '@mui/material/Grid';
import { BackGroundHeader, BackGroundText, SigninWrapper, StyledCard } from './Signin.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { signInfields } from '../../common/constants/formFields.ts';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';
import { ISigninDispatchToProps, ISigninStateToProps } from '../../types/user.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { CardMedia, Typography } from '@mui/material';
import { FormValues } from '../../common/types.ts';
import { signinSchema } from '../../common/utils/validation.ts';
import { auth } from '../../common/api/auth/Authenticate.Api.ts';
import withRouter from '../../common/hooks/WithRouter.tsx';
import { find } from '../../common/api/user/Users.Api.ts';
import { CloseIcon } from '../signup/Signup.Styles.ts';

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
        username: this.props.authenticatedUser.username || '',
        password: this.props.authenticatedUser.password || ''
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

    setLoginCredentials = (token, username) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(username));

        this.props.login(
            JSON.parse(localStorage.getItem('token')),
            JSON.parse(localStorage.getItem('user'))
        );
    }

    handleSignin = async () => {
        const { user } = this.state;
        const { navigate, authenticatedUser } = this.props;
        const userLogin = Object.keys(user)?.length ? user : authenticatedUser;

        const res = await auth(userLogin);
        if (!res) this.setState({ badCredentials: true });

        if (res?.status === 200) {
            this.setLoginCredentials(res.data, userLogin.username);
            this.props.userCredentials({});
            navigate('/home');
        }

    }

    render(): JSX.Element {
        return (
            <>
                <SigninWrapper
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <BackGroundHeader color="#228B22">
                            Close
                        </BackGroundHeader>
                    </Grid>
                    <StyledCard sx={{ p: 1 }}>
                        <CloseIcon
                            component={"img"}
                            height="auto"
                            image='https://www.onlygfx.com/wp-content/uploads/2017/11/abstract-watercolor-circle-2-5.png'
                            alt='close-logo'
                        />
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
                </SigninWrapper>
            </>

        );
    }
}

export default withRouter(Signin);