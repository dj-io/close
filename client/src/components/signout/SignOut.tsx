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
        user: {
            username: this.props.user.username,
        }
    }

    initialValues = {
        password: '',
    };

    setOpen = open => this.setState({ open })

    handleChange = (e) => {
        const { name } = e.target;

        this.setState({
            user: {
                ...this.state.user,
                [name]: e.target.value
            }
        });
    }

    handleSignin = async () => {
        const { user } = this.state;
        const { navigate } = this.props;

        const res = await auth(user);
        if (!res) this.setState({ badCredentials: true });

        if (res?.status === 200) {
            this.props.login(res.data);
            this.props.expiredToken(false);
            const loggedIn = await find(user.username)
            this.props.profiles(loggedIn.data)
        }

    }

    render(): JSX.Element {
        return (
            this.props.token && (
                <ConfirmDialog
                    isOpen={this.props.isExpired}
                    openDialog={() => this.setOpen(true)}
                    closeDialog={() => {
                        this.setOpen(false);
                        this.props.logout();
                    }}
                    title={this.props.user.username}
                    spacing={2}
                >
                    <ConfirmStatus
                        icon={<RestartAltTwoToneIcon fontSize="large" />}
                        title="Your session has expired"
                        description="Enter password below to stay logged in"
                        link="I am Logging out"
                        func={() => this.props.logout()}
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