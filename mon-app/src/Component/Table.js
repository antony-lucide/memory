
import react, {useEffect, useState} from "react"
import Carte from "./Carte"
import React from "react";


const liste = [{"src" : "/image/logo192.png"},
                                    {"src" : "/image/logo512.png"}
]    

const Table = () => {
    const [table, setTable] = useState ([])

    useEffect(() => {
        const x = [...liste, ...liste]
            .sort(() => Math.random() - 0o5)
            .map((Carte) => ({...Carte, id: Math.random()}))
        setTable(x);
        console.log(x)
    },[]);


    return (
        <div>
            <h1>Jeux de Carte</h1>
        </div>
    )
}

export default  Table