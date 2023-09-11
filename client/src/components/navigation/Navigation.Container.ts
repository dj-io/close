import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './Navigation.tsx';
import { openFind } from '../../redux/actions/AppActions.ts';
import { INavDispatchToProps, INavStateToProps } from '../../types/user.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): INavStateToProps => ({
    isFindOpen: state.FindState.isFindOpen,
});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): INavDispatchToProps => ({
    openFind: bindActionCreators(openFind, dispatch),
});

export const NavContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Navigation)