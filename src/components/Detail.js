import React from 'react';
import {Link} from 'react-router-dom';
import './Detail.css';
class Detail extends React.Component
{
    render()
    {
        return(
            <>
            <div className="title">
                <h3 className="title">
                    <Link to="/Comic/:index" className="comicname">Tái sinh để theo đuổi anh</Link>
                </h3>
            </div>
            <div className="contend">
                <div className="info">
                    <p>Tác giả: <Link to="/Author">Tần Mộc Xuyên</Link></p>
                    <p>Thể loại: Ngôn tình, Trọng sinh </p>
                    <p>Trạng thái: <span className="status">Full</span> </p>
                    <p></p>
                </div>
                <div className="description">
                    <p>
                    Một cô gái trẻ bị thất tình, xui xẻo gặp tai nạn máy bay quay về hai năm trước,
                     lợi dụng Boss để đá đàn ông, lại bị Boss ăn xong lau sạch.Sau khi Đỗ Cận trọng 
                     sinh chỉ có ba nguyện vọng: Kiếm được nhiều tiền, tiếp cận người giàu, câu được 
                     soái ca!Người nào đó đánh mắt nhìn sang: Nói cái gì? Lặp lại lần nữa.Đỗ Cận cắn 
                     răng: Kiếm được nhiều tiền, chăm sóc ông xã…Người nào đó thỏa mãn gật đầu.Cuộc 
                     sống sau khi kết hôn của Đỗ Cận là như vầy.“Ông xã, bộ quần áo hôm nay của anh 
                     thực vừa vặn, thực đẹp trai!”Người nào đó vẻ mặt chăm chú nhìn Đỗ Cận: “Muốn 
                     mua gì, nói thẳng.”Đỗ Cận u oán nhìn thoáng qua người nào đó: “Em không có… 
                     Được rồi, kỳ thật… ở cửa hàng kia mới vừa mới ra một bộ đồ nhìn cũng không tệ.”
                     Người nào đó gật gật đầu: “Không tệ.”Vẻ mặt Đỗ Cận nịnh nọt: “Cho nên…”Người 
                     nào đó bỗng nhiên bật cười: “Cho nên, em nên giảm béo rồi.”Đỗ Cận: “…”
                    </p>
                    <p></p>
                </div>
            </div>
            </>
        );
    }

}
export default Detail;