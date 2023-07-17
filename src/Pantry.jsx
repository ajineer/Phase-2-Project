import PItem from "./PItem"
import {useState} from 'react'

function Pantry({pantry}){

    const [current, setCurrent] = useState(0)
    const [amount, setAmount] = useState(1)

    const carouselStyle={
        padding:"0",
        maxWidth: "100%",
        position: "relative",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        transform: `translate(calc(${amount}*15%))`
    }

    const nextSlide = () => {
        setCurrent(current === pantry.length ? 0 : current+1)
        setAmount(current)
        console.log(amount)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
        setAmount(current)
        console.log(amount)
    }

    return(
        <>
            <div style={carouselStyle}>
                {pantry.map((item, index) => {return(
                    <div key={index}>
                        <PItem key = {item.productId} item={item}/>
                    </div>
                )})}
            </div>
            <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>

        </>
    )
}

export default Pantry