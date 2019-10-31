import React from 'react';
import {Link,Route} from 'react-router-dom';
import './index.css'
import Hello from './Hello';
class Content extends React.Component{
    render(){
        return (
            
            <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/Admin/Comics">
                        <i id ="i" className="fas fa-fw fa-tachometer-alt" />
                        <span>Quản lý truyện</span>
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link" to="/Admin/Users">
                        <i id ="i" className="fas fa-users"></i>
                        <span>Quản lý User</span>
                    </Link>
                   </li>
            </ul>
           
        );
    }

}

export default Content;