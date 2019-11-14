import React from 'react';
import './Filter.css';
import {Link} from 'react-router-dom'
import Header from './Header';
import Nav from './Nav';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Footer from  './Footer';
import Comic from './Comic'
import {connect} from 'react-redux';
import {SearchByName} from '../actions/SearchAction';
import {fetchGenres} from '../actions/GenreAction'
class Filter extends React.Component
{
    constructor(props)
    {
        super(props)

    }
    componentDidMount()
    {
        console.log("COMP "+ localStorage.getItem('searchByName'))
        this.props.fetchGenres()
        this.props.SearchByName(localStorage.getItem('searchByName'))
    }
    componentWillMount()
    {
        this.props.SearchByName(localStorage.getItem('searchByName'))

    }

    render()
    { 
        // console.log(this.props.match.params.string)
        localStorage.setItem('searchByName',this.props.match.params.string)
      var con_m21={
        backgroundColor: "#fff",
        height: "98%",
      
        
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
    var option=this.props.list.map((a,index)=>{
        return <><option id={index}>{a.genre_name}</option></>
        })
    var comics= this.props.result.map(a=>{
        return <Comic  id={a.id} Src={a.Image} name={a.Name} author={a.Author} follow={a.Number_of_Read} like={a.Number_of_Like} />
    })     
        return(
            <>
            <Header/>
            <div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9 mb-4">
                            {/* <LeftBody/> */}
                            <div className="float-left" style={con_m21}>
                <div className="content m2l">
                <div >
                    <form>
                        <table style={table_s}>                          
                            <tr>
                            <td> 
                                <select class="mdb-select md-form colorful-select dropdown-primary">
                                    <option >Thể Loại </option>
                                    {option}
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
                            <Link className="page-link" to="/" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="/" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
               <div className="row ">
                   {comics}
                </div> 
            </div>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <RightBody/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-2">
                        <Footer/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
     result:state.search,
     list: state.genre
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      SearchByName:(keyword) =>dispatch(SearchByName(keyword)),
      fetchGenres:() =>dispatch(fetchGenres())
  
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);
  