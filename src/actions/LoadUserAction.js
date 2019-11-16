import axios from 'axios';
export const getUserName = (id) => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/users?id=' + id).then(
            data => {

                const us = data.data[0].username

                dispatch(userInfo(us))
            }
        )
    }
}
const userInfo = (user) => ({
    type: "GET-USER-NAME",
    user_: user
})