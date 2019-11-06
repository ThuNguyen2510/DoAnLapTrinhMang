import React from 'react';
import {connect} from 'react-redux'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Detail from './Detail';
import Detail_R from './Detail_R';
import ListChap from './ListChap';
import './Comic_detail.css';
import {fetchOneComic} from '../actions/ComicActions';
import { fetchGenre} from '../actions/GenreAction';
class Comic_detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
            id:this.props.match.params.index
          };
      }
      componentDidMount()
      {
            this.props.fetchOneComic(this.props.match.params.index);  
      }
      show(){
        var result= [];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
             var tus=""
         if(this.props.comic[i].Status===0) tus=  "Còn tiếp"; else tus = "Full";

            result=<Detail Name={this.props.comic[i].Name} Author={this.props.comic[i].Author} 
            Genre_id={this.props.comic[i+1]} like={this.props.comic[i].Number_of_Like} read={this.props.comic[i].Number_of_Read}
            status={tus} description={this.props.comic[i].Description} />
        }
        return result;
    }
    image()
    {
        var im=[];
        for(var i=0;i<this.props.comic.length-1;i++)
        {
          im=  <img src={this.props.comic[i].Image} >
            </img>
        }
        return im;
    }
    render()
    {
       
        return(
            <>
            <div className="container">    
            <Header/>
            <Nav/>

            </div>      <hr/>              
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <div className="row wrap-detail">
                            <div className="col-md-4">
                               {this.image()}
                            </div>
                            <div className="col-md-8 details">
                                 {this.show()}
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                        <ListChap/>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="col-md-12 col-lg-3">
                        <Detail_R/>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <hr/>
                <div className="row">   
                    <Footer/>                
                </div>
            </div>   
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
     comic: state.comics, 
  //gen:state.comics.gen    

    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchOneComic: (id) => dispatch(fetchOneComic(id)),
     // fetchGenre:(gen_id) => dispatch(fetchGenre(gen_id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Comic_detail);