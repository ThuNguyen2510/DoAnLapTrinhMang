import React from 'react';
import './Nav.css';
import { Router, Link, NavLink } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Nav extends React.Component{
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
                    <button className="btn btn-primary" id="btnsearch" type="submit"><i className="fas fa-search btnsearch"></i></button>
                  </form>
                </div>
                <div className ="sign">
                        <Link className="link" to="/Signin"><i className="fas fa-sign-in-alt link"></i>  Sign in/Sign up</Link>             
                    </div>
              </nav>
        </>

        )
    }
}
export default Nav;