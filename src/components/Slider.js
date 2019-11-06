import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import routes from '../routes';
import Comic from './Comic';
import './Slider.css';
import Comic_inSlider from './Comic_inSlider';
class Slider extends React.Component{
    render()
    {
        var style={
            height:"420px",
            width:"100%",
            marginLeft:"0%"

        }
        var s={
            backgroundColor:"#f0f0f0",
            float:"left",           
        }
        const slider = (
            <AwesomeSlider style={style}>
            <div style={s} className="row"> 
              <div className="col-md-3">
              <Comic_inSlider id="1"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="2"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="3"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="4"/> 
              </div>
              </div> 
              
              <div style={s} className="row"> 
              <div className="col-md-3">
              <Comic_inSlider id="5"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="6"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="7"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="8"/> 
              </div>

              </div>
              <div style={s} className="row"> 
              <div className="col-md-3">
              <Comic_inSlider id="9"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="10"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="11"/> 
              </div>
              <div className="col-md-3">
              <Comic_inSlider id="12"/> 
              </div>
              </div>
                  
            </AwesomeSlider>
          );
        return(
            <>
            {slider}
            </>
        )
    }
}
export default Slider;
