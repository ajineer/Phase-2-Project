import PItem from "./PItem"
import GroceryList from "./GroceryList"
import AroundItem from "./AroundItem"
import {useState,useEffect} from 'react'

function Pantry({pantry, setPantry}){

    const [current, setCurrent] = useState(1)
    const [next, setNext] = useState(2)
    const [prev, setPrev] = useState(0)
    const [currentItem,setCurrentItem]= useState(pantry[1])
    const [nextItem,setNextItem]= useState(pantry[2])
    const [prevItem,setPrevItem]= useState(pantry[0])
    const [groceryList, setGroceryList] = useState([])

    function handleDelete(anItem){
        // fetch(`http://localhost:3000/data/${item.id}`, {
        //     method:"DELETE"
        // })
        const updatePantry = pantry.filter(item => item.id !== anItem.id)
        setPantry(updatePantry)
        setCurrent(current-1 === 0 ? pantry.length-1 : current -1)
        setPrev(prev === 0 ? pantry.length-1 : prev-1)
        setNext(next === 0 ? pantry.length-1 : next-1)
        setPrevItem(pantry[prev])
        setCurrentItem(pantry[current])
        setNextItem(pantry[next])

    }

    const nextSlide = () => {
        setCurrent(current+1 === pantry.length ? 0 : current+1)
        setPrev(prev+1 === pantry.length? 0 : prev+1)
        setNext(next+1 === pantry.length ? 0 : next+1)
        setPrevItem(pantry[prev])
        setCurrentItem(pantry[current])
        setNextItem(pantry[next])
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
        setPrev(prev === 0 ? pantry.length-1 : prev-1)
        setNext(next === 0 ? pantry.length-1 : next-1)
        setPrevItem(pantry[prev])
        setCurrentItem(pantry[current])
        setNextItem(pantry[next])
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
                <AroundItem item={prevItem} />
                <PItem handleDelete={handleDelete} addItem={addItem} item={currentItem}/>
                <AroundItem item={nextItem}/>
            </div>
            <div className="buttonsContainer">
                <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>
            </div>
            <GroceryList aList={groceryList} removeItem={removeItem} />
        </div>
    )
}

export default Pantry