import React from 'react';
import { Router, Route, Link,Switch, NavLink } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { login } from './../reducers/login_reducer';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        if(localStorage.getItem('signup')!=null)localStorage.removeItem('signup')
        this.onSubmit = this.onSubmit.bind(this);
      }
    render()
    {
        var image_s={
            width:"250px"
          }
        var d_s={
                    
            border: "1px solid #E1E1E1",
            padding: "10px 20px 10px 10px",
            backgroundColor: "#42100f",
            borderRadius: "8px",
            width: "500px",
            textAlign: "center",
        }
        var sign={
            color: "#f66b00",
            fontWeight:" bold",

        }
        var p={
            textAlign:"left",
            fontWeight:" 600",
            fontVariant: "ordinal"
        }
        var input={
            width: "400px",
            marginLeft:" 40px"
        }
        var thi={
            display: "inline-block",
        }
        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return(
                  
             <>
             <form name="loginForm" onSubmit={this.onSubmit}>
            <div className="relative z-1 mw6-l center-l">
                <div className="box">
                  <div className="row">
                  <div className="col-md-12 imeji" >
                  <Link to="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s}  /></Link>
                  </div>
                  <div className="col-md-12">
                  <div className="bg-white br2 ba bw1 b--gray1 shadow-1 pa4 pa5-l mb5 ba bw1 b--gray2" id="bran" style={d_s}>
                  <h1 style={sign}>SIGN IN</h1>
                    <form>
                    <div className="form-group">
                        <p style={p} ><i className="far fa-user"></i> User Name</p>
                        <input style={input} type="text" className="form-control" id="userName"
                        placeholder="Mugiwara" onChange={e => this.setState({email: e.target.value})} value={email} required/>
                    </div>
                    <div className="form-group">
                        <p style={p}><i className="fas fa-lock"></i> PassWord</p>
                        <input style={input}type="password" className="form-control" id="passWord"
                        placeholder="***********" onChange={e => this.setState({password: e.target.value})} value={password} required />
                    </div>
                    <button type="submit" className="btn btn-primary" >Sign in</button>
                    </form>
                  </div>
                  </div>
                </div>
                  
                </div>
                <div>Not have Account <Link to="/Signup" >Signup</Link></div>
                <br></br>
                <span><Link to="/"><i className="far fa-arrow-alt-circle-left"></i>Back to Homepage </Link></span>
                <div className="message">
               
                { isLoginSuccess && this.LoginSuccess() }
               
                </div>
                </div>
                </form>  
             </>

         
        )
    }
    LoginSuccess()
    {
      console.log('login')
      localStorage.setItem('login','success')
      let user =JSON.parse(localStorage.getItem('logined_user'))
      if(user.role===0)      
      { 
        return <Redirect  to="/"/>
        
      }
      else if(user.role==1)
      {
        
        return  <Redirect to="/Admin" />
      }
     
    }
    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
          email: '',
          password: '',
        });
      }
    
}


const mapStateToProps = (state) => {
    return {
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);