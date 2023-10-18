import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Find from './Find.tsx';
import { returnFind } from '../../redux/actions/AppActions.ts';
import { openFind } from '../../redux/actions/AppActions.ts';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IFindStateToProps => ({
    isFindOpen: state.FindState.isFindOpen,
    foundUser: state.FindState.foundUser,
    following: state.UserState.following,
    user: state.UserState.user,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IFindDispatchToProps => ({
    openFind: bindActionCreators(openFind, dispatch),
    returnFind: bindActionCreators(returnFind, dispatch),
});

export const FindContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Find)