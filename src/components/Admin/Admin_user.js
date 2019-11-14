import './Admin_user.css';
import React from 'react';
import Nav from './Nav'
import Content from './Content';
import Breadcrumb from './Breadcrumb';
import {Link} from 'react-router-dom';
class Admin_user extends React.Component{
    render(){
        return (
            <>
             <div className="containers">
               <div className="row" >                   
                    <div className="col-md-2 col-lg-2">
                        <Content /> 
                    </div>
                   
                   <div className="col-md-10 col-lg-10" >
                        <Nav/>
                        <Breadcrumb br="Quản lý user"/>
                
                        <div className="card mb-3">
                            <div className="card-header">
                                <i class="fas fa-table"></i>
                                Danh sách user
                            </div>
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
                                            <div className="col-sm-12">
                                                <table className="table table-bordered dataTable" id="dataTable">
                                                    <tr role="row">
                                                        <th>Email</th>
                                                        <th>UserName</th>
                                                        <th>Role</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    {/* {this.show()} */}
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">                                            
                                            <div className="dataTables_info ml-4" id="dataTable_info" role="status" aria-live="polite"><i class="fas fa-pencil-ruler mr-2"></i><span>THỐNG KÊ ... cuốn truyện</span></div>                                                                         
                                        </div>
                                        <div className="row justify-content-center align-items-center">
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination">
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
        )
    }
}
export default Admin_user;