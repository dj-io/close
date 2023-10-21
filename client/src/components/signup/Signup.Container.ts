import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userHasAccount } from '../../redux/actions/UserActions.ts';
import Signup from './Signup.tsx';
import { ISignupDispatchToProps, ISignupStateToProps } from '../../types/user.ts';
import { userCredentials } from '../../redux/actions/AuthActions.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): ISignupStateToProps => ({
    hasAccount: state.UserState.hasAccount,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): ISignupDispatchToProps => ({
    userHasAccount: bindActionCreators(userHasAccount, dispatch),
    userCredentials: bindActionCreators(userCredentials, dispatch)
});

export const SignupContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Signup)