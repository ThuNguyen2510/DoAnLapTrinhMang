import React from 'react';
import {Link} from 'react-router-dom';
import './Detail.css';
class Detail extends React.Component
{
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
                    <p>Thể loại: {this.props.Genre_id} </p>
                    <p>Trạng thái: <span className="status">{this.props.status}</span> </p>
                    <p></p>
                    <i className="fas fa-heart">{this.props.like}</i>
                    <i className="far fa-eye">{this.props.read}</i>
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
export default Detail;