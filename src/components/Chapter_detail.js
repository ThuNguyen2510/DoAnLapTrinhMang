import React from 'react';
import Nav_chap from './Nav_chap';
import Header from './Header';
import Footer from './Footer';
import Chap_content from './Chap_content';
import {Link} from 'react-router-dom';
import './Chapter_detail.css';
class Chapter_detail extends React.Component{
    render(){
        var list = ["Trùng sinh","Phỏng vấn","Xem mặt","Liên hoan","Gặp mặt","Ăn cơm","Công việc","Quá khứ","Liên hoan hằng năm",
        "Cậu không sai","Hiện trường"];
        var chap = list.map((value,index)=>{
            return <option id="opt" key={index}> Chương {index+1}: {value}</option>
        })
        return(
            <div>
                <Header/>
                <Nav_chap/>
                <hr/>
                
             <div className="nav-content"> 
                    <i className="fas fa-home"></i><Link to="/">Trang chủ</Link><i className="fas fa-angle-right"></i>
                    <Link to="/Comic/:index">Tái sinh để theo đuổi anh</Link><i className="fas fa-angle-right"></i>
                    <Link to="/cm/">Chap 1</Link>
                    <hr/>
                </div>
                <div className="list-chap">
                    <Link to="/cm/Chapter">Trùng sinh</Link><br/>
                    <select className="chapter" >
                        {chap}
                    </select>
                </div>
                <Chap_content/>
                <select className="chapter" >
                    {chap}
                </select>
                {/* <Chap_content chapptername={} content={} /> */}
                <hr/>
                <Footer/>
            </div>
        );

    }
}

export default Chapter_detail;