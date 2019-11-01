import {combineReducers} from 'redux';
import comic from './comic';
import login from './login';
const appReducers= combineReducers({
    comic,
    login
});
export default appReducers;