import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Link,Switch, NavLink } from "react-router-dom";
import App from '../App';
import Home from './Home';
import Login from './Login';
import routes from '../routes';
class Header extends React.Component{
    
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
            marginLeft: "350px"
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
                    <ul>
                        <li style={li_style}>
                             <Link to="/Signin"><i className="fas fa-sign-in-alt"></i>Sign in</Link>
                        </li>
                    </ul>                
                </div>  
                </div>
            </header>
        );
    }
}
export default Header;
      