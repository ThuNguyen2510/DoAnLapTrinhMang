import React from 'react';
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Slider from './Slider';
import routes from '../routes';
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
            <Slider/>
            <hr></hr>  
            <div className="container" style={c}>
            <div className="row">
                <div className="col-md-8">
                <LeftBody/>
                </div>
                <div className="col-md-4">
                <RightBody/>
                </div>
            </div>
            </div>              
            </div>
            
            </>
        )
    }
}
export default Home;