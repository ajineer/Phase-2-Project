import { useState } from "react"
import useStore from "./store"

function PantryForm(){
    
    const { pantry, setPantry } = useStore()
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
        
        <form className='flex flex-col bg-Tan bg-opacity-80 h-fit w-[33%] m-auto p-[1rem]' onSubmit={handleSubmit}>
            <h2 className="text-white font-bold ml-auto mr-auto">Submit New Item</h2>
            <label className="text-white">Quantity: </label>
            <input onChange={handleChange} name="quantity" type="number" min={0}></input>
            <label className="text-white">Select Priority:</label>
            <select onChange={e => setForm({...newForm, priority: e.target.value === "Priority"? true:false})} name="priority">
                <option>Priority</option>
                <option>Not a Priority</option>
            </select>
            <label className="text-white">Brand</label>
            <input onChange={handleChange} name="brand" type="text"></input>
            <label className="text-white">Categories</label>
            <select onChange={e => setForm({...newForm, categories:[e.target.value]})}>
                <option>Select Category</option>
                <option>Meat and Seafood</option>
                <option>General Grocery</option>
                <option>Dairy</option>
                <option>Produce</option>
                <option>Bakery</option>
                <option>Deli</option>
            </select>
            <label className="text-white">Description</label>
            <input onChange={handleChange} name="description" type="text"></input>
            <label className="text-white">Image url</label>
            <input onChange={handleChange} name="images" type="text"></input>
            <input className='w-fit ml-auto mr-auto bg-Sky hover:bg-green-300 pl-[1rem] pr-[1rem] mt-[1rem]' type="submit"></input>
        </form>
    )
}
export default PantryForm