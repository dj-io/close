import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.tsx';
import { IHomeDispatchToProps, IHomeStateToProps } from '../../types/app.js';
import { feed } from '../../redux/actions/UserActions.ts';
import { openFind } from '../../redux/actions/AppActions.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IHomeStateToProps => ({
    user: state.UserState.user,
    following: state.UserState.following,
    isFindOpen: state.FindState.isFindOpen,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IHomeDispatchToProps => ({
    feed: bindActionCreators(feed, dispatch),
    openFind: bindActionCreators(openFind, dispatch)
});

export const HomeContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Home)