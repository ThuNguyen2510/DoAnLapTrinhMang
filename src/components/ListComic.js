import React from 'react';
import Comic from './Comic';
class ListComic extends React.Component{
    render()
    {
        
        return(
            <>
            <div sty>
                <Comic/>
                <Comic/>
            </div>
            <hr></hr>
            </>
        )
    }
}
export default ListComic;   