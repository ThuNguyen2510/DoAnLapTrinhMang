import React from 'react';
import Comic_mini from './Comic_mini';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
 class RightBody extends React.Component{
   constructor(props)
   {
     super(props)
     this.state={
       list:[]
     }
   }
    show()
    {
      return this.props.list.map((a,index)=>
      <Comic_mini id={index} src={a.Image} name={a.Name} datetime={a.Post_DateTime}/>
      )
    }
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
            <div className="row">
            <div style={con_d}>
              <div>
              <h5 className="widget-heading font-nav" title="TRUYỆN ĐỌC NHIỀU NHẤT" >
              <i style={i_s} className="fab fa-font-awesome-flag"></i>
                <Link to="/" style={i_s}>TRUYỆN ĐỌC NHIỀU NHẤT</Link>                
                </h5>
              </div>
              <hr></hr>
              <div className="widget-content" style={tb_s}>
                {this.show()}
              </div> 
              <span class="c-wg-button-wrap">
                  <Link style={a_style} className="widget-view-more" to="/TruyenHot">Xem thêm</Link>
              </span>           
            </div>
            </div>            
            <div className="row">             
            </div>
            </>
         );

     }
 }
 export default RightBody;
//  function mapStateToProps (state)
// {
//   return{
//     list: state.comic
//   }
// }
// export default connect(mapStateToProps)(RightBody);   
