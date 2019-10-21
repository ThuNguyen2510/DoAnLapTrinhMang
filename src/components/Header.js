import React from 'react';

class Header extends React.Component{
    
    render()
    {
        var image_s={
            width:"150px"
          }
          var d1_S={
            marginRight: "-10px"
          }
          var input_s={
            width:"400px",
            margin: "30px",
          }
        return(
            <header className="container mt-3 site-header">
                <div className="d-flex">
                    <a href="/" className="site-logo"><img src={require('../TVT.PNG')} alt="Logo" style={image_s} /></a>
                    <div id="react-root_desktop-search" className="search" style={d1_S}>
                    <form action="/tim-kiem/nang-cao/">
                        <div className="input-group" style={input_s} >
                        <input type="search" className="form-control" placeholder="Tìm tên truyện, tác giả..." aria-label="Tìm tên truyện, tác giả" name="q" autoComplete="off" onkeyup="if (!window.__cfRLUnblockHandlers) return false; initSearch(this)" data-cf-modified-ed9b747aa85a3145e1dd84eb- />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit" >Tìm
                            <i className="iconfont icon-search"></i>
                            </button>                    
                        </span>
                        </div>
                    </form>
                        </div>
                </div>
            </header>
        );
    }
}
export default Header;
      