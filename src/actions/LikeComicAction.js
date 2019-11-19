import axios from 'axios';
export const fetchLike = (user_id, comic_id) => {
    return dispatch => {
        return axios.post('http://127.0.0.1:3000/likes', { user_id, comic_id }).then(
            dispatch(like_Comic(true))
        )
    }

}
export const getLike = (user_id, comic_id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/likes?user_id=' + user_id + '&&comic_id=' + comic_id).then(
            data => {
                // const list = data.data
                // dispatch(gLike(true))
                console.log("DIJW")
                console.log(data.data)
                if (data.data.length === 0) dispatch(gLike(false))
                else dispatch(gLike(true))

            }
        )
    }
}
const like_Comic = (check) => ({
    type: 'LIKED',
    liked: check
})
const gLike = (list) => ({
    type: 'GET-LIKE',
    check: list
})