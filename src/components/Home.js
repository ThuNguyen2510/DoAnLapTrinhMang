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
        return(
            <>           
            <div>
            <Header/>
            <Nav/>
            <Slider/>
            <hr></hr>  
            <LeftBody/>
            <RightBody/>
            </div>
            
            </>
        )
    }
}
export default Home;