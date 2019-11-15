import React from 'react';
import './Comment.css';
import {Link,Route} from 'react-router-dom';
class Comment extends React.Component{
    render(){
      var comment =  [{
        "id": 1,
        "user_name": 'abc',
        "comic_id": 1,
        "content": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "time": "3:02 PM"
    }, {
        "id": 2,
        "user_name": "mnbcas",
        "comic_id": 8,
        "content": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "time": "4:53 AM"
    }, {
        "id": 3,
        "user_name": "ncjas",
        "comic_id": 4,
        "content": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        "time": "10:36 AM"
    }, {
        "id": 4,
        "user_name": "dajsdnjaskfn",
        "comic_id": 4,
        "content": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "time": "2:43 PM"
    }]
    var cm = comment.map((cmt, index)=>{
      return(
        <li className=" media">
          <Link href="#" className="pull-left">
            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="avatar" className="img-circle mr-3" />
          </Link>
          <div className="row media-body">
            <strong className="text-success">@{cmt.user_name}</strong><br/>
            <p className="text-muted pull-right">
              <small className="text-muted ml-2" style={{fontSize:'10px'}}>{cmt.time}</small>
            </p>
            <p>
              {cmt.content}
            </p>
          </div>
        </li>
      )
    })
        return(
            <>
            <hr/>
            <div className="row bootstrap snippets">
              <div className="col-md-12 col-sm-12">
                <div className="comment-wrapper">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      Comment panel
                    </div>
                    <div className="panel-body">
                      <textarea className="form-control" placeholder="write a comment..." rows={3} defaultValue={""} />
                      <br />
                      <button type="button" className="btn btn-info pull-right">Post</button>
                      <div className="clearfix" />
                      <hr />
                      <ul className="media-list">
                        {cm}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
}
export default Comment;