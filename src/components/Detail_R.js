import React from 'react';
import {Link} from 'react-router-dom';
import './Detail_R.css';
class Detail_R extends React.Component
{
    render()
    {
        var m=["Ngôn tình", "Huyền huyễn", "Đô thị", "Kiếm hiệp", "Cung đấu", "Trọng sinh", "Võng du", "Quân sự","Bách hợp", "Đam mĩ"];
        var list=m.map((value_,index)=>
        {
            return <><li key={index}><Link to="/Search"  className="theloai">{value_}</Link></li></>  
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
export default Detail_R;