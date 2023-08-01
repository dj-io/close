import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './Navigation.tsx';
import { INavDispatchToProps, INavStateToProps } from '../../types/user.ts';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): INavStateToProps => ({

});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): INavDispatchToProps => ({

});

export const NavContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Navigation)