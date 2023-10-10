import { combineReducers } from "redux";
import UserState from './UserState.ts';
import FindState from './FindState.ts';
import AuthState from './AuthState.ts'

const reducers = {
    UserState,
    FindState,
    AuthState,
}
// COMBINE ALL APP REDUCERS 
export default combineReducers(reducers);