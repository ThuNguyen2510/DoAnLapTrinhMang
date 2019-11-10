import React from 'react';
import {Link} from 'react-router-dom';
import './Detail.css';
import {likeComic} from '../actions/ComicActions';
import {connect} from 'react-redux'
class Detail extends React.Component
{
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
                    <p>Tác giả: <Link to="/Author">{this.props.Author}</Link></p>
                    <p>Thể loại: {this.props.id} </p>
                    <p>Trạng thái: <span className="status">{this.props.status}</span> </p>
                    <p></p>
                   <button onClick={this.Like()}> <i className="fas fa-heart">{this.props.like}</i></button>
                   <button> <i className="far fa-eye">{this.props.read}</i></button>
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