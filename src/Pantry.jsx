import PItem from "./PItem"
import {useState,useEffect} from 'react'

function Pantry({pantry}){

    const [current, setCurrent] = useState(0)
    const [currentItem,setCurrentItem]= useState(pantry[1])
    const [nextItem,setNextItem]= useState(pantry[2])
    const [prevItem,setPrevItem]= useState(pantry[0])

    const nextSlide = () => {
        setCurrent(current === pantry.length-1 ? 0 : current+1)
        setPrevItem(pantry[current-1])
        setCurrentItem(pantry[current])
        setNextItem(current === pantry.length-1 ? pantry[0] : pantry[current+1])
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
        setPrevItem(current === 0 ? pantry[pantry.length-1] : pantry[current-1])
        setCurrentItem(pantry[current])
        setNextItem(pantry[current+1])
    }

    return(
        <>
            <div className="carousel">
                <PItem item={prevItem}/>
                <PItem item={currentItem}/>
                <PItem item={nextItem}/>
            </div>
            <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>

        </>
    )
}

export default Pantry