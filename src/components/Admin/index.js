import React from 'react';
import {Link,Route} from 'react-router-dom';
import Hello from './Hello';
import Nav from './Nav';
import Content from './Content';
class index extends React.Component{
    
    render(){
        var meno={
            marginTop: "20px",
        }
        return(
            <>
            <div className="containers">
                <div className="row">
                    <div className="col-md-2 col-lg-2" >
                        <Content/>
                    </div>
                    <div className="col-md-10 col-lg-10 content">
                        <Nav/>
                        <Hello/>
                        <p>
                        This Bootstrap sidebar layout by Brenna Veen would be a great fit for a modern web application. As you can see from the screenshot, this sidebar is positioned on the left side of the webpage. The white texts are under a black background. This sidebar contains navigation menus clicking which the user can navigate to the various pages of the website.

Keep in mind that you don’t necessarily have to use a sidebar for only showing navigation menus, you can also display other things such as your contact information or your company information in the sidebar section. This sidebar has a vertical scroll bar on the right side, which allows the user to scroll down. On a smaller screen or a small browser window, the user can see the remaining menus in the sidebar using the scroll bar.
This Bootstrap sidebar layout by Brenna Veen would be a great fit for a modern web application. As you can see from the screenshot, this sidebar is positioned on the left side of the webpage. The white texts are under a black background. This sidebar contains navigation menus clicking which the user can navigate to the various pages of the website.

Keep in mind that you don’t necessarily have to use a sidebar for only showing navigation menus, you can also display other things such as your contact information or your company information in the sidebar section. This sidebar has a vertical scroll bar on the right side, which allows the user to scroll down. On a smaller screen or a small browser window, the user can see the remaining menus in the sidebar using the scroll bar.
This Bootstrap sidebar layout by Brenna Veen would be a great fit for a modern web application. As you can see from the screenshot, this sidebar is positioned on the left side of the webpage. The white texts are under a black background. This sidebar contains navigation menus clicking which the user can navigate to the various pages of the website.

Keep in mind that you don’t necessarily have to use a sidebar for only showing navigation menus, you can also display other things such as your contact information or your company information in the sidebar section. This sidebar has a vertical scroll bar on the right side, which allows the user to scroll down. On a smaller screen or a small browser window, the user can see the remaining menus in the sidebar using the scroll bar.
                        </p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default index;