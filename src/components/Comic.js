import React from 'react';
import {Link,Route} from 'react-router-dom';
import Comic_detail from './Comic_detail';
class Comic extends React.Component{
    render()
    {
        var i_s={
            width: "80px",
            float: "left"
        }
        var d_s={
            marginBottom: "8px",
            backgroundColor: "rgb(249, 241, 241)",
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"18px",
            fontWeight: "600",
            lineHeight: "1.2",
            textDecoration: "none"
        }
        var i_k={
            float:"left",

        }
        var x={
            color:"#999",
            textAlign:"left"
        }
        var sp={
            backgroundColor: "#ebebeb",
            padding: "4px 10px",
            borderRadius: "10px",
            fontWeight: "600",
            textDecoration: "none",
            textAlign:"left"
        }
        return(
            <>
            <div className="col-12 col-md-6 badge-pos-1" style={i_k}>
                <div className="page-item-detail manga">
                    <div className="item-thumb hover-details c-image-hover">
                    <Link className="book-img position-relative" to="/Comic_id">
                    <img style={i_s} src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                </Link>
                    </div>
                </div>
                <div className="item-summary">
                    <div className="post-title font-title">
                    <h4 className="title">
                        <Link style={a_s} to="/Comic_id">Hệ Thống Game Tại Dị Giới</Link>
                    </h4>
                    </div>
                    <div style={x}>
                    Mô tả : The Grandmaster of Demonic The Grandmaster of Demonic
                    </div>
                    <span className="chapter font-meta" style={sp}>
                    <Link to="/Tacgia_id" className="btn-link" style={sp}>Tác giả: ABHSKC</Link>
                    </span>                    
                </div>
                
            </div>
            
            </>
        );
    }
}
export default Comic;