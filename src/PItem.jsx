import {useEffect, useState} from 'react'
import useStore from './store'

function PItem({item, addItem, handleDelete, pantry, setPantry}){

    const [quantity,setQuantity] = useState(item.quantity)
    const {currentGlist, setCurrentGlist } = useStore()

    useEffect(()=>{
        setQuantity(item.quantity)
    },[item])

    function patchQuantity(e){
        e.preventDefault()
        const patchObj ={
            "quantity": e.target.quantity.value
        }
        fetch(`http://localhost:3000/data/${item.id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },body: JSON.stringify(patchObj)   
        }).then(r => r.json())
        .then(data => setPantry([...pantry, pantry[item.id-1].quantity = data.quantity]))
    }

    function handleClick(item){
        if(currentGlist.includes(item) === true){
            return
        }else{
            setCurrentGlist([...currentGlist, item])   
        }
    }

    return(
        <div className="pantryItems flex flex-col bg-white border-[.5rem] border-Tan h-[20rem] w-[33%] h-full">
            {item===undefined ? <>Loading...</> : <>
                <img width={100} height={100} src={item.image} alt="loading"/>
                <label>In Pantry: </label>
                <form className="pForm" onSubmit={e => patchQuantity(e, setQuantity)}>
                    <input name="quantity" onChange={e => setQuantity(e.target.value)} type="number" value={quantity}></input>
                    <input type='submit' value="Update Quantity"></input>
                </form>
                <p>Priority: {item.priority === true? "Need":"Don't need"}</p>
                <button onClick={() => handleClick(item)}>Add Item</button>
                <button onClick={() => handleDelete(item)}>Delete Item From Pantry</button>
            </>}
        </div>
    )
}

export default PItem