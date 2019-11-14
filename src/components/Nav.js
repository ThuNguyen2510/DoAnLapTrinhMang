import React from 'react';
import './Nav.css';
import { Router, Link, NavLink } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {connect} from 'react-redux';
import {logout} from '../reducers/login_reducer';
import {fetchGenres} from '../actions/GenreAction'
import LeftBody from './LeftBody';
import Search from './Search';
import Home from './Home';
class Nav extends React.Component{
    
      constructor(props)
      {
        super(props)
        this.state={
          flag:false,
          search:''
        }
       
        this.handleClick=this.handleClick.bind(this)
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
    });
    let {search}=this.state.search
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
                        {option}
                      </div>
                    </li> 
                    <li className="nav-item">
                      <Link className="name" to="/truyenmoi" ><i className="fas fa-newspaper"></i> Truyện mới</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 form" >
                    <input  value={search} onChange={e => this.setState({search: e.target.value}) }
                     className="input" id='search' type="search" placeholder="Tìm truyện..." aria-label="Search" />
                   <Link  onClick={this.handleClick} to="search" className="btn" id="btnsearch" ><i className="fas fa-search btnsearch"></i></Link>
                  </form>
                </div>
                <div className ="sign">
                  {this.login_logout()}                  
                    </div>
              </nav>
              <div className="container">
              {
                this.state.flag && <Search/>                
              }
              </div>
             
             
        </>

        )
    }
    
    handleClick()
      {
        
        console.log("vsdvv")
        this.setState({
          flag:true
        });
        let{value}=this.state.search
        localStorage.setItem('searchByName',value)
        console.log(value)
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
      localStorage.removeItem('logined_user')
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