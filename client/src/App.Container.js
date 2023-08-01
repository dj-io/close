import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App.js';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state) => ({
    hasAccount: state.UserState.hasAccount,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => ({

});

export const AppContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(App)