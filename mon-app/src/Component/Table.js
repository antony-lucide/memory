
import react, {useEffect, useState} from "react"
import Carte from "./Carte"
import React from "react";


const liste = [{"src" : "./image/logo192.png"},
                                    {"src" : "./image/logo512.png"}
]    

const Table = () => {
    const [Card, setTable] = useState ([])


    function  Mélange() {
        const x = [...liste, ...liste]
            .sort(() => Math.random() - 0o5)
            .map((Carte) => ({...Carte, id: Math.random()}))
            setTable(x);
            console.log(x)
    }


    return (
        <div className="Jeu">
            <h1>Jeux de Carte</h1>
            {Card.map(Carte => (
                <div className="carte" key={Carte.id}>
                    <div>
                        <img className="front" src={Carte.src} alt="Front-card"/>
                    </div>
                </div>
            ))}
            <button onClick={Mélange}>Test</button>
        </div>
    )
}

export default  Table