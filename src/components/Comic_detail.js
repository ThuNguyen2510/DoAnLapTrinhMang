import React from 'react';
import {Link,Route} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Slider from './Slider';
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
                <div className="row">                   
                </div>
            </div>
            </div>
           
            </>
        )
    }
}
export default Comic_detail;   