import React from 'react';
import './Book.css';
import { Link, Route } from 'react-router-dom';
class Book extends React.Component{
    render(){
        var list =[
            {
                name: "Trừng phạt",
                image: "https://sstruyen.com/assets/img/story//TF-trung-phat-punishment.jpg",
                decrip: "Đối với trẻ em, người lớn rất quan trọng.",
                chương: "20",
                author: "Võ Anh Thơ"
            },
            {
                name: "Cố chấp ngọt",
                image: "https://sstruyen.com/assets/img/story//co-chap-ngot.jpg",
                decrip: "",
                chương: "32",
                author: "Triệu thập dư"
            },
            {
                name: "Xuyên về Ai Cập làm nữ thần",
                image: "https://sstruyen.com/assets/img/story//xuyen-ve-ai-cap-lam-nu-than.jpg",
                decrip: "Một cô gái học khảo cổ và là tiến sĩ y khoa bất ngờ xuyên không về Ai Cập cổ đại gần 2000 năm trước. Tại đây cô gặp gỡ vị Pharaoh đáng sợ và uy quyền nhất lịch sử. Nhưng cũng từ đó, định mệnh của hai người bắt đầu. Sợi dây liên kết của họ dần dần hiện ra. Sau tất cả mọi thứ, liệu tình yêu có giúp họ vượt qua chướng ngại hay không?",
                chương: "58",
                author: "Độc cô cầu bại"
            },
            {
                name: "Nữ quan vận sự",
                image: "https://sstruyen.com/assets/img/story//nu-quan-van-su.jpg",
                decrip: "Hành trình của vị nữ quan có lý tưởng, khát vọng lớn lao nhưng cuối cùng lại bị một đám lưu manh giả danh cán bộ chốn quan trường chà đạp.",
                chương: "232",
                author: "Tiểu Nhục Tống"
            }
        ]
        var comic = list.map((book, index)=>{
            return(
                <>
                     <div className="container" id="vi">
                        <div className="row mt-5 ml-5">
                            <div className="col-xs-6 col-md-3 ">
                                <img id="cm_image" src={book.image} alt={book.name}/>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 mt-2 cminfo">
                                <Link><h4>{book.name}</h4></Link>
                                <h6>Tác giả: <Link>{book.author}</Link></h6>
                                <h6>Số chương: {book.chương}</h6>
                                <hr style={{ color:' #ffcc66', border:'1px solid  #ffcc66',textAlign:'left' }}/>
                                <p style={{color:'#0d0d0d'}}>{book.decrip}</p>
                                <Link to="/" className="mt-5 read" style={{color: 'black'}}><h6>ĐỌC TIẾP<i className="fas fa-arrow-circle-right ml-2"></i> </h6> </Link>
                            </div>
                        </div>
                    </div> 


                    {/* <article className="blog__post d-flex flex-wrap">
                        <div className="thumb">
                        <Link to="/">
                            <img src={book.image} alt={book.name} />
                        </Link>
                        </div>
                        <div className="content">
                        <h4><Link to="/">{book.name}</Link></h4>
                        <ul className="post__meta">
                            <li>Posts by : <Link to="/">{book.author}</Link></li>
                            <li className="post_separator">/</li>
                            <li>Chap: {book.chương}</li>
                        </ul>
                        <p>{book.decrip}</p>
                        <div className="blog__btn">
                            <Link to="/">read more</Link>
                        </div>
                        </div>
                    </article> */}


                </>
            )
        })
        return(
            <>
            <div className="container">
                <div className="row">
                    {comic}
                </div>
            </div>
            </>
        )
    }
}
export default Book;