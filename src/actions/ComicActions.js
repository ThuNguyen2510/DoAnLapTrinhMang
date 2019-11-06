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
        return axios.get('http://127.0.0.1:3000/comics?Id='+Id).then(
            data=>
            {   
                const c=data.data[0]
              
                axios.get('http://127.0.0.1:3000/genres?genre_id='+c.Genre_id).then
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

const returnList = (comics) => ({
    type: 'SHOW_LIST',
    list: comics
});

const returnOneComic = (comic,gen) =>({
    type:'SHOW_A_COMIC',
    comic: comic,
    gen: gen
})


