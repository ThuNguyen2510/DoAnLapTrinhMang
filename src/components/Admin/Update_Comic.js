import React from 'react';
import {Link,Route} from 'react-router-dom';
import './Update_Comic.css';
import './index.css'
import Nav from './Nav';
import Content from './Content';
class Update_Comic extends React.Component{
    render()
    {
        return(
            <>
            <body id="page-top">
                <Nav/>
                <div id="wrapper">
                <Content/>                
                </div>
                
                
            </body>
            </>
        );
    }
}
export default Update_Comic;