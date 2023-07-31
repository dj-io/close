import { combineReducers } from "redux";
import UserState from './UserState.ts';

const reducers = {
    UserState,
}
// COMBINE ALL APP REDUCERS 
export default combineReducers(reducers);