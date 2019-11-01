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
                        <li><Link to="/"><i className="fa fa-angle-double-right" />Home</Link></li>
                        <li><Link to="/Category"><i className="fa fa-angle-double-right" />Thể loại</Link></li>
                        <li><Link to="/TruyenHot"><i className="fa fa-angle-double-right" />Truyện hot</Link></li>
                        <li><Link to="/TruyenMoi"><i className="fa fa-angle-double-right" />Truyện mới</Link></li>
                        <li><Link to="/"><i className="fa fa-angle-double-right" />Top tuần</Link></li>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    
                    <ul className="list-unstyled quick-links">
                        <li><Link to="/"><i className="fa fa-angle-double-right" />Home</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />About</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />FAQ</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />Get Started</Link></li>
                        <li><Link to=""><i className="fa fa-angle-right" />Videos</Link></li><i aria-hidden="true"></i>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    
                    <ul className="list-unstyled quick-links">
                        <li><Link to="/"><i className="fa fa-angle-double-right" />Home</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />About</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />FAQ</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right" />Get Started</Link></li>
                        <li><Link to="" title="Design and developed by"><i className="fa fa-angle-double-right" />Imprint</Link></li>
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