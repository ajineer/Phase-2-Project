function GItem({item, removeItem}){

    function handleRemove(){
        removeItem(item)
    }

    return (
        <div className="gItem">
            <img width={100} height={100} src={item.images[0].sizes[1]?.url}/>
            <p className="gDescription">{item.description}</p>
            <p>Priority: {item.priority === true?  "Need": "Not a priority"}</p>
            <label>Quantity: </label>
            <input type="number" placeholder="1" min={1}></input>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default GItem