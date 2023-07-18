import PItem from "./PItem"
import GroceryList from "./GroceryList"
import AroundItem from "./AroundItem"
import {useState,useEffect} from 'react'

function Pantry({pantry, setPantry}){

    const [current, setCurrent] = useState(1)
    const [next, setNext] = useState(2)
    const [prev, setPrev] = useState(0)
    const [groceryList, setGroceryList] = useState([])
    function handleDelete(anItem){
        // fetch(`http://localhost:3000/data/${item.id}`, {
        //     method:"DELETE"
        // })
        
        const updatePantry = pantry.filter(item => item.id !== anItem.id)
        setPantry(updatePantry)
        if(current===updatePantry.length){
            setCurrent(0)
            setNext(1)
        }
        else if(next===updatePantry.length){
            setNext(0)
        }
        else if(current === 0){
            setPrev(prev-1)
        }
    }

    const nextSlide = () => {
        setCurrent(current+1 === pantry.length ? 0 : current+1)
        setPrev(prev+1 === pantry.length? 0 : prev+1)
        setNext(next+1 === pantry.length ? 0 : next+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
        setPrev(prev === 0 ? pantry.length-1 : prev-1)
        setNext(next === 0 ? pantry.length-1 : next-1)
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
        <div className="groceryUI">
            <div className="carouselContainer">
                <div className="carousel">
                    {pantry[prev] === undefined ? <p>No Item</p> : <AroundItem item={pantry[prev]} />}
                    {pantry[current] === undefined ? <p>No Item</p> : <PItem handleDelete={handleDelete} addItem={addItem} item={pantry[current]}/>}
                    {pantry[next] === undefined ?<p>No Item</p> : <AroundItem item={pantry[next]}/>}
                </div>
                <div className="buttonsContainer">
                    <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>
                </div>
            </div>
            <div className="groceryContainer">
                {groceryList === []? <p>No Groceries</p>:<GroceryList aList={groceryList} removeItem={removeItem} />}
            </div>
        </div>
    )
}

export default Pantry