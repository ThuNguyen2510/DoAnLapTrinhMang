import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
class Comic_detail extends React.Component{
    render()
    {
        return(
            <>
            <div>
                
            <Header/>
            <Nav/>           
            <hr></hr> 
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <hr/>
                <div className="row">   
                    <Footer/>                
                </div>
            </div>
            </div>
           
            </>
        )
    }
}
export default Comic_detail;   