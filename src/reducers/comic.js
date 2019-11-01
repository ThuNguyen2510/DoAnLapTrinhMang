import {SHOW_LIST,SHOW_A_COMIC} from './../actions/ComicActions';
var initialState=[
     {
        "Id": 1,
        "Name": "Sylvicapra grimma",
        "Author": "Isacco O'Geneay",
        "Genre_id": 7,
        "Post_DateTime": "3/31/2019",
        "Chappter_number_of": 12,
        "Image": "http://dummyimage.com/198x107.bmp/5fa2dd/ffffff",
        "Status": 0,
        "Description": "eu massa donec dapibus duis at velit eu est congue elementum t",
        "Number_of_Like": 81,
        "Number_of_Read": 37
      }, {
        "Id": 2,
        "Name": "Lasiorhinus latifrons",
        "Author": "Bernita Koppeck",
        "Genre_id": 6,
        "Post_DateTime": "7/7/2019",
        "Chappter_number_of": 8,
        "Image": "http://dummyimage.com/246x243.jpg/5fa2dd/ffffff",
        "Status": 0,
        "Description": "id luctus nec molestie sed justo pellentest dnia aenean",
        "Number_of_Like": 57,
        "Number_of_Read": 71
      }, {
        "Id": 3,
        "Name": "Francolinus coqui",
        "Author": "Ky Ivakhnov",
        "Genre_id": 8,
        "Post_DateTime": "3/7/2019",
        "Chappter_number_of": 3,
        "Image": "http://dummyimage.com/186x208.jpg/5fa2dd/ffffff",
        "Status": 0,
        "Description": "morbi quis tortor  consequat metus sapien ut nunc  diam  proin",
        "Number_of_Like": 66,
        "Number_of_Read": 92
      }, {
        "Id": 4,
        "Name": "Zalophus californicus",
        "Author": "Jaquelin Egan",
        "Genre_id": 8,
        "Post_DateTime": "8/29/2019",
        "Chappter_number_of": 3,
        "Image": "http://dummyimage.com/177x102.bmp/dddddd/000000",
        "Status": 1,
        "Description": "id nisl venenatis lacinia aene ",
        "Number_of_Like": 87,
        "Number_of_Read": 4
      }, {
        "Id": 5,
        "Name": "Tyto novaehollandiae",
        "Author": "Elysee Measom",
        "Genre_id": 8,
        "Post_DateTime": "9/12/2019",
        "Chappter_number_of": 26,
        "Image": "http://dummyimage.com/172x103.bmp/cc0000/ffffff",
        "Status": 1,
        "Description": "at turpis a pede posuere nonummy integeaugue vestibulum",
        "Number_of_Like": 75,
        "Number_of_Read": 52
      }, {
        "Id": 6,
        "Name": "Vanellus sp.",
        "Author": "Jammie Downey",
        "Genre_id": 8,
        "Post_DateTime": "7/22/2019",
        "Chappter_number_of": 19,
        "Image": "http://dummyimage.com/216x214.jpg/ff4444/ffffff",
        "Status": 0,
        "Description": "habitasse platea dictumst m",
        "Number_of_Like": 10,
        "Number_of_Read": 14
      }, {
        "Id": 7,
        "Name": "Kobus leche robertsi",
        "Author": "Gottfried MacSharry",
        "Genre_id": 8,
        "Post_DateTime": "12/9/2018",
        "Chappter_number_of": 28,
        "Image": "http://dummyimage.com/127x127.jpg/dddddd/000000",
        "Status": 1,
        "Description": "aliquam quis turpis eget elit sodales ",
        "Number_of_Like": 57,
        "Number_of_Read": 80
      }, {
        "Id": 8,
        "Name": "Merops nubicus",
        "Author": "Cary Hentzeler",
        "Genre_id": 10,
        "Post_DateTime": "1/21/2019",
        "Chappter_number_of": 29,
        "Image": "http://dummyimage.com/162x199.png/cc0000/ffffff",
        "Status": 0,
        "Description": "convallis nunc proin at turpis a pede posuere nonu",
        "Number_of_Like": 95,
        "Number_of_Read": 31
      }, {
        "Id": 9,
        "Name": "Ursus maritimus",
        "Author": "Gerik Livard",
        "Genre_id": 8,
        "Post_DateTime": "1/19/2019",
        "Chappter_number_of": 11,
        "Image": "http://dummyimage.com/171x183.jpg/cc0000/ffffff",
        "Status": 0,
        "Description": "ante vivamus tortor duis mattis egestas metus aenean fermentut",
        "Number_of_Like": 60,
        "Number_of_Read": 58
      }, {
        "Id": 10,
        "Name": "Tachybaptus ruficollis",
        "Author": "Merv Jahnel",
        "Genre_id": 2,
        "Post_DateTime": "5/5/2019",
        "Chappter_number_of": 6,
        "Image": "http://dummyimage.com/212x192.bmp/5fa2dd/ffffff",
        "Status": 1,
        "Description": "commodo vulputate justo in blandit i",
        "Number_of_Like": 22,
        "Number_of_Read": 29
      }
]
const comic= (state = initialState,action)=>{
    switch(action.type)
    {
        default: return [...state];
    }
    
} 
 

export default comic;