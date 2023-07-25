import * as events from "events";
import {useEffect} from "react";

const Bouton = (props)=> {
    useEffect(() => {
        let btn = document.querySelector("#button")
        btn.addEventListener("click", function () {
            alert("wow")
        })
    }, [] )
    return(
        <button id="button">{props.text}</button>
    )
}

export default  Bouton