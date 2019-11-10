import {combineReducers} from 'redux';
import comics from './comic_reducer';
import login from './login_reducer';
import genre from './genre_reducer';
import chapters from './chapter_reducer';
import signup from './signup_reducer';
import comic from './a_comic_reducer';
import chapter from './a_chapter_reducer'
const appReducers= combineReducers({
    comics,
    comic,
    chapters,
    chapter,
    login,
    signup
});
export default appReducers;