import PItem from "./PItem"
import GroceryList from "./GroceryList"
import AroundItem from "./AroundItem"
import {Fragment, useEffect, useState} from 'react'
import useStore from "./store"


function Pantry(){

    const { current, setCurrent, pantry, setPantry, groceryList, setGroceryList, currentGlist, setCurrentGlist } = useStore()
    const [quantity,setQuantity] = useState(pantry[current].quantity)
    

    useEffect(()=>{
        setQuantity(pantry[current].quantity)
    },[pantry[current]])

    function patchQuantity(e){
        e.preventDefault()
        const patchObj ={
            "quantity": e.target.quantity.value
        }
        fetch(`http://localhost:3000/data/${pantry[current].id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },body: JSON.stringify(patchObj)   
        }).then(r => r.json())
        .then(data => setPantry([...pantry, pantry[pantry[current].id-1].quantity = data.quantity]))
    }


    function handleDelete(anItem){
        fetch(`http://localhost:3000/data/${anItem.id}`, {
            method:"DELETE"
        })
        const updatePantry = pantry.filter(item => item.id !== anItem.id)
        setPantry(updatePantry)
    }

    const nextSlide = () => {
        setCurrent(current+1 === pantry.length ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pantry.length-1 : current-1)
    }
    

    function addItem(item){
        if(currentGlist.includes(item)){
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
        <div className="flex flex-col h-full w-full">
            {pantry[current] && 
            <form className="flex flex-col bg-Tan bg-opacity-80 h-fit pb-[1rem] w-[30%] items-center self-center" onSubmit={e => patchQuantity(e, setQuantity)}>
                <button className='bg-Red w-fit ml-auto pl-1 pr-1 border-[.1rem] border-black rounded text-white' onClick={() => handleDelete(pantry[current])}>X</button>
                <img className='ml-auto mr-auto mb-1' width={100} height={100} src={pantry[current].image} alt="loading"/>
                <label>
                    <span className="text-white">Quantity:</span>
                    <input className='w-[2rem] text-right ml-[1rem]' name="quantity" onChange={e => setQuantity(e.target.value)} type="number" value={quantity}></input>
                </label>
                <input className='text-white border-[.1rem] border-black w-fit ml-auto mr-auto pl-1 pr-1 rounded bg-Gray hover:bg-Aqua' type='submit' value="Update Quantity"></input>
                <p className="text-white">Priority: {pantry[current].priority === true? "Need":"Don't need"}</p>
                <button className='bg-Gray text-white w-fit ml-auto mr-auto pl-1 pr-1 border-[.1rem] border-black rounded hover:bg-Aqua' onClick={() => addItem(pantry[current])}>Add Item</button>
            </form>}
            <div className='flex flex-row self-center'>
                <button className='h-min mt-auto mb-auto mr-[.5rem] bg-white p-[.5rem] border-[.2rem] border-black rounded hover:bg-Tan' onClick={prevSlide}>{"\u276c"}</button>
                <button className='h-min mt-auto mb-auto ml-[.5rem] bg-white p-[.5rem] border-[.2rem] border-black rounded hover:bg-Tan' onClick={nextSlide}>{"\u276d"}</button>
            </div>
            {currentGlist.length > 0 &&
                <div className="flex flex-col h-[50%]">
                    <button className='bg-white w-fit ml-auto mr-auto mt-[.5rem] pl-1 pr-1' onClick={() => saveList(currentGlist)}>Save List</button> 
                    <div className={`grid grid-rows-${currentGlist.length % 5 + 1} grid-cols-3 bg-Gray mt-[1rem] mb-[3rem] overflow-y-scroll mr-auto ml-auto`}>
                        {currentGlist.map(item => 
                            <div key={item.id} className="gItem bg-Tan p-[1rem] flex flex-col m-[.5rem] border-[.5rem] border-Beig w-fit">
                                <img width={50} height={50} src={item.image}/>
                                <button onClick={() => removeItem(item)}>Remove</button>
                            </div>
                        )}
                    </div>
                </div>}
        </div>
    )
}

export default Pantry