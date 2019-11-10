import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {Link } from "react-router-dom";
import {connect} from 'react-redux'
class Header extends React.Component{
  Login_Signup()
  {
    
    var check=localStorage.getItem('login')
    var span='Sign in/Sign up'
    if(check=='success') span= 'Log out';
    return span
  } 
 
  getLink()
  {
     var i=this.Login_Signup()
      var link="/Signin"
     if(i==='Log out')
     {
   //   alert("Log")
       link='/'
     }
     else if (i==='Sign in/Sign up')
     {
    //   alert("Signin")
       link='/Signin'
     }
     
     return <Link  id="login_s" onClick={this.delete}  to={link}><i className="fas fa-sign-in-alt">{this.Login_Signup()}</i></Link>

  }
  delete()
  {
    // if(this.Login_Signup()==='Log out')
    // {    
         localStorage.clear()
    //     document.getElementById('login_s').setAttribute='Sign in/Sign up';       
    // }
     
  }
    render()
    {
        var image_s={
            width:"150px"
          }
          var d1_S={
            marginRight: "-10px"
          }
          var input_s={
            width:"400px",
            margin: "30px",
          }
          var li_style={
              listStyle:"none",    float: "left",    padding: "15px"
          }
          var d_style={
            width: "8000px",
            marginLeft: "300px",
            marginTop:"20px"
          }
          var li={
            color:"#e3538c",
            fontSize:"17px",
            textDecoration: "none",
            
          }
        return(
            <header className="container mt-3 site-header">
                <div className="d-flex">
                <Link to="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></Link>
                    <div id="react-root_desktop-search" className="search" style={d1_S}>
                    <form action="/tim-kiem/nang-cao/">
                        <div className="input-group" style={input_s} >
                        <input type="search" className="form-control" placeholder="Tìm tên truyện, tác giả..." aria-label="Tìm tên truyện, tác giả" name="q" autoComplete="off" onkeyup="if (!window.__cfRLUnblockHandlers) return false; initSearch(this)" data-cf-modified-ed9b747aa85a3145e1dd84eb- />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit" >
                            <i className="fas fa-search"></i>
                            </button>                    
                        </span>
                        </div>
                    </form>
                </div>
                <div style={d_style}>
                {this.getLink()}
                </div>  
                </div>
            </header>
        );
    }
}
// const mapStateToProps = (state) => {
//   return {
//     //isLoginSuccess: state.login.isLoginSuccess,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //logout: () => dispatch(logout())
//   };
// }

export default Header;
      