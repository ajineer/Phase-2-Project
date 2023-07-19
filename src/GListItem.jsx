import { useState } from "react"

function GListItem ({item}){

    const[strike, setStrike]= useState(false)

    function toggle(){
        setStrike(!strike)
    }

    return(
        <li className="glItem"><span className={strike? "setStrike" : ""}>{item.description}</span><button onClick={toggle}>{"\u2713"}</button></li>
    )
}

export default GListItem