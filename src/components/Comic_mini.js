import React from 'react';
class Comic_mini extends React.Component{
    render()
    {
        var i_s={
            width: "40px",
            float: "left"
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"14px"
        }
        return(
            <>
            <div>
            <a className="book-img position-relative" href="/">
            <img style={i_s} src="https://yycdn.truyenyy.com/media/novels/2019-04/b48f97e6b6.jpg" alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                </a>
                <div className="flex-primary">
                    <h4 className="book-title">
                        <a style={a_s} href="/truyen/he-thong-game-tai-di-gioi/">Hệ Thống Game Tại Dị Giới</a>
                    </h4>
                    
            </div>
            </div>
            </>
        );
    }
}
export default Comic_mini;