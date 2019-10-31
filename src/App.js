import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { Route, Switch,Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import index from './components/Admin/index';
import createBrowserHistory from 'history/createBrowserHistory';
import Comic_detail from './components/Comic_detail';
import Admin_Comic from './components/Admin/Admin_Comic';
import Update_Comic from './components/Admin/Update_Comic';
import Chapter_detail from './components/Chapter_detail';
import Hello from './components/Admin/Hello';
const history = createBrowserHistory()
class App extends React.Component {
  render(){
    
    return (
      <div className="App">        
        <Router history={history}>
          <Switch>         
          <Route path='/Signin' exact component={Login}/>   
          <Route path='/Signup' exact component={Signup}/>   
          <Route path='/Comic/:index' exact component={Comic_detail}/>   
          <Route path='/TruyenMoi' exact component={Comic_detail}/>   
          <Route path='/TruyenHot' exact component={Comic_detail}/>   
          <Route path='/Category' exact component={Comic_detail}/>
          <Route path='/cm/Chapter' exact component={Chapter_detail}/>   
          <Route path='/Admin' exact component={index}/> 
          <Route path='/Admin_Comic' exact component={Admin_Comic}/> 
          <Route path='/Comic/:index/Edit' component={Update_Comic}/> 
          <Route path='/Comic/:index/Delete' component={Admin_Comic}/> 
          <Route path="/Comics/trang:index" component={Admin_Comic}/>
          <Route path='/Admin_User' exact component={index}/> 
          <Route path='/' component={Home} />
          
          </Switch>        
      </Router>
      
      </div>
    );
  }
  
}

export default App;
