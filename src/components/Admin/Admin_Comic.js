import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import './Admin_Comic.css';
import {connect} from 'react-redux';
import Breadcrumb from './Breadcrumb';
class Admin_Comic extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            list:[]
        }
    }
    show(){
        return this.state.list.map((a,index)=>
        <tr>
            <td> <Link to={"/Comic/"+index+"/Edit"}>{a.Name}</Link></td>
            <td>{a.Author}</td>
            <td>{a.id}</td>     
            <td>
            <ul>
                <li id="but" key={index}><Link to={"/Comic/"+index+"/Edit"}><i class="far fa-edit"></i></Link></li>            
                <li id="but" key={index}><Link to={"/Comic/" +index+"/Delete"}><i id="del" class="far fa-minus-square"></i></Link></li>
            </ul>
            </td>           
        </tr>
        
        )
      }
    render() 
    {
        var a={
            float:"left"
        }
        var k="Quản lý truyện";
        return(
            <>
            <div className="containers">
               <div className="row" >                   
                   <div className="col-md-2 col-lg-2">
                        <Content/>
                   </div>
                   <div className="col-md-10 col-lg-10">                     
                        <Nav/>                        
                        <Breadcrumb br="Quản lý truyện "/>
                        <div className="card">
                            <div className="card-header">
                                <p><i class="fas fa-table mr-2"></i>Danh sách truyện</p>
                            </div>
                            <div id="k"> <Link to="/Comics/Add"><i class="fas fa-plus"></i>Thêm truyện </Link></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div className="dataTables_wrapper dt-bootstrap4" id="dataTable_wrapper">                                       
                                        <div className="row>">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="input-group" >
                                                    <input type="search" id="adsearch" className="form-control" placeholder="Tìm tên truyện, tác giả..." />
                                                    <span className="input-group-btn">
                                                        <button id="adbut" className="btn btn-primary" type="submit" >
                                                        <i className="fas fa-search"></i>
                                                        </button>                    
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table table-bordered dataTable" id="dataTable">
                                                    <tr role="row">
                                                        <th>Tên truyện</th>
                                                        <th>Tác giả</th>
                                                        <th>Thể loại</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    {this.show()}
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="dataTables_info ml-4" id="dataTable_info" role="status" aria-live="polite"><i class="fas fa-pencil-ruler mr-2"></i>THỐNG KÊ ... cuốn truyện</div>                                                                         
                                        </div>
                                        <div className="row justify-content-center align-items-center">
                                            <div className="dataTables_paginate paging_simple_numbers ">
                                                <ul className="pagination ">
                                                    <li className="paginate_button page-item previous disabled" id="dataTable_previous"><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link></li>
                                                    <li className="paginate_button page-item active"><Link to={"/Comics/trang/"+1} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link></li>
                                                    <li className="paginate_button page-item "><Link to={"/Comics/trang"+2} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">2</Link></li>
                                                    <li className="paginate_button page-item "><Link to={"/Comics/trang"+3} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">3</Link></li>
                                                    <li className="paginate_button page-item next" ><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Next</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                          
            </div>
            </>
                     
           
        );
    }
}
export default Admin_Comic;
// function mapStateToProps (state)
// {
//   return{
//     list: state.comic
//   }
// }
// export default connect(mapStateToProps)(Admin_Comic);  