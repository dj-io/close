import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { profiles } from '../../redux/actions/UserActions.ts';
import SignOut from './SignOut.tsx';
import { ISignOutDispatchToProps, ISignOutStateToProps } from '../../types/user.ts';
import { expiredToken, login, logout } from '../../redux/actions/AuthActions.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): ISignOutStateToProps => ({
    user: state.UserState.user,
    isExpired: state.AuthState.isExpired,
    token: state.AuthState.token,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): ISignOutDispatchToProps => ({
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),
    profiles: bindActionCreators(profiles, dispatch),
    expiredToken: bindActionCreators(expiredToken, dispatch)
});

export const SignOutContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(SignOut)