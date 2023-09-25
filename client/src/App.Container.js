import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App.js';
import { profiles } from './redux/actions/UserActions.ts';
import { returnFind } from './redux/actions/AppActions.ts';

/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state) => ({
    hasAccount: state.UserState.hasAccount,
    user: state.UserState.user,
    foundUser: state.FindState.foundUser,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => ({
    profiles: bindActionCreators(profiles, dispatch),
    returnFind: bindActionCreators(returnFind, dispatch),
});

export const AppContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(App)