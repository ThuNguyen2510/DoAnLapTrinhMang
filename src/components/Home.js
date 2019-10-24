import React from 'react';
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Slider from './Slider';
import routes from '../routes';
import Footer from './Footer';
class Home extends React.Component{
    
    render()
    {
        var c={
            marginTop:"80px"
        }
        return(
            <>           
            <div>
            <Header/>
            <Nav/>
            <hr></hr>  
            <Slider/>
            
            <div className="container" style={c}>
            <div className="row">
                <div className="col-md-8">
                <LeftBody/>
                </div>
                <div className="col-md-4">
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
        )
    }
}
export default Home;