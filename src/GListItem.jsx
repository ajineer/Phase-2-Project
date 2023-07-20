import { useState } from "react"

function GListItem ({item}){

    const[strike, setStrike]= useState(false)

    function toggle(){
        setStrike(!strike)
    }

    return(
        <li className="glItem"><img width={50} height={50} src={item.image}/><span className={strike? "setStrike" : "noStrike"}>{item.description}</span><button onClick={toggle}>{"\u2713"}</button></li>
    )
}

export default GListItem