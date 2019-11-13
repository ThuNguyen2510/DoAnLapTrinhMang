import React from 'react';
// import './Home.css';
import Header from './Header.js';
import Slider from './Slider';
import LeftBody from './LeftBody';
import Footer from './Footer.js';
import RightBody from './RightBody'
class Home extends React.Component{
    render(){
      
        return(
            <>
                <Header/>
                <div className="container_s">
                    <div className="row_s">
                        <div className="col-md-12 lg-col-12" id="_s">
                            <Slider/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <LeftBody/>
                        </div>
                        <div className="col-md-4">
                            <RightBody/>
                        </div>
                    </div>
                    <div className="row">
                        <Footer/>
                    </div>
                </div> 
            </>
        )
    }
}
export default Home;