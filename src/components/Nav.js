import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
class Nav extends React.Component{
    
    render()
    {
        var n_style={
            height: "40px",
            fontSize: "20px",
            fontFamily: "cursive",
            backgroundColor: "#8ab5e1 !important",
        }
        var li_style={
            listStyle: "none"
        }
        return(
            <nav className="mainmenu__nav" style={n_style}>
            <div className="container">
                <li className="nav-item" style={li_style}>
                  <Link className="nav-link" to="/"><i className="fas fa-home"></i>Trang Chủ</Link>
                </li>
                <li className="nav-item" style={li_style}>
                  <Link className="nav-link " to="/Category">Thể Loại </Link>
                </li>
                <li className="nav-item" style={li_style}>
                  <Link className="nav-link" to="/TruyenMoi" ><i className="fas fa-newspaper"></i>Truyện Mới</Link>
                </li>
                <li className="nav-item" style={li_style}>
                  <Link className="nav-link" to="/TruyenHot" ><i className="fab fa-hotjar"></i>Truyện Hot</Link>
                </li>          
            </div>
          </nav>
        );
    }
}
export default Nav;
      