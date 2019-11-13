import React from 'react';
import Comic from './Comic';
class LeftBody extends React.Component{
    
    render(){
        var con_m21={
            width: "750px",
            backgroundColor: "#fff",
            height: "98%",
            marginLeft: "120px",
            
        }
        var but_style={
            cursor: "pointer",
            background: "#FFFFFF",
            border: "1px solid #E1E1E11",
            padding: "3px 10px",
            fontWeight: "bold"
        }
        var table_s={
            textAlign:"center",
            width:"70%",

        }
        var h={
            color:"#ef2d3f"
        }
        var li={
            listStyle:"none"
        }
        
        return(
            <div className="float-left" style={con_m21}>
                <div className="content m2l">
                
                <div >
                    <form>
                        <table style={table_s}>                          
                            <tr>
                            <td> 
                            <select class="mdb-select md-form colorful-select dropdown-primary">
                                    <option >Thể Loại </option>
                                    <option value="1">Ngôn tình</option>
                                    <option value="2">Kiếm hiệp</option>
                                    <option value="3">Xuyên không</option>
                                    <option value="4">Dị giới</option>
                            </select>
                            </td>
                            <td>
                            <select class="mdb-select md-form colorful-select dropdown-primary">
                                    <option >Sắp xếp theo </option>
                                    <option value="1">A-Z</option>
                                    <option value="2">Mới update</option>
                                    <option value="3">Like nhiều</option>
                            </select>
                            </td>
                            <td>                            
                            <input type="checkbox" />Truyện Full
                            </td>
                            <td>
                            <button type="submit" className="btn btn-search"><i class="fa fa-search fa-fw"></i>Tìm truyện</button>
                            
                               </td>
                            </tr>                     
                                                      
                        </table>
                    </form>
                </div>
                </div>
                <hr></hr>
                <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
<<<<<<< Updated upstream
               <ul className="books-list list-unstyled large-items">
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   <li class="with-border" style={li}><Comic/></li>
                   </ul> 
=======
               <div className="row">
                   <ListComic/>
                   </div> 
>>>>>>> Stashed changes
            </div>
        );

        
    }
}
export default LeftBody;