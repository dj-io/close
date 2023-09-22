import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './Profile.tsx';
import { profiles } from '../../redux/actions/UserActions.ts';
import { IProfileDispatchToProps, IProfileStateToProps } from '../../types/user.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IProfileStateToProps => ({
    user: state.UserState.user,
    following: state.UserState.following,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IProfileDispatchToProps => ({
    profiles: bindActionCreators(profiles, dispatch)
});

export const ProfileContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Profile)