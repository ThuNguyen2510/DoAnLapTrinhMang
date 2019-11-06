import axios from 'axios';
export const fetchGenre = (genre_id) =>
{
    return dispatch=>{
        return axios.get('http://127.0.0.1:3000/genres?genre_id='+genre_id).then(
            data=>{
                const gen=data.data
                dispatch(returnGenre(gen[0]))
            }
        )
    }
}
const returnGenre = (Genre) => ({
    type : 'GET_GENRE',
    gen: Genre
})
