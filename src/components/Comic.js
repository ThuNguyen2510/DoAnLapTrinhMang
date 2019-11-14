import React from 'react';
import {Link,Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchChapters} from '../actions/ChapterAction'
class Comic extends React.Component{

    render()
    {
        var i_s={
            width: "150px",
        }
        var d_s={
            marginBottom: "8px",
            backgroundColor: "rgb(249, 241, 241)",
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"10px",
            fontWeight: "600",
            lineHeight: "1.0",
            textDecoration: "none"
        }
        var i_k={
            padding: "10px"
        }
        // var x={
        //     color:"#999",
        //     textAlign:"left"
        // }
        var sp={
            backgroundColor: "#ebebeb",
            borderRadius: "10px",
            fontSize:"10px",
            fontWeight: "600",
            textDecoration: "none",
            textAlign:"center",
            padding: "5px"
        }
        var icon={
            fontSize: "10px",
            color: "gray"
        }
        return(
            <>
            <div className="col-12 col-md-3" style={i_k}>
                    <div className="detail">
                        <Link className="img" to={"/Comic/"+this.props.id}>
                            <img style={i_s} src={this.props.Src}  />
                        </Link>
                        <p className="title"><Link style={a_s} to={"/Comic/"+this.props.id}>{this.props.name}</Link></p>
                        <span className="chapter font-meta" style={sp}>
                        <Link to="/Search" className="btn-link" style={sp}>Tác giả: {this.props.author}</Link>
                        </span> 
                        <div className="view-like" style={icon}>
                            <i className="fa fa-eye">{this.props.follow}</i>
                            <i className="fa fa-heart">{this.props.like}</i>
                        </div>
                    </div>
                </div>
                <div className="item-summary">
                    <div className="post-title font-title">
                        <h4 className="title">
                            <Link style={a_s} to={"/Comic/"+this.props.id}>{this.props.name}</Link>
                        </h4>
                    </div>
                    <div style={x}>
                        {this.props.descrip}
                    </div>
                    <span className="chapter font-meta" style={sp}>
                        <Link to={"/Author/"+this.props.author} className="btn-link" style={sp}>Tác giả: {this.props.author}</Link>
                    </span>                    
                </div>
           
            </>
        );
        
    }
}

  export default Comic;