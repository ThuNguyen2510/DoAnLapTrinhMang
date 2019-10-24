import React from 'react';
import {Link,Route} from 'react-router-dom';
class Comic_mini extends React.Component{
    render()
    {
        var i_s={
            width: "40px",
            float: "left",
            textDecoration: "none",
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"14px",
            textDecoration: "none",
        }
        
        return(
            <>
            <div className="popular-item-wrap">
                <div className="popular-img widget-thumbnail c-image-hover">
                <Link className="book-img position-relative" to="/Comic_id" style={i_s}>
            <img style={i_s} src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                </Link>
                </div>
           
                <div className="popular-content">
                    <h4 className="widget-title">
                        <Link style={a_s} to="/Comic_id">Hệ Thống Game Tại Dị Giới</Link>
                    </h4>
                    <span class="post-on font-meta"> September 21, 2019 </span>                    
            </div>
           
            </div>
            <hr></hr>
            </>
        );
    }
}
export default Comic_mini;