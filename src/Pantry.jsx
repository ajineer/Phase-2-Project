import PItem from "./PItem"
import GroceryList from "./GroceryList"
import {useState,useEffect} from 'react'

function Pantry({pantry}){

    const [current, setCurrent] = useState(0)
    const [currentItem,setCurrentItem]= useState(pantry[1])
    const [nextItem,setNextItem]= useState(pantry[2])
    const [prevItem,setPrevItem]= useState(pantry[0])
    const [groceryList, setGroceryList] = useState([])

    const nextSlide = () => {
        setCurrent(current === pantry.length-1 ? 0 : current+1)
        setPrevItem(current-1 === -1 ? pantry[9] : pantry[current-1])
        setCurrentItem(pantry[current])
        setNextItem(current === pantry.length-1 ? pantry[0] : pantry[current+1])
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
        setPrevItem(current === 0 ? pantry[pantry.length-1] : pantry[current-1])
        setCurrentItem(pantry[current])
        setNextItem(current+1 === 10 ? pantry[0] : pantry[current+1])
    }

    function addItem(item){
        if(groceryList.includes(item) === true){
            return
        }else{
            setGroceryList([...groceryList, item])   
        }
    }

    function removeItem(gItem){
        setGroceryList(groceryList.filter(item => item.productId !== gItem.productId))
    }

    return(
        <div className="carouselContainer">
            <div className="carousel">
                <PItem addItem={addItem} item={prevItem}/>
                <PItem addItem={addItem} item={currentItem}/>
                <PItem addItem={addItem} item={nextItem}/>
            </div>
            <div className="buttonsContainer">
                <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>
            </div>
            <GroceryList aList={groceryList} removeItem={removeItem} />
        </div>
    )
}

export default Pantry