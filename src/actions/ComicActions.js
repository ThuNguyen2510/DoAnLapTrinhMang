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
export const fetchComicHot=()=>{
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics?_sort=Number_of_Like&_order=desc?_start=0&_end=12').then(data=>
        {
            dispatch(returnComicHot(data.data))
        })
    }
}
export const fetchComicUpdateNew=()=>{
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics?_sort=Post_DateTime&_order=desc?_start=0&_end=5').then(data=>
        {
            dispatch(returnComicUpdateNew(data.data))
        })
    }
}
export const fetchComicUpdateNew2=()=>{
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics?_sort=Post_DateTime&_order=desc?_start=0&_end=8').then(data=>
        {
            dispatch(returnComicUpdateNew2(data.data))
        })
    }
}
export const fetchComicByCategory=(genre_id)=>{
    return dispatch => {
        return axios.get('http://127.0.0.1:3000/comics?Genre_id='+genre_id).then(data=>
        {
            dispatch(returnComicByCategory(data.data))
        })
    }
}

export const likeComic = (comic_id,Number_of_Like) => {
    return dispatch => {
        return axios.patch('http://127.0.0.1:3000/comics?id='+comic_id,Number_of_Like).then(
            (data)=>{               
               
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
const returnComicHot=(comics) =>({
    type:'COMIC_HOT',
    comics:comics
})
const returnComicUpdateNew=(comics) =>({
    type:'COMIC_UPDATE_NEW',
    comics:comics
})
const returnComicUpdateNew2=(comics) =>({
    type:'COMIC_UPDATE_NEW_2',
    comics:comics
})
const returnComicByCategory =(comics)=>({
    type:'LIST_COMIC_BY_CATEGORY',
    comics
})
