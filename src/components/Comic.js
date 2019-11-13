import React from 'react';
class Comic extends React.Component{
    render()
    {
        var i_s={
<<<<<<< Updated upstream
            width: "80px",
            float: "left"
        }
        var d_s={
            marginBottom: "8px",
            backgroundColor: "rgb(249, 241, 241)",
=======
            width: "150px",
>>>>>>> Stashed changes
        }
        // var d_s={
        //     marginBottom: "8px",
        //     backgroundColor: "rgb(249, 241, 241)",
        // }
        var a_s={
            color:"#1b1e21",
<<<<<<< Updated upstream
            fontSize:"17px"
=======
            fontSize:"10px",
            fontWeight: "600",
            lineHeight: "1.2",
            textDecoration: "none"
        }
        var i_k={
             padding: "10px"
        }
        var x={
            color:"#999",
            textAlign:"left"
        }
        var sp={
            backgroundColor: "#ebebeb",
            padding: "4px 10px",
            borderRadius: "10px",
            fontWeight: "400",
            fontSize:"10px",
            textDecoration: "none",
            textAlign:"left"
>>>>>>> Stashed changes
        }
        var icon={
            fontSize: "10px",
            color: "gray"
        }
        return(
            <>
<<<<<<< Updated upstream
            <div style={d_s}>
          <table>
              <tr>
                <td>
                <a className="book-img position-relative" href="/">
                    <img style={i_s} src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                </a>
                <div className="flex-primary">
                    <h4 className="book-title">
                        <a style={a_s} href="/truyen/he-thong-game-tai-di-gioi/">Hệ Thống Game Tại Dị Giới</a>
                    </h4>
                    <div className="book-desc line-clamp line-clamp-2"> Hắn là người địa cầu. Hắn là thanh niên thế kỉ 21 Chiến sĩ ư? Pháp sư hả? Thuần ...</div>
                    </div>
                    <div class="small">
                        <a href="/tac-gia/ta-truong-thanh/" class="book-author mr-auto" target="_blank"><i class="iconfont icon-write icon-18"></i> Tạ Trường Thành</a>
                    </div>
                  </td>
                  <td>
                  <a className="book-img position-relative" href="/">
                    <img style={i_s} src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                </a>
                <div className="flex-primary">
                    <h4 className="book-title">
                        <a style={a_s} href="/truyen/he-thong-game-tai-di-gioi/">Hệ Thống Game Tại Dị Giới</a>
                    </h4>
                    <div className="book-desc line-clamp line-clamp-2"> Hắn là người địa cầu. Hắn là thanh niên thế kỉ 21 Chiến sĩ ư? Pháp sư hả? Thuần ...</div>
=======
            <div className="col-12 col-md-3" style={i_k}>
                    <div className="detail">
                        <Link className="img" to={"/Comic/"+this.props.id}>
                            <img style={i_s} src={this.props.Src}  />
                        </Link>
                        <p className="title"><Link style={a_s} to={"/Comic/"+this.props.id}>{this.props.name}</Link></p>
                        <span className="chapter font-meta" style={sp}>
                        <Link to="/Tacgia_id" className="btn-link" style={sp}>Tác giả: {this.props.author}</Link>
                        </span> 
                        <div className="view-like" style={icon}>
                            <i className="fa fa-eye">{this.props.follow}</i>
                            <i className="fa fa-heart">{this.props.like}</i>
                        </div>
>>>>>>> Stashed changes
                    </div>
                    <div class="small">
                        <a href="/tac-gia/ta-truong-thanh/" class="book-author mr-auto" target="_blank"><i class="iconfont icon-write icon-18"></i> Tạ Trường Thành</a>
                    </div>
<<<<<<< Updated upstream
                  </td>
              </tr>
          </table>           
=======
>>>>>>> Stashed changes
            </div>
            </>
        );
    }
}
export default Comic;