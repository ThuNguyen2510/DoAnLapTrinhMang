import React from 'react';
import {Link,Route} from 'react-router-dom';
import './Nav.css'
class Nav extends React.Component{
    render(){
        return(
            <>
                <nav id="nav" className="navbar navbar-expand navbar-dark bg-dark static-top">
                    <form className="d-none d-md-inline-block form-inline "  ></form>
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>Logout </Link>
                        </li>                        
                    </ul>
                </nav>
            </>
        );
    }
}
export default Nav;  