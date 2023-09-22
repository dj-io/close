import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Share from './Share.tsx';

/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state) => ({
    user: state.UserState.user,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => ({

});

export const ShareContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Share)