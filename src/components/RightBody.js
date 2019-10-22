import React from 'react';
import Comic_mini from './Comic_mini'
 class RightBody extends React.Component{
     render()
     {
        var con_d={
            width: "300px",
            backgroundColor: "#fff",
            height: "98%",
            marginLeft: "950px",
            border: "2.5px solid #e1e1e1",
            marginTop: "50px"
            
        }
        var i_s={
            color:"#ef2d3f"
        }
        var tb_s={
            margin: "20px"
        }
        
         return(
            <>
            <div className="right" style={con_d}>
              <div>
              <h5 className="widget-heading font-nav" title="Truyện đọc nhiều nhất" >
              <i style={i_s} className="fab fa-font-awesome-flag"></i>
                <a href="/" style={i_s}>Truyện đọc nhiều nhất </a>                
                </h5>
              </div>
              <div className="widget-content" style={tb_s}>
                <Comic_mini/>
                
                <Comic_mini/>
               
                <Comic_mini/>
                <Comic_mini/>
               
                <Comic_mini/>
              </div>
            
            </div>
            </>
         );

     }
 }
 export default RightBody;