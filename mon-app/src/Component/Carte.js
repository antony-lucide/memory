import React from "react";

function Carte(props){
    return(
        <div className="carte" key={props.id}>
            <div>
                <img className="front" src={props.src} alt="Front-card"/>
            </div>
        </div>
    )
 }

 export default  Carte