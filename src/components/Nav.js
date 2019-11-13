import React from 'react';
import './Nav.css';
import { Router, Link, NavLink } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {connect} from 'react-redux';
import {logout} from '../reducers/login_reducer'
class Nav extends React.Component{

    constructor(props)
    {
      super(props)
    }
    
    render(){
      var li_style={
        listStyle: "none"
    }
   
        return(
          <>
              <nav className="navbar navbar-expand-lg navbar-light bg-color">
                <div className="logo">
                  <img className="img" src = {require('D:/Giao Trinh/Nam4/Ki1/REACT_JS/new/src/TVT.PNG')} alt = "logo"></img>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="name" to="/"><i className="fas fa-home"></i> Trang Chủ<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="name" to="/truyenhot"><i className="fab fa-hotjar"></i> Truyệt hot</Link>
                    </li>
                    <li className="nav-item subnav" >
                      <Link className="name" to="/Category">Thể loại</Link><i class="fas fa-caret-down"></i>
                      <div class="subnav-content">
                        <option value="#F4F4F4">Xám nhạt</option>
                        <option value="#DFDFE3">Xám Đậm</option>
                        <option value="#E9EBEE">Xanh nhạt</option>
                        <option value="#F4F4E4">Vàng nhạt</option>
                        <option value="#EAE4D3">Màu sepia</option>
                        <option value="#D5D8DC">Xanh đậm</option>
                      </div>
                    </li> 
                    <li className="nav-item">
                      <Link className="name" to="/truyenmoi" ><i className="fas fa-newspaper"></i> Truyện mới</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 form">
                    <input className="input" type="search" placeholder="Tìm truyện..." aria-label="Search" />
                   <Link className="btn btn-primary" id="btnsearch" to="/Search"><i className="fas fa-search btnsearch"></i></Link>
                  </form>
                </div>
                <div className ="sign">
                  {this.login_logout()}                  
                    </div>
              </nav>
        </>

        )
    }
    login_logout()
    {
      if(localStorage.getItem('logninning')==='run')
      {
       
        return this.logoutf()
      }
      else  if(localStorage.getItem('login')==='success')
      {
        return this.login()
      }
      else{
        return this.logoutf()
      }
     
    }
    logoutf()
    {
      localStorage.removeItem('login')
      this.props.logout()
      return <>
       <Link className="link" to='/Signin'><i className="fas fa-sign-in-alt link" >Signin/Signup</i></Link> 
       </>  
    }
    login()
    {
      var span
      var link
      var i
      var user    
        console.log('2')
        span='Logout'
        link='/'
        i="fas fa-sign-out-alt"
        user=<Link to="User/page" >{JSON.parse(localStorage.getItem('logined_user')).username}</Link>       
        localStorage.setItem('loginning','run') 
      return <>
        {user}
       <Link className="link" to={link}><i className={i} >{span}</i></Link> 
       </>          

    }

   

}
const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);