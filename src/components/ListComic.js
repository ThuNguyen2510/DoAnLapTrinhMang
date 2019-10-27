import React from 'react';
import Comic from './Comic';
import {connect} from 'react-redux';
import Comic_mini from './Comic_mini';
class ListComic extends React.Component{
    
    show(){
      return this.props.list.map(a=>
        <Comic Src={a.Image} name={a.Name} descrip={a.Description} author={a.Author}/>
      )
    }
    render()
    {
        return(
    
            <>                         
              
               {this.show()}
                <hr></hr>
            </>
        )
    }
}
function mapStateToProps (state)
{
  return{
    list: state.comic
  }
}
export default connect(mapStateToProps)(ListComic);   