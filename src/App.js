import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <Router history={history}>
        <Header/>
        <Nav/>
      <hr></hr>  
      <LeftBody/>
      <RightBody/>
      </Router>
      </div>
    );
  }
  
}

export default App;
