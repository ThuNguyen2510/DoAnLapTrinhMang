import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import './Admin_Comic.css';
import {connect} from 'react-redux';
import Breadcrumb from './Breadcrumb';
class AddComic extends React.Component{
    render()
    {
        return (
            <>
            <body id="page-top">
                <Nav/>
                <div id="wrapper">
                <Content/> 
                <div id="content-wrapper">
                    <Breadcrumb br="Quản lý truyện/ Airi Satou"/>
                    <div className="row" id="row">
                        <div className="col-md-7 order-md-1">
                            <form className="needs-validation">
                           
                                <div className="mb-3">
                                <label for="username">Tên truyện</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        </div>
                                        <input type="text" class="form-control" id="username" required=""></input>
                                        
                                    </div>
                                </div>
                                <div className="mb-3">
                                <label for="username">Tác giả</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        </div>
                                        <input type="text" class="form-control" id="username" required=""></input>
                                        
                                    </div>
                                </div>
                               
                                <div className="mb-3">
                                <label for="username">Thể loại</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Kiếm hiệp</option>
                                    <option>Ngôn tình</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                <label for="username">Mô tả</label>
                                    <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="4"></textarea>
                                    </div>
                                </div>
                                
                                <div className=" mb-3">
                                    <label for="cc-expiration">Số chương</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""></input>
            
                                </div> 
                                <div className="mb-3">
                                <label><Link to="/Comic/"><i class="fas fa-plus"></i>Thêm chương </Link></label>
                                
                                </div>
                            </form>

                        </div>
                        <div className="col-md-5 order-md-2 mb-4">
                            <div className="row">
                                <img src="http://dummyimage.com/250x235.bmp/dddddd/000000"></img>
                            </div>
                            <input type="file" ></input>                            
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-md-7">

                        </div>
                        <div className="col-md-5">
                        <button type="button" class="btn btn-pill btn-warning">Lưu</button>
                        <button type="button" class="btn btn-square btn-secondary">Cancel</button>
                        </div>
                        
                        </div>
                </div>               
                </div>
                
                
            </body></>
        )
    }
}
export default AddComic;