import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Find from './Find.js';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.js';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IFindStateToProps => ({

});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IFindDispatchToProps => ({

});

export const FindContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Find)