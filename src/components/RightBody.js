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
            border: "3px solid #e1e1e1"
            
        }
        var i_s={
            color:"#ef2d3f"
        }
        var tb_s={
            marginLeft: "40px",
            marginTop: "20px"
        }
         return(
            <>
            <div className="right" style={con_d}>
              <div>
              <h5 className="title" title="Truyện đọc nhiều nhất" >
              <i style={i_s} className="fab fa-font-awesome-flag"></i>
                <a href="/" style={i_s}>Truyện đọc nhiều nhất </a>                
                </h5>
              </div>
                <table style={tb_s}>
                    <tr><Comic_mini/></tr>
                    <tr><Comic_mini/></tr>
                    <tr><Comic_mini/></tr>
                    <tr><Comic_mini/></tr>
                    <tr><Comic_mini/></tr>
                </table>
            </div>
            </>
         );

     }
 }
 export default RightBody;