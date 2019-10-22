import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { Route, Switch,Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        
        <Router history={history}>
          <Switch>         
          <Route path='/Signin' exact component={Login}/>   
          <Route path='/Signup' exact component={Signup}/>   
          <Route path='/' component={Home} />
          </Switch>
        
      </Router>
      
      </div>
    );
  }
  
}

export default App;
