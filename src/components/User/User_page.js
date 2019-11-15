import React from 'react';
import './User_page.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Info from './Info';
import Book from './Book';
import {Link,Route} from 'react-router-dom';

class User_page extends React.Component{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-xs-6 col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-10">
                        <div className="ml-sm-2">
                            <Nav br="Thông tin"/>
                            <div className="row">
                                {/* <div className="col-xs-6 col-md-2">
                                    <img src="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/TogaPrint_grande.png?v=1552807118" alt="avatar" id="ava"/>
                                </div>
                                <div className="col-xs-12 col-md-10 content">
                                    <Info/>
                                    {/* <h5>Username</h5>
                                    <h6>#userID</h6> */}
                                {/* </div> */} 
                                <Info/>
                            </div>
                        </div>                        
                    </div>
                    
                </div>
                <div className="row">
                
                </div>
                
            </>
        )
    }
}
export default User_page;