import axios from 'axios';
export const fetchGenre = (id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/genres?id=' + id).then(
            data => {
                const gen = data.data
                dispatch(returnGenre(gen[0]))
            }
        )
    }
}
export const fetchGenres = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/genres').then(
            data => {
                const listGenre = data.data
                console.log(listGenre)
                dispatch(returnListGenre(listGenre));
            }
        )
    }
}
const returnGenre = (Genre) => ({
    type: 'GET_GENRE',
    gen: Genre
})
const returnListGenre = (Genres) => ({
    type: 'GET_GENRES',
    gens: Genres
})