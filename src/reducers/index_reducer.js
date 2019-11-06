import {combineReducers} from 'redux';
import comics from './comic_reducer';
import login from './login_reducer';
import genre from './genre_reducer';
const appReducers= combineReducers({
    comics,
    genre ,
    login
});
export default appReducers;