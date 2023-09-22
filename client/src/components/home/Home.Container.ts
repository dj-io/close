import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.tsx';
import { IHomeDispatchToProps, IHomeStateToProps } from '../../types/app.js';
import { feed } from '../../redux/actions/UserActions.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IHomeStateToProps => ({
    user: state.UserState.user,
    following: state.UserState.following,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IHomeDispatchToProps => ({
    feed: bindActionCreators(feed, dispatch),
});

export const HomeContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Home)