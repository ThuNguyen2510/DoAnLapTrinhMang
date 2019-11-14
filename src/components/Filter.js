import React from 'react';
import './Filter.css';
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Footer from  './Footer';
import {connect} from 'react-redux';
import {SearchByName} from '../actions/SearchAction'
class Filter extends React.Component
{
    render()
    { 
        return(
            <>
            <Header/>
            <div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9 mb-4">
                            <LeftBody/>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <RightBody/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-2">
                        <Footer/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
     result:state.comics
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      searchByName:(keyword) =>dispatch(SearchByName(keyword))
  
    };
  }
  
  export default Filter;
  