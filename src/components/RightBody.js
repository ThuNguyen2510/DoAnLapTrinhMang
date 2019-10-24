import React from 'react';
import Comic_mini from './Comic_mini';
import {Link} from 'react-router-dom';
 class RightBody extends React.Component{
     render()
     {
        var con_d={
            backgroundColor: "#fff",
            height: "100%",
            border: "2.5px solid #e1e1e1",
            
        }
        var i_s={
            color:"#ef2d3f",
            textDecoration: "none",
        }
        var tb_s={
            margin: "20px"
        }
        var a_style ={
          cursor: "pointer",         
          border: "1px solid #E1E1E1",
          padding: "3px 8px",
          fontWeight:" bold",
          color: "#f66b00",
          textDecoration: "none",
          backgroundColor: "#42100f",
          color: "white",
          borderRadius: "8px"
        }
         return(
            <>
            <div style={con_d}>
              <div>
              <h5 className="widget-heading font-nav" title="TRUYỆN ĐỌC NHIỀU NHẤT" >
              <i style={i_s} className="fab fa-font-awesome-flag"></i>
                <Link to="/" style={i_s}>TRUYỆN ĐỌC NHIỀU NHẤT</Link>                
                </h5>
              </div>
              <div className="widget-content" style={tb_s}>
                <Comic_mini/>                
                <Comic_mini/>               
                <Comic_mini/>
                <Comic_mini/>               
                <Comic_mini/>
                <Comic_mini/>
              </div> 
              <span class="c-wg-button-wrap">
                  <Link style={a_style}class="widget-view-more" href="/">Xem thêm</Link>
              </span>           
            </div>
            </>
         );

     }
 }
 export default RightBody;