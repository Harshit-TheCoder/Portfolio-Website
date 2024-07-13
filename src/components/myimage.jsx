import React from "react";
import bgimg from "../components/harshit.jpg";
import "../css/myimage.css";
function MyImage(){
    return(
        <div className="splash">
            <img className="myImage" src={bgimg} alt="scenaray"/>
        </div>
    );
}
export default MyImage;