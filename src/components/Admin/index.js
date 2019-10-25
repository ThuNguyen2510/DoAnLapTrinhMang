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
                <Content/>
            </body>
           
        );
    }
}
export default index;