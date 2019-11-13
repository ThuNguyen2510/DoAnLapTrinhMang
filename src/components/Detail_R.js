import React from 'react';
import {Link} from 'react-router-dom';
import './Detail_R.css';
import { fetchGenres } from '../actions/GenreAction';
import {connect} from 'react-redux'
class Detail_R extends React.Component
{
    componentDidMount()
    {
        this.props.fetchGenres()
    }
    render()
    {
        console.log(this.props.list)
        var list=this.props.list.map((value,index)=>
        {
            return <><p key={index}><Link to="/Search"  className="theloai">{value.genre_name}</Link></p></>  
        })
        return(
            <>
            <div className="category">
                <h4 className="title">Thể loại truyện</h4>
                <div>
                    {list}
                </div>
            </div>
            </>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
      list: state.genre
    }
  }
  
  
  
  const mapDispatchToProps =(dispatch, props)=>
  {
    return {
        fetchGenres : ()=>{  dispatch(fetchGenres())
  
    }
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Detail_R);