import React from "react";
import bgimg from "../components/myimage.jpg";
function MyImage(){
    return(
        <img src={bgimg} alt="scenaray" style={{ width:"400px", height:"500px", borderRadius:"40%", border:"3px solid #2c3e50", boxShadow:"5px 10px 8px 10px #888888", position:"sticky" }}/>
    );
}
export default MyImage;