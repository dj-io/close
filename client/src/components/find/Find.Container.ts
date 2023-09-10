import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Find from './Find.tsx';
import { openFind, findUsers } from '../../redux/actions/AppActions.ts';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.js';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IFindStateToProps => ({
    isFindOpen: state.UserState.isFindOpen,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IFindDispatchToProps => ({
    openFind: bindActionCreators(openFind, dispatch),
    findUsers: bindActionCreators(findUsers, dispatch),
});

export const FindContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Find)