import React from 'react';
import Comic from './Comic';
class ListComic extends React.Component{
    render()
    {
        
        return(
            <>
            <div >
                <Comic/>
                <Comic/>
            </div>
            <hr></hr>
            </>
        )
    }
}
export default ListComic;   