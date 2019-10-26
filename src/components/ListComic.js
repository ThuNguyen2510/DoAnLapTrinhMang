import React from 'react';
import Comic from './Comic';
class ListComic extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            list:[
                {
                    "name": "Vanellus chilensis",
                    "author": "Corny",
                    "Src": "http://dummyimage.com/197x171.jpg/dddddd/000000",
                    "descrip": "porta volutpat erat quisque erat eros viverra eget congue eget"
                  }, {
                    "name": "Tachybaptus ruficollis",
                    "author": "Ephrayim",
                    "Src": "http://dummyimage.com/153x130.bmp/5fa2dd/ffffff",
                    "descrip": "nec molestie sed justo pellentesque viverra pede ac diam cras"
                  }, {
                    "name": "Ninox superciliaris",
                    "author": "Sheppard",
                    "Src": "http://dummyimage.com/178x204.bmp/cc0000/ffffff",
                    "descrip": "quis turpis sed ante vivamus tortor duis mattis egestas metus"
                  }, {
                    "name": "Cervus canadensis",
                    "author": "Lynnette",
                    "Src": "http://dummyimage.com/224x231.bmp/ff4444/ffffff",
                    "descrip": "aliquam sit amet diam in magna bibendum imperdiet nullam orci"
                  }, {
                    "name": "Lophoaetus occipitalis",
                    "author": "Thacher",
                    "Src": "http://dummyimage.com/239x122.jpg/dddddd/000000",
                    "descrip": "at velit eu est congue elementum in hac habitasse platea"
                  }, {
                    "name": "Panthera leo persica",
                    "author": "Clarie",
                    "Src": "http://dummyimage.com/203x247.png/cc0000/ffffff",
                    "descrip": "id massa id nisl venenatis lacinia aenean sit amet justo"
                  }, {
                    "name": "Uraeginthus angolensis",
                    "author": "Thaxter",
                    "Src": "http://dummyimage.com/115x238.bmp/ff4444/ffffff",
                    "descrip": "ac nulla sed vel enim sit amet nunc viverra dapibus"
                  }, {
                    "name": "Crocodylus niloticus",
                    "author": "Briggs",
                    "Src": "http://dummyimage.com/192x246.png/dddddd/000000",
                    "descrip": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus"
                  }, {
                    "name": "Halcyon smyrnesis",
                    "author": "Selma",
                    "Src": "http://dummyimage.com/161x111.bmp/cc0000/ffffff",
                    "descrip": "porta volutpat erat quisque erat eros viverra eget congue eget"
                  }, {
                    "name": "Eunectes sp.",
                    "author": "Axel",
                    "Src": "http://dummyimage.com/250x235.bmp/dddddd/000000",
                    "descrip": "in congue etiam justo etiam pretium iaculis justo in hac"
                  }
            ]
        }
    }
    render()
    {
        var list=this.state.list.map((a,index)=>
            <Comic id={index} Src={a.Src} name={a.name} descrip={a.descrip} author={a.author}/>
        )
        return(
    
            <>                         
               {list}
                <hr></hr>
            </>
        )
    }
}
export default ListComic;   