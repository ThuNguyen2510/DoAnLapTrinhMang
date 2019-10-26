import React from 'react';
import {Link,Route} from 'react-router-dom';
import './Update_Comic.css';
import './index.css'
import Nav from './Nav';
import Content from './Content';
import Breadcrumb from './Breadcrumb';
class Update_Comic extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            list:[
                {
                    "id": 1,
                    "name": "Calystegia collina (Greene) Brummitt ssp. collina"
                  }, {
                    "id": 2,
                    "name": "Korthalsella cylindrica (v. Tiegh.) Engl."
                  }, {
                    "id": 3,
                    "name": "Paspalum wrightii Hitchc. & Chase"
                  }, {
                    "id": 4,
                    "name": "Viola ×consocia House"
                  }, {
                    "id": 5,
                    "name": "Carex lasiocarpa Ehrh."
                  }, {
                    "id": 6,
                    "name": "Acer circinatum Pursh"
                  }, {
                    "id": 7,
                    "name": "Draba nivalis Lilj."
                  }, {
                    "id": 8,
                    "name": "Anemone edwardsiana Tharp var. petraea Correll"
                  }, {
                    "id": 9,
                    "name": "Desmodium cuspidatum (Muhl. ex Willd.) DC. ex D. Don var. cuspidatum"
                  }, {
                    "id": 10,
                    "name": "Erigeron elmeri (Greene) Greene"
                  }
            ]
        }
    }
    render()
    {
        const list= this.state.list.map((a,index)=>           
                <tr>
                    <td ><Link to="/">Chương số {a.id} : {a.name}</Link></td>
                    <td >
                    <ul>
                        <li id="but" key={index}><Link to={"/Comic/id/Chapters/Update/"+index}><i class="far fa-edit"></i></Link></li>
                        <li id="but" key={index}><Link to={"/Comic/id/Chapters/Delete/" +index}><i id="del" class="far fa-minus-square"></i></Link></li>
                    </ul>
                    </td>
                </tr>
            
        )
        return(
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
                                <label><Link to="/Comic/"><i class="fas fa-plus"></i>Thêm chương </Link></label>
                                
                                </div>
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
                
                              <div className="row list-chap">
                                    <div className="col-xs-12">
                                        <h3 className="title">Danh sách chương</h3>
                                    </div>
                                    <div className="col-xs-12">
                                       <table>{list}</table>
                                       <div className="dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="dataTable_previous"><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link></li>
                                                <li className="paginate_button page-item active"><Link to={"/Comic/trang"+1} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link></li>
                                                <li className="paginate_button page-item "><Link to={"/Comic/trang"+2} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">2</Link></li>
                                                <li className="paginate_button page-item "><Link to={"/Comic/trang"+3} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">3</Link></li>
                                                <li className="paginate_button page-item next" ><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Next</Link></li>

                                                </ul>
                                            </div>
                                    </div>
                                  </div>  
                            </form>

                        </div>
                        <div className="col-md-5 order-md-2 mb-4">
                            <div className="row">
                                <img src="http://dummyimage.com/250x235.bmp/dddddd/000000"></img>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block"><i class="fas fa-upload"></i></button>                            
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
                
                
            </body>
            </>
        );
    }
}
export default Update_Comic;