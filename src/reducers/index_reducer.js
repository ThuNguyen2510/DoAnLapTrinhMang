import {combineReducers} from 'redux';
import comics from './comic_reducer';
import login from './login_reducer';
import genre from './genre_reducer';
import chapters from './chapter_reducer';
import signup from './signup_reducer'
const appReducers= combineReducers({
    comics,
    genre ,
    chapters,
    login,
    signup
});
export default appReducers;