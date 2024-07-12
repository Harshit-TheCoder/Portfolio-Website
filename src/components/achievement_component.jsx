import React from "react";
import Carousels from "./carousel.jsx";
import Heading from "./Heading.jsx";
import "../css/achievements.css";
const AchievementsComponent=({images,heading,content})=>{
    return(
        
            <li>
                <Heading heading={heading} />
                <div className="list-item-div">
                    <div className="inner-div-1"><center><Carousels images={images} /></center></div>
                    <div className="inner-div-2">
                    <center>
                        <p className="inner-div-2-content" style={{ padding:"10px", margin:"10px", fontFamily:"cursive", fontStyle:"italic"}}>
                            {content}
                        </p>
                    </center>
                    </div>
                </div>
            </li>
        
    );
};
export default AchievementsComponent;