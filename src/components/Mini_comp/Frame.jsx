import React  from 'react';
import "./Frame.css";


function Frame({frametitle, link, frameimage}) {
    return (
        <div className="Frame">
                
        <h3>{frametitle}</h3>
        <a href={link} target="blank"> 
        <img src={frameimage} alt=''/>
        </a>               

    </div>
    )
}

export default Frame

