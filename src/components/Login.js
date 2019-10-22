import React from 'react';
import { Router, Route, Link,Switch, NavLink } from "react-router-dom";
import Signup from './Signup';
class Login extends React.Component{
    
    render()
    {
        var image_s={
            width:"250px",marginLeft:" 540px"
          }
        var d_s={
                    
            border: "1px solid #E1E1E1",
            padding: "10px 20px 10px 10px",
            backgroundColor: "#42100f",
            borderRadius: "8px",
            width: "500px",
            marginLeft:" 400px"
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
        return(
                  
             
            <div className="relative z-1 mw6-l center-l">
                <div className="w-50 p-3">
                <Link to="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></Link>
                <div className="bg-white br2 ba bw1 b--gray1 shadow-1 pa4 pa5-l mb5 ba bw1 b--gray2" style={d_s}>
                <h1 style={sign}>SIGN IN</h1>
                    <form>
                    <div className="form-group">
                        <p style={p} ><i className="far fa-user"></i>User Name</p>
                        <input style={input} type="text" className="form-control" id="userName"
                        placeholder="Mugiwara" name="txtUserName" />
                    </div>
                    <div className="form-group">
                        <p style={p}><i className="fas fa-lock"></i>PassWord</p>
                        <input style={input}type="password" className="form-control" id="passWord"
                        placeholder="***********" name="txtPassWord" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
                </div>
                <div>Not have Account <Link to="/Signup" >Signup</Link></div>
                <Route path="/Signup" exact component={Signup}/>
                </div>
                    
             

         
        )
    }
}
export default Login;