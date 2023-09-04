import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.js';
import { IHomeDispatchToProps, IHomeStateToProps } from '../../types/app.js';


/**
 * Used to access application state
 * @function mapStateToprops
 * @param state Close State
 * @returns 
 */
const mapStateToprops = (state: any): IHomeStateToProps => ({

});

/**
 * dispatches actions to redux store
 * @function mapDispatchToProps
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any): IHomeDispatchToProps => ({

});

export const HomeContainer = connect(
    mapStateToprops,
    mapDispatchToProps,
)(Home)