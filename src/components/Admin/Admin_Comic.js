import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import './Admin_Comic.css';
class Admin_Comic extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            list:[
                {
                    name:"Airi Satou",
                    author:"Chief Executive Officer (CEO)",
                    genre:"Manga"
                },
                {
                    name:"One piece",
                    author:"Oda Eiichiro",
                    genre:"Shoune"
                },
                {
                    name:"Naruto",
                    author:"Kishimoto Masashi",
                    genre:"Manga"
                },
                {
                    name:"One piece",
                    author:"Oda Eiichiro",
                    genre:"Shoune"
                },
                {
                    name:"Naruto",
                    author:"Kishimoto Masashi",
                    genre:"Manga"
                },
                {
                    name:"One piece",
                    author:"Oda Eiichiro",
                    genre:"Shoune"
                },
                {
                    name:"Naruto",
                    author:"Kishimoto Masashi",
                    genre:"Manga"
                }               

            ]
        }
    }
    render() 
    {
        const list=this.state.list.map((a,index)=>
            <tr>
            <td> <Link to="/Update_Comic">{a.name}</Link></td>
            <td>{a.author}</td>
            <td>{a.genre}</td>     
            <td>
             <ul>
             <li id="but" key={index}><Link to="/Update_Comic"><i class="far fa-edit"></i></Link></li>
             <li id="but" key={index}><Link to="/Delete_Comic"><i id="del" class="far fa-minus-square"></i></Link></li>
             </ul>
            </td>           
            </tr>
        );
        var a={
            float:"left"
        }
        return(
            <>
             <body id="page-top">
               <Nav/>
               <div id="wrapper" >                   
                   <Content /> 
                   <div id="content-wrapper" >
                   <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to="/Admin">TVT</Link>
                    </li>
                    <li className="breadcrumb-item active">Quản lý truyện</li>
                    
                </ol>
                
                <div className="card mb-3">
                    <div className="card-header">
                        <i class="fas fa-table">                          
                        </i>
                        Danh sách truyện
                    </div>
                    <div id="k"> <Link to="/Add_Comic"><i class="fas fa-plus"></i>Thêm truyện </Link></div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className="dataTables_wrapper dt-bootstrap4" id="dataTable_wrapper">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                       <div className="input-group" >
                                        <input type="search" className="form-control" placeholder="Tìm tên truyện, tác giả..." aria-label="Tìm tên truyện, tác giả" name="q" autoComplete="off" onkeyup="if (!window.__cfRLUnblockHandlers) return false; initSearch(this)" data-cf-modified-ed9b747aa85a3145e1dd84eb- />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="submit" >
                                            <i className="fas fa-search"></i>
                                            </button>                    
                                        </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-bordered dataTable" id="dataTable">
                                                <tr role="row">
                                                    <th>Tên truyện</th>
                                                    <th>Tác giả</th>
                                                    <th>Thể loại</th>
                                                    <th>Action</th>
                                                </tr>
                                                    {list}                                                 
                                            </table>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                        <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">THỐNG KÊ:{list.length} cuốn truyện</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="dataTable_previous"><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link></li>
                                                <li className="paginate_button page-item active"><Link to="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link></li>
                                                <li className="paginate_button page-item "><Link to="#"aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">2</Link></li>
                                                <li className="paginate_button page-item "><Link to="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">3</Link></li>
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
                       </div>            
                             
               
               </div>              
               
            </body>
            </>
                     
           
        );
    }
}
export default Admin_Comic;