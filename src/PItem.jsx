import {useEffect, useState} from 'react'

function PItem({item, addItem, handleDelete, patchQuantity, setQuantity, quantity}){

    function handleClick(){
        addItem(item)
    }

    return(
        <div className="pantryItems">
            {item===undefined ? <>Loading...</> : <>
                <img width={100} height={100} src={item.image} alt="loading"/>
                <label>In Pantry: </label>
                <form className="pForm" onSubmit={e => patchQuantity(e, item)}>
                    <input name="quantity" onChange={e => setQuantity(e.target.value)} type="number" value={quantity}></input>
                    <input type='submit' value="Update Quantity"></input>
                </form>
                <p>Priority: {item.priority === true? "Need":"Don't need"}</p>
                <button onClick={handleClick}>Add Item</button>
                <button onClick={() => handleDelete(item)}>Delete Item From Pantry</button>
            </>}
        </div>
    )
}

export default PItem