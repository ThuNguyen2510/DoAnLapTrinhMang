import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends React.Component{
    
    render()
    {
        var n_style={
            height: "40px",
            fontSize: "16px",
            fontFamily: "cursive",
            backgroundColor: "#8ab5e1 !important"
        }
        var li_style={
            listStyle: "none"
        }
        return(
            <nav className="navbar App-navbar" style={n_style}>
            <div className="container">
                <li className="nav-item" style={li_style}>
                  <a className="nav-link" href="#"><i className="fas fa-home"></i>Trang Chủ</a>
                </li>
                <li className="nav-item" style={li_style}>
                  <a className="nav-link " href="#">Thể Loại </a>
                </li>
                <li className="nav-item" style={li_style}>
                  <a className="nav-link" href="#" >Truyện Mới</a>
                </li>
                <li className="nav-item" style={li_style}>
                  <a className="nav-link" href="#" ><i className="fab fa-hotjar"></i>Truyện Hot</a>
                </li>          
            </div>
          </nav>
        );
    }
}
export default Nav;
      