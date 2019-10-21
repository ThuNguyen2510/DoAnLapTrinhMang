import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <Header/>
        <Nav/>
      <hr></hr>  
      </div>
    );
  }
  
}

export default App;
