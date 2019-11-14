import React from 'react';
import {Link} from 'react-router-dom';
import './Detail.css';
import {likeComic} from '../actions/ComicActions';
import {connect} from 'react-redux'
class Detail extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            btnText: 'Like',
            className: 'but-like',
        }
    }
    btnClick()
    {
        if(this.state.btnText==='Like')
        {
            this.setState({
                btnText: 'Unlike',
                className: 'liked'
            })
            
        }else{
            this.setState({
                btnText:'Like',
                className: 'but-like'
            })
        }
    }
    Like()
    {
       // console.log("dnja")
    }
    render()
    {
        return(
            <>
            <div className="title">
                <h3 className="title">
                    <Link to="/Comic/:index" className="comicname">{this.props.Name}</Link>
                </h3>
            </div>
            <div className="contend">
                <div className="info">
                    <p>Tác giả: <Link to="/Author" className="author">{this.props.Author}</Link></p>
                    <p>Thể loại: <Link to="/Search" className="author"> {this.props.id}</Link> </p>
                    <p>Trạng thái: <span className="status">{this.props.status}</span> </p>
                    <p></p>
                    <div className="view">
                        <button className={this.state.className} onClick={this.btnClick.bind(this)}> 
                        <i className="fa fa-heart"></i>
                        </button>
                        <span className="like">{this.props.like}</span>
                        <button className="but-dt"> <i className="fa fa-eye">{this.props.read}</i></button>
                    </div>
                   
                </div>
                <div className="description">
                    <p>
                   {this.props.description}
                    </p>
                    <p></p>
                </div>
            </div>
            </>
        );
    }

}
const mapStateToProps = (state) => {
    console.log(state)
    return {
     comic: state.comic, 
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      likeComic: (id) => dispatch(likeComic(id)),        
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Detail);