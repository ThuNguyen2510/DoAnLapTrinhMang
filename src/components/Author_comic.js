import React from 'react';
import './Author_comic.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Comic_inSlider from './Comic_inSlider';
class Author_comic extends React.Component
{
    render()
    {
        return(
            <>
            <div className="container">
                <Header/>
            </div>
            <Nav/>
            <hr></hr>
            <div className="container">
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