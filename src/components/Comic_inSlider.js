import React from 'react';
import Comic_detail from './Comic_detail';
import {Link,Route} from 'react-router-dom';
class Comic_inSlider extends React.Component{
    render()
    {
        return (
            <>
            
            <Link className="book-img position-relative" to="/Comic_id" >
            <img  src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
            </Link>
            <Link to="/Comic_id"> <h6 >
            <div className="name-book">Hệ Thống Game Tại Dị Giới</div></h6></Link>                
            
            </>
        )
        }
}
export default Comic_inSlider;