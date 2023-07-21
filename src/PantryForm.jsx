import { useState } from "react"

function PantryForm({pantry, setPantry}){
    
    const [newForm, setForm] = useState({
        id:"",
        quantity:0,
        priority: true,
        brand:"",
        categories:[],
        description:"",
        images:""
    })

    function handleChange(e){
        setForm({...newForm,
            [e.target.name]:e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        if(newForm.brand !== "" && newForm.description !== "" && newForm.images !== "" && newForm.categories[0] !== "Select Category"){
            fetch(`http://localhost:3000/data`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },body: JSON.stringify({...newForm})
            }).then(res => res.json())
            .then(data => setPantry([...pantry, data]))
            e.target.reset()
        }else{
            alert("Please Enter All Fields!")
        }
    }

    return(
        <div className="formContainer">
            <div className="newItemForm">
                <h2>Submit New Item</h2>
                <form onSubmit={handleSubmit}>
                    <label>Input Quantity</label>
                    <input onChange={handleChange} name="quantity" type="number" min={0}></input>
                    <label>Select Priority</label>
                    <select onChange={e => setForm({...newForm, priority: e.target.value === "Priority"? true:false})} name="priority">
                        <option>Priority</option>
                        <option>Not a Priority</option>
                    </select>
                    <label>Brand</label>
                    <input onChange={handleChange} name="brand" type="text"></input>
                    <label>Categories</label>
                    <select onChange={e => setForm({...newForm, categories:[e.target.value]})}>
                        <option>Select Category</option>
                        <option>Meat and Seafood</option>
                        <option>General Grocery</option>
                        <option>Dairy</option>
                        <option>Produce</option>
                        <option>Bakery</option>
                        <option>Deli</option>
                    </select>
                    <label>Description</label>
                    <input onChange={handleChange} name="description" type="text"></input>
                    <label>Image url</label>
                    <input onChange={handleChange} name="images" type="text"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}
export default PantryForm