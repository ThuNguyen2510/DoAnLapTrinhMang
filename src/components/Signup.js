import React from 'react';
import {Link} from "react-router-dom";
import './Signup.css';
import {signup} from '../actions/SignupAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
      }
      onSubmit(e) 
 {
        e.preventDefault();
        let {username, email, password ,repass} = this.state;
        if(password===repass)
        {
            this.props.signup(username,email, password,0);
            localStorage.setItem('signup','success');
            return <Redirect to ='/Signin' />
        }
        else{
            
        }
        
      } 
      Routing()
      {
        if(localStorage.getItem('signup')==='success')
        {
            return <Redirect to='/Signin' />  
        }
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
            width: "500px"
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
        let {username,email, password,repass} = this.state;

        return(
            <>           
             <div className="relative z-1 mw6-l center-l">
                 <div className="box">
                    <div className="row">
                        <div className="col-md-12 bran">
                        <Link to="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></Link>
                        </div>
                        <div className="col-md-12">
                        <div className="bg-white br2 ba bw1 b--gray1 shadow-1 pa4 pa5-l mb5 ba bw1 b--gray2" id="thi" style={d_s}>
                     <h1 style={sign}>SIGN UP</h1>
                    <form className="thi">
                    <div className="form-group">
                        <p style={p} ><i className="far fa-user"></i> User Name</p>
                        <input style={input} type="text" className="form-control" 
                        placeholder="MuGiWara"  onChange={e => this.setState({username: e.target.value})} value={username} />
                    </div>
                    <div className="form-group">
                        <p style={p} ><i className="fas fa-at"></i> Email</p>
                        <input style={input} type="text" className="form-control" 
                        placeholder="abcdef@gmail.com"  onChange={e => this.setState({email: e.target.value})} value={email} />
                    </div>
                    <div className="form-group">
                        <p style={p}><i className="fas fa-lock"></i> PassWord</p>
                        <input style={input}type="password" className="form-control"
                        placeholder="***********"  onChange={e => this.setState({password: e.target.value})} value={password} />
                    </div>
                    <div className="form-group">
                        <p style={p}><i className="fas fa-lock"></i>Confirm PassWord</p>
                        <input style={input} type="password" className="form-control"
                        placeholder="***********"  onChange={e => this.setState({repass: e.target.value})} value={repass} />
                    </div>
                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Sign up</button>
                    <br>
                    </br><br></br>
                    <span><Link to="/Signin"><i className="fas fa-sign-in-alt"></i>Have account </Link></span>
                    <br></br><br></br>
                    <span><Link to="/"><i className="far fa-arrow-alt-circle-left"></i>Back to Homepage </Link></span>
                    </form>
                </div>
                        </div>
                    </div>
                 </div>
                                   
                </div>                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isSignup: state.signup
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        signup: (username,email, password,role) => dispatch(signup(username,email, password,role))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);