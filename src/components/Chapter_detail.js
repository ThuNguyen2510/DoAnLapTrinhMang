import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Chap_content from './Chap_content';
import {Link} from 'react-router-dom';
import './Chapter_detail.css';
import {fetchChapter,fetchChapters} from '../actions/ChapterAction'
import {fetchComicName} from '../actions/ComicActions'
import {connect} from 'react-redux'
class Chapter_detail extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        this.props.fetchChapter(this.props.match.params.id,this.props.match.params.index)
    }
   componentWillMount()
   {
       this.props.fetchChapter(this.props.match.params.id,this.props.match.params.index)
       this.props.fetchChapters(this.props.match.params.index)
       
   }
  
   option()
   {
    var chaps=[]
    for(var i=0;i<this.props.chaps.length;i++)
    {
        var select=false;
        if((i+1)==this.props.match.params.id) select=true;
         chaps.push(<option id={i+1} selected={select}>Chương {this.props.chaps[i].id}: {this.props.chaps[i].chapter_name}</option>)
    }
    return chaps;
   }
    show()
    {
        var name=""
        var content=""
        for(var i=0;i<this.props.chap.length;i++)
        {
            name=this.props.chap[i].chapter_name            
            content=this.props.chap[i].content
        }
        return <>
         <div className="nav-content"> 
                    <i className="fas fa-home"></i><Link to="/">Trang chủ</Link><i className="fas fa-angle-right"></i>
                    <Link to={"/Comic/"+this.props.match.params.index}>{localStorage.getItem('comic_name')}</Link><i className="fas fa-angle-right"></i>
                    <Link to={"/Comic/"+this.props.match.params.index+"/Chapter/"+this.props.match.params.id}>Chap {this.props.match.params.id}</Link>
                    <hr/>
                </div>
                <div className="list-chap">
                    <Link to="/Comic/:index/Chapter/:id">{name}</Link><br/> 
                    
                    <select className="chapter">
                        {this.option()}                       
                    </select>
                </div>
                <Chap_content content={content}/>
                <select className="chapter" >
                {this.option()}
                </select>
               
                <hr/>
                <Footer/>
            
        </>
    }
    render(){
        return(
            <div>
                <Header/>
                <hr/>
                {this.show()}
            </div>   
            
        );

    }
}
const mapStateToProps = (state) => {
    return {
     chap: state.chapter,  
     comic: state.comic,
     chaps:state.chapters
    
  }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchChapter: (chap_id,comic_id)=> dispatch(fetchChapter(chap_id,comic_id)),
        fetchChapters: (comic_id) => dispatch(fetchChapters(comic_id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chapter_detail);