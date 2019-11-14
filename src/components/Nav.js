import React from 'react';
import './Nav.css';
import { Router, Link, NavLink } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {connect} from 'react-redux';
import {logout} from '../reducers/login_reducer';
import {fetchGenres} from '../actions/GenreAction'

class Nav extends React.Component{
    constructor(props)
    {
      super(props)
      this.state={}
    }
    componentDidMount()
    {
      this.props.fetchGenres()
    }
    
    render(){
      var li_style={
        listStyle: "none"
    }
    var option=this.props.list.map((a,index)=>{
    return <><option id={index}>{a.genre_name}</option></>
    })
        return(
          <>
          <div className="row">
              <nav className="navbar navbar-expand-md navbar-expand-sm navbar-light bg-color">
                <div className="row  ml-4">
                  <div className="logo">
                    <img className="img" src = {require('../TVT.PNG')} alt = "logo"></img>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse mr-3" id="navbarSupportedContent">
                    <div className="row">
                    <ul className="navbar-nav mx-auto mr-5">
                      <li className="nav-link active">
                        <Link className="name" to="/"><i className="fas fa-home"></i> Trang Chủ<span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-link">
                        <Link className="name" to="/truyenhot"><i className="fab fa-hotjar"></i> Truyệt hot</Link>
                      </li>
                      <li className="nav-link subnav" >
                        <Link className="name" to="/Category">Thể loại</Link><i class="fas fa-caret-down"></i>
                        <div class="subnav-content">
                          {option}
                        </div>
                      </li> 
                      <li className="nav-link">
                        <Link className="name" to="/truyenmoi" ><i className="fas fa-newspaper"></i> Truyện mới</Link>
                      </li>
                    </ul>
                    <div className="row ml-5">
                      <form className="form-inline my-2 my-lg-0 form">
                        <input className="input" type="search" placeholder="Tìm truyện..." aria-label="Search" />
                      <Link className="btn btn-primary" id="btnsearch" to="/Search"><i className="fas fa-search btnsearch"></i></Link>
                      </form>
                    </div>
                    <div className ="row ml-5 mt-2">
                      {this.login_logout()}                  
                    </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
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
     // this.props.logout()
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
   list: state.genre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   // logout: () => dispatch(logout()),
    fetchGenres:() =>dispatch(fetchGenres())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);