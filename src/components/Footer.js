import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <section id="footer">
                <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <ul className="list-unstyled quick-links">
                        <li><a href=""><i className="fa fa-angle-double-right" />Home</a></li>
                        <li><a href=""><i className="fa fa-angle-double-right" />Thể loại</a></li>
                        <li><a href=""><i className="fa fa-angle-double-right" />Truyện hot</a></li>
                        <li><a href=""><i className="fa fa-angle-double-right" />Truyện mới</a></li>
                        <li><a href=""><i className="fa fa-angle-double-right" />Top tuần</a></li>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    
                    <ul className="list-unstyled quick-links">
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-right" />Videos</a></li><i aria-hidden="true"></i>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    
                    <ul className="list-unstyled quick-links">
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                        <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
                        <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right" />Imprint</a></li>
                    </ul>
                    </div>
                </div>		
                </div>
            </section>
            </div>
        )
    }
}
export default Footer;