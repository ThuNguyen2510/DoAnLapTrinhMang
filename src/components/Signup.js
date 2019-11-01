import React from 'react';
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import routes from '../routes';
import { Router, Route, Link,Switch, NavLink } from "react-router-dom";
class Signup extends React.Component{
    
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
            <>           
             <div className="relative z-1 mw6-l center-l">
                <div className="w-50 p-3">
                <Link to="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></Link>
                <div className="bg-white br2 ba bw1 b--gray1 shadow-1 pa4 pa5-l mb5 ba bw1 b--gray2" style={d_s}>
                <h1 style={sign}>SIGN UP</h1>
                    <form>
                    <div className="form-group">
                        <p style={p} ><i className="far fa-user"></i>User Name</p>
                        <input style={input} type="text" className="form-control" 
                        placeholder="MuGiWara" />
                    </div>
                    <div className="form-group">
                        <p style={p} ><i className="fas fa-at"></i>Email</p>
                        <input style={input} type="text" className="form-control" 
                        placeholder="abcdef@gmail.com"  />
                    </div>
                    <div className="form-group">
                        <p style={p}><i className="fas fa-lock"></i>PassWord</p>
                        <input style={input}type="password" className="form-control"
                        placeholder="***********"  />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                    <br>
                    </br><br></br>
                    <span><Link to="/Signin"><i className="fas fa-sign-in-alt"></i>Have account </Link></span>
                    <br></br><br></br>
                    <span><Link to="/"><i className="far fa-arrow-alt-circle-left"></i>Back to Homepage </Link></span>
                    </form>
                </div>                   
                </div>                
                </div>
            </>
        )
    }
}
export default Signup;