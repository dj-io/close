import { combineReducers } from "redux";
import UserState from './UserState.ts';
import FindState from './FindState.ts';

const reducers = {
    UserState,
    FindState,
}
// COMBINE ALL APP REDUCERS 
export default combineReducers(reducers);