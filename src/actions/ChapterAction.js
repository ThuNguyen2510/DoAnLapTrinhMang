import axios from 'axios';
export const fetchChapters= (comic_id) =>
{
    return dispatch =>{
        return axios.get('http://127.0.0.1:3000/chapters?comic_id='+comic_id).then(
            data =>{
                const list=data.data
                dispatch(returnListChapter(list));
            }
        )
    }
}
export const fetchChapter = (chapter_id,comic_id) =>
{
    return dispatch=>{
        return axios.get('http://127.0.0.1:3000/chapters?id='+chapter_id+'&&comic_id='+comic_id).then(
            data=>{
                const gen=data.data
                dispatch(returnChapter(gen))
            }
        )
    }
}
const returnChapter = (Chapter) => (
    {
    type : 'GET_A_CHAPTER',
    chap: Chapter
})
const returnListChapter =(Chapters) =>(
    {
        type:'SHOW_LIST_CHAPTERS',
        chaps:Chapters
    }
)
