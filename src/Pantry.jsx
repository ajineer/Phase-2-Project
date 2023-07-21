import PItem from "./PItem"
import GroceryList from "./GroceryList"
import AroundItem from "./AroundItem"
import {useState} from 'react'

function Pantry({pantry, setPantry, groceryList, setGroceryList}){

    const [current, setCurrent] = useState(1)
    const [next, setNext] = useState(2)
    const [prev, setPrev] = useState(0)
    const [currentGlist, setCurrentGlist] = useState([])
    const [quantity, setQuantity] = useState(pantry[1]===undefined? 0 : pantry[1].quantity)
    
    function handleDelete(anItem){
        fetch(`http://localhost:3000/data/${anItem.id}`, {
            method:"DELETE"
        })
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

    function patchQuantity(e){
        e.preventDefault()
        const patchObj ={
            "quantity": quantity
        }
        fetch(`http://localhost:3000/data/${pantry[current].id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },body: JSON.stringify({quantity: quantity})
        })
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
        if(currentGlist.includes(item) === true){
            return
        }else{
            setCurrentGlist([...currentGlist, item])   
        }
    }

    function removeItem(gItem){
        setCurrentGlist(currentGlist.filter(item => item.productId !== gItem.productId))
    }

    function saveList(currentGlist){
        if(currentGlist.length !== 0){
            const data = {id:"", list:[...currentGlist]}
            fetch(`http://localhost:3000/Lists`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => setGroceryList([...groceryList, data]))
            setCurrentGlist([])
        }
    }

    return(
        <div className="groceryUI">
            <div className="carouselContainer">
                <div className="carousel">
                    {pantry[prev] === undefined ? <p>No Item</p> : <AroundItem item={pantry[prev]} />}
                    {pantry[current] === undefined ? <p>No Item</p> : <PItem quantity={quantity} setQuantity={setQuantity} patchQuantity={patchQuantity} handleDelete={handleDelete} addItem={addItem} item={pantry[current]}/>}
                    {pantry[next] === undefined ?<p>No Item</p> : <AroundItem item={pantry[next]}/>}
                </div>
                <div className="buttonsContainer">
                    <button onClick={prevSlide}>{"\u276c"}</button><button onClick={nextSlide}>{"\u276d"}</button>
                </div>
            </div>
            {currentGlist.length === 0? <></>:
                <div className="groceryContainer">
                    <div className="save">
                        <button onClick={() => saveList(currentGlist)}>Save List</button> 
                    </div>
                    <div className="listItems">
                        <GroceryList aList={currentGlist} removeItem={removeItem} />
                    </div>
                </div>}
        </div>
    )
}

export default Pantry