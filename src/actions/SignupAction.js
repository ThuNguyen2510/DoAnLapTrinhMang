import axios from 'axios';
export const signup = (username,email,password,role) =>
{
    return dispatch=>{
       
        return axios.post('http://127.0.0.1:3000/users',{username,email,password,role}).then(
            ({data: user})=>{                
                dispatch(createAccount(user))
            }
        )
    }
}
const createAccount = (user) => ({
    type : 'CREATE_ACC',
    user:user
    
})
