import React from 'react';
import Comic from './Comic';
class ListComic extends React.Component{
    render()
    {
        
        return(
            <>                         
                <Comic/>
                <Comic/>
                <hr></hr>
            </>
        )
    }
}
export default ListComic;   