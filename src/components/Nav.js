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
        var li={
          color:"#e3538c",
          fontSize:"17px",
          textDecoration: "none",
          
        }
        var image_s={
          width:"150px"
        }
        var li_style={
            listStyle: "none"
        }
        var d_style={
          width: "8000px",
          marginLeft: "300px",
          marginTop:"20px"
        }
        return(
          <div>
            <nav className="navbar navbar-expand-xl navbar-dark ">
            <a className="navbar-brand" href="#"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentXL" aria-controls="navbarSupportedContentXL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContentXL">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                <Link className=" nav-link" to="/"><i className="fas fa-home"></i>Trang Chủ</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/Category">Thể Loại </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/TruyenMoi" ><i className="fas fa-newspaper"></i>Truyện Mới</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/TruyenHot" ><i className="fab fa-hotjar"></i>Truyện Hot</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
</ul>
              <form className="form-inline my-2 my-lg-0"> 
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
              </form>
                
            </div>
        </nav>          
        </div>
        );
    }
}
export default Nav;
      