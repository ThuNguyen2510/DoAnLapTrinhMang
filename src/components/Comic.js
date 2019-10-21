import React from 'react';
class Comic extends React.Component{
    render()
    {
        var i_s={
            width: "80px",
            float: "left"
        }
        var d_s={
            marginBottom: "8px",
            backgroundColor: "rgb(249, 241, 241)",
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"17px"
        }
        return(
            <>
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
                    </div>
                    <div class="small">
                        <a href="/tac-gia/ta-truong-thanh/" class="book-author mr-auto" target="_blank"><i class="iconfont icon-write icon-18"></i> Tạ Trường Thành</a>
                    </div>
                  </td>
              </tr>
          </table>           
            </div>
            </>
        );
    }
}
export default Comic;