import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
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
            //backgroundImage:"url(http://hinhnenppt.com/uploads/images/hinh-nen-powerpoint-don-sac-23-hinh-nen-powerpoint-mau-vang-pastel-1491892714-1.jpg)",
            backgroundColor: "#fffffc",
            float:"left",
            backroundSize: "cover"
        }
        const slider = (
            <AwesomeSlider style={style}>
            <div className="row " style={s}> 
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
              
              <div style={s} className="row"> 
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
              <div style={s} className="row"> 
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