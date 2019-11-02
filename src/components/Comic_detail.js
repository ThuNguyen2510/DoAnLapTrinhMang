import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Detail from './Detail';
import Detail_R from './Detail_R';
import ListChap from './ListChap';
import {Link} from 'react-router-dom';
import './Comic_detail.css';

class Comic_detail extends React.Component{
    render()
    {
        return(
            <>
            <div className="container">    
            <Header/>
            </div>
            <Nav/> 
            <hr/>          
            <hr></hr> 
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 nav-content">
                    <div className="nav-content-details"> 
                        <i className="fas fa-home"></i><Link to="/">Trang chủ</Link><i className="fas fa-angle-right"></i>
                        <Link to="/Comic/:index">Tái sinh để theo đuổi anh</Link><i className="fas fa-angle-right"></i>
                        <hr/>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-9">
                        <div className="row wrap-detail">
                            <div className="col-md-4">
                                <img src="https://sstruyen.com/assets/img/story//tai-sinh-e-theo-uoi-anh.jpg" alt="Tái sinh để theo đuổi anh">
                                </img>
                            </div>
                            <div className="col-md-8 details">
                                <Detail />
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                        <ListChap/>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="col-md-12 col-lg-3">
                        <Detail_R/>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <hr/>
                <div className="row">   
                    <Footer/>                
                </div>
            </div>   
            </>
        )
    }
}
export default Comic_detail;   