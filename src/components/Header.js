import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import './Header.css';
import Nav from './Nav';
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
      var d_style={
        marginLeft: "300px",
        marginTop:"20px"
      }
      var li={
        color:"#e3538c",
        fontSize:"17px",
        textDecoration: "none",
        
      }
      return(
        <>
          <div className="containers">
            <div className="row" id="head"> 
                <div className =" col-md-12 col-lg-12">
                    <Nav/>
                </div>
            </div>
          </div>
          {/* <div style={d_style}>
          {this.getLink()}
          </div>  
             */}
        </>
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
      