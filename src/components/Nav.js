import React from 'react';
import './Nav.css';
class Nav extends React.Component{
    
<<<<<<< Updated upstream
    render()
=======
    render(){
      var li_style={
        listStyle: "none"
    }
   
        return(
          <>
              <nav className="navbar navbar-expand-lg navbar-light bg-color">
                <div className="logo">
                  <img className="img" src = {require('../TVT.PNG')} alt = "logo"></img>
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
>>>>>>> Stashed changes
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
            <nav className="mainmenu__nav" style={n_style}>
            <div className="container">
                <li className="nav-item" style={li_style}>
                  <a className="nav-link" href="#"><i className="fas fa-home"></i>Trang Chủ</a>
                </li>
                <li className="nav-item" style={li_style}>
                  <a className="nav-link " href="#">Thể Loại </a>
                </li>
                <li className="nav-item" style={li_style}>
                  <a className="nav-link" href="#" ><i className="fas fa-newspaper"></i>Truyện Mới</a>
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
      