import React from 'react';
import {Link,Route} from 'react-router-dom';
import './index.css'
import Hello from './Hello';
import Nav from './Nav';
import Content from './Content';
class index extends React.Component{
    render(){
        return(
            
            <body id="page-top">
                <Nav/>
                <div id="wrapper">
                <Content/>
                <Hello/>
                </div>
                
                
            </body>
           
        );
    }
}
export default index;