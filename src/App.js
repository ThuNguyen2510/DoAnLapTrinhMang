import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <Header/>
        <Nav/>
      <hr></hr>  
      <LeftBody/>
      <RightBody/>
      </div>
    );
  }
  
}

export default App;
