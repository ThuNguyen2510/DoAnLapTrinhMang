import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
class Admin_Comic extends React.Component{
    render() 
    {
        return(
            <>
             <body id="page-top">
               <Nav/>
               <Content/>
               
            </body>
            </>
                     
           
        );
    }
}
export default Admin_Comic;