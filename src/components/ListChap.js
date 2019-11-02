import React from 'react';
import './ListChap.css';

class ListChap extends React.Component
{
    render()
    {
        var ndc=["Trùng sinh", "Phỏng vấn", "Xem mặt", "Liên hoan", "Tỉnh rượu", "Gặp mặt", "Tin đồn", "Ăn cơm", "Vu oan hãm hại", "Bạn gái của tôi"];
        var list= ndc.map((value_,index)=>{
            return <> <li key={index}> Chương {index +1}: {value_}</li>
            <hr/> </>
        })
        var list2=ndc.map((value_,index)=>{
            return <> <li key={index}> Chương {index +11}: {value_}</li>
            <hr/> </>
        })
        return(
            <>
            <div className="row list-chap">
                <div className="col-xs-12">
                    <h4 className="title">Danh sách chương</h4>
                </div>
                <div className="col-sm-6">{list}</div>
                <div className="col-sm-6">{list2}</div>
            </div>
            </>
        );
    }
}
export default ListChap;