import React from 'react';
import './Nav_chap.css';
import {Link} from 'react-router-dom';
class Nav_chap extends React.Component{
    
    render()
    {
        var n_style={
            height: "40px",
            fontSize: "20px",
            fontFamily: "cursive",
            backgroundColor: "#8ab5e1 !important",
            width: "100%"
        }
        var li_style={
            listStyle: "none"
        }
        return(
          <nav className="mainmenu__nav " style={n_style}>
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
                <li className="nav-item subnav" style={li_style}>
                  <button class="subnavbtn"><Link>Màu nền</Link> <i class="fas fa-caret-down"></i></button>
                  <div class="subnav-content">
                    <option value="#F4F4F4">Xám nhạt</option>
                    <option value="#DFDFE3">Xám Đậm</option>
                    <option value="#E9EBEE">Xanh nhạt</option>
                    <option value="#F4F4E4">Vàng nhạt</option>
                    <option value="#EAE4D3">Màu sepia</option>
                    <option value="#D5D8DC">Xanh đậm</option>
                  </div>
				        </li>        
            </div>
          </nav>
        );
    }
}
export default Nav_chap;
      