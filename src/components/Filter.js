import React from 'react';
import './Filter.css';
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Footer from  './Footer';
class Filter extends React.Component
{
    render()
    {
        return(
            <>
            <div>
                <div className="container">
                    <Header/>
                </div>
                <Nav/>
                <hr/>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">
                            <LeftBody/>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <RightBody/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Filter;