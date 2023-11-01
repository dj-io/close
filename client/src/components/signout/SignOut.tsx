import * as React from 'react';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import { Typography } from '@mui/material';
import withRouter from '../../common/hooks/WithRouter.tsx';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { find } from '../../common/api/user/Users.Api.ts';
import { NoActivity } from '../../common/components/panels/NoActivity.tsx';
import { auth } from '../../common/api/auth/Authenticate.Api.ts';
import { ConfirmStatus } from '../../common/components/panels/ConfirmStatus.tsx';
import { Form } from '../../common/components/form/Form.tsx';
import { signOutFields } from '../../common/constants/formFields.ts';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';

interface ISignOutProps {

}

interface ISignOutState {

}

export type SignOutProps = ISignOutStateToProps & ISignOutDispatchToProps & ISignOutProps

class SignOut extends React.Component<SignOutProps> {
    state: ISignOutState = {
        open: false,
        badCredentials: false,
        user: {}
    }

    initialValues = {
        password: '',
    };

    setOpen = open => this.setState({ open })

    handleChange = (e) => {
        const { name } = e.target;

        this.setState({
            user: {
                [name]: e.target.value
            }
        });
    }

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
        const { navigate } = this.props;

        const userLogin = {
            username: this.props.username,
            password: user.password,
        };

        const res = await auth(userLogin);
        if (!res) this.setState({ badCredentials: true });

        if (res?.status === 200) {
            this.setLoginCredentials(res.data, userLogin.username)
            this.props.expiredToken(false);
            const loggedIn = await find(userLogin.username);
            if (loggedIn.status === 200) this.props.profiles(loggedIn.data);
        }

    }

    handleLogout = () => {
        this.props.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    render(): JSX.Element {
        return (
            this.props.token && (
                <ConfirmDialog
                    isOpen={this.props.isExpired}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => {
                        this.setOpen(false);
                        this.handleLogout();
                    }}
                    enableClose={true}
                    title={this.props.username}
                    spacing={2}
                >
                    <ConfirmStatus
                        icon={<RestartAltTwoToneIcon fontSize="large" />}
                        title="Your session has expired"
                        description="Enter password below to stay logged in"
                        link="I am Logging out"
                        func={() => this.handleLogout()}
                    />
                    <Form
                        fields={signOutFields}
                        buttonLabel="Keep me Logged In"
                        disableValue="password"
                        submit={this.handleSignin}
                        change={this.handleChange}
                        initialValues={this.initialValues}
                    />
                    {
                        this.state.badCredentials && (
                            <Typography variant='caption' sx={{ marginTop: '10px', color: 'red' }}>
                                {UserActionTypes.BAD_CREDENTIALS}
                            </Typography>
                        )
                    }
                </ConfirmDialog>
            )
        );
    }
}

export default withRouter(SignOut);