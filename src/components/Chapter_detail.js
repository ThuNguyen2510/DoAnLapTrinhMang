import React from 'react';
import Nav_chap from './Nav_chap';
import Header from './Header';
import Footer from './Footer';
import Chap_content from './Chap_content';
import {Link} from 'react-router-dom';
import './Chapter_detail.css';
import {fetchChapter,fetchChapters} from '../actions/ChapterAction'
import {fetchComicName} from '../actions/ComicActions'
import {connect} from 'react-redux'
class Chapter_detail extends React.Component{
    componentDidMount()
    {
        this.props.fetchChapter(this.props.match.params.id,this.props.match.params.index)
        this.props.fetchComicName(this.props.match.params.index)
        //this.props.fetchChapters(this.props.match.params.index);
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
       
        var chaps=[]
        return <>
         <div className="nav-content"> 
                    <i className="fas fa-home"></i><Link to="/">Trang chủ</Link><i className="fas fa-angle-right"></i>
                    <Link to={"/Comic/"+this.props.match.params.index}>{this.props.comic.Name}</Link><i className="fas fa-angle-right"></i>
                    <Link to={"/Comic/"+this.props.match.params.index+"/Chapter/"+this.props.match.params.id}>Chap {this.props.match.params.id}</Link>
                    <hr/>
                </div>
                <div className="list-chap">
                    <Link to="/Comic/:index/Chapter/:id">{name}</Link><br/> 
                    
                    <select className="chapter" >
                        {/* {chap} */}
                    </select>
                </div>
                <Chap_content content={content}/>
                <select className="chapter" >
                    {/* {chap} */}
                </select>
                {/* <Chap_content chapptername={} content={} /> */}
                <hr/>
                <Footer/>
            
        </>
    }
    render(){
        return(
            <div>
                <Header/>
                <Nav_chap/>
                <hr/>
                {this.show()}
            </div>   
            
        );

    }
}
const mapStateToProps = (state) => {
    return {
     chap: state.chapters,  
     comic: state.comics,
     chaps:state.chapters
    
  }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchChapter: (chap_id,comic_id)=> dispatch(fetchChapter(chap_id,comic_id)),
        fetchComicName: (id) => dispatch(fetchComicName(id)),
        fetchChapters: (id) => dispatch(fetchChapters(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chapter_detail);