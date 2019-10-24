import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import routes from '../routes';
import Comic from './Comic';
class Slider extends React.Component{
    render()
    {
        var style={
            height:"420px",
            width:"90%",
            marginLeft:"5%"

        }
        var s={
            backgroundColor:"#a4d8d8",
            float:"left"
        }
        const slider = (
            <AwesomeSlider style={style}>
              <div style={s}>1 </div>
              <div style={s} >2</div>
              <div style={s}>3</div>
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
