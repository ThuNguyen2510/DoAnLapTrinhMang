import React from 'react';
import {Link,Route} from 'react-router-dom';
class Comic_inSlider extends React.Component{
    constructor(props)
    {
      super(props)
    }
    render()
    {
        return (
            <>
            
            <Link className="book-img position-relative" to={"/Comic/"+this.props.id} >
            <img  src={this.props.Image} className="zoom-me" />
            </Link>
            </>
        )
        }
}
  export default Comic_inSlider;