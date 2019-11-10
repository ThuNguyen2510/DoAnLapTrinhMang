import axios from 'axios';
export const fetchListComic = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics').then(data=>
        {
            dispatch(returnList(data.data))
        })
    }
}
export const fetchOneComic=(Id) =>{
    return dispatch=>{
        return axios.get('http://127.0.0.1:3000/comics?id='+Id).then(
            data=>
            {   
                const c=data.data[0]
               
                axios.get('http://127.0.0.1:3000/genres?id='+c.Genre_id).then
                (
                    g => {
                        const g_name=g.data[0].genre_name
                       
                        dispatch(returnOneComic(c,g_name))
                    }
                )            
            }
        )
    }
}
export const likeComic = (comic_id,Number_of_Like) => {
    return dispatch => {
        return axios.patch('http://127.0.0.1:3000/comics?id='+comic_id,Number_of_Like).then(
            (data)=>{               
                console.log(data.data) 
                dispatch(likeComic(data.data))
            })
    }
}
const returnList = (comics) => ({
    type: 'SHOW_LIST',
    list: comics
});

const returnOneComic = (comic,gen) =>({
    type:'SHOW_A_COMIC',
    comic: comic,
    gen: gen
})
const like =(comic) =>({
    type: 'LIKE',
    comic :comic
})


