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
            width:"90%",
            marginLeft:"5%"

        }
        var s={
            backgroundColor:"rgba(102, 177, 177, 0.55)",
            float:"left",           
        }
        const slider = (
            <AwesomeSlider style={style}>
              <div style={s} className="row"> 
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              </div>
              <div style={s} className="row"> 
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              </div>
              <div style={s} className="row"> 
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
              </div>
              <div className="col-md-4">
              <Comic_inSlider/> 
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
