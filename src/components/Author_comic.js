import React from 'react';
import './Author_comic.css';
import Header from './Header';
import Footer from './Footer';
import Comic_inSlider from './Comic_inSlider';
import {Link} from 'react-router-dom';
class Author_comic extends React.Component
{
    render()
    {
        return(
            <>
            <div className="container">
                <Header/>
            </div>
            <hr></hr>
            <div className="container">

                <div className="row">
                <div className="col-md-12 nex"> 
                    <i className="fas fa-home"></i><Link to="/">Trang chủ</Link><i className="fas fa-angle-right"></i>
                    <Link to="/Comic/:index">Tái sinh để theo đuổi anh</Link><i className="fas fa-angle-right"></i>
                    <Link to="/cm/">Chap 1</Link>
                    <hr/>
                </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                    <div className="col-md-2">
                        <Comic_inSlider/>
                    </div>
                </div>
            </div>
            <div className="container">
                <Footer/>
            </div>
            </>
        );
    }
}
export default Author_comic;