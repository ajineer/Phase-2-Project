import {useEffect, useState} from 'react'

function PItem({item, addItem}){

    const [quantity, setQuantity] = useState(item===undefined? 0 : item.quantity)

    useEffect(()=>{
        setQuantity(item===undefined? 0: item.quantity)
    },[item])

    function handleClick(){
        addItem(item)
    }

    function handleChange(e){
        setQuantity(e.target.value)
    }

    function patchQuantity(e){
        e.preventDefault()
        const patchObj ={
            "quantity": quantity
        }
        fetch(`http://localhost:3000/data/${item.id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },body: JSON.stringify({quantity: quantity})
        })
    }

    return(
        <div className="pantryItems">
            {item===undefined ? <>Loading...</> : <>
                <img width={100} height={100} src={item.images[0].sizes[1]?.url} alt="loading"/>
                <label>In Pantry: </label>
                <form onSubmit={e => patchQuantity(e)}>
                    <input onChange={handleChange} type="number" value={quantity}></input>
                    <input type='submit' value="Update Quantity"></input>
                </form>
                <p>Priority: {item.priority === true? "Need":"Don't need"}</p>
                <button onClick={handleClick}>Add Item</button>
            </>}
        </div>
    )
}

export default PItem