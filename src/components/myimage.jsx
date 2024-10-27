import React from "react";
import bgimg from "../components/harshitimage.png";
import "../css/myimage.css";
function MyImage(){
    return(
        <div className="splash">
            <img className="myImage" src={bgimg} alt="scenaray"/>
        </div>
    );
}
export default MyImage;