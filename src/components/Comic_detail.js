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
class Comic_detail extends React.Component{
    constructor(props)
    {
        super(props)
        this.props.fetchOneComic(this.props.match.params.index);  
    }

    Name(){
        var result=[];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
            result=this.props.comic[i].Name     
        }
        return <> {result}</>;        
    }
    Author(){
        var result=[];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
            result=this.props.comic[i].Author     
        }
        return <> {result}</>;
        
    }
    Gen(){
        var result=[];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
            result=this.props.comic[i+1]  
        }
        return <> {result}</>;
        
    }
    Like(){
        var result=[];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
            result=this.props.comic[i].Number_of_Like     
        }
        return <> {result}</>;
        
    }
    Read()
    {
        
            var result=[];
            for(var i = 0; i < this.props.comic.length-1; i++)
            {
                result=this.props.comic[i].Number_of_Read    
            }
            return <> {result}</>;
            
        
    }
    Status(){
        var result=[];
        for(var i = 0; i < this.props.comic.length-1; i++)
        {
            var s=this.props.comic[i].Status
            if(s==0)
            {
                result="Còn tiếp"
            }
            else if(s==2)
            {
                result="Full"
            }

        }
        return <> {result}</>
    }
    Description()
    {
        
            var result=[];
            for(var i = 0; i < this.props.comic.length-1; i++)
            {
                result=this.props.comic[i].Description  
            }
            return <> {result}</>;
            
        
    } 
    image()
    {
        var im;
        for(var i=0;i<this.props.comic.length-1;i++)
        {
          im=<img src={this.props.comic[i].Image}></img>
        }
        return <>{im}</>
    }
    
    show()
    {
       
        return <>
         
        <div className="container">    
            <Header/>
            <Nav/>

            </div>  <hr/>              
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <div className="row wrap-detail">
                            <div className="col-md-4">
                               {this.image()}
                            </div>
                            <div className="col-md-8 details">
                            <Detail Name={this.Name()} Author={this.Author()} id={this.Gen()} like={this.Like()} read={this.Read()} status={this.Status()} description={this.Description()} />
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                        <ListChap comic_id={this.props.match.params.index} />
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
    }
    render()
    {
       
        return(
            <>
           {this.show()}
           </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
     comic: state.comics, 
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchOneComic: (id) => dispatch(fetchOneComic(id)),
     
     
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Comic_detail);