function PantryForm({pantry, pantryForm}){
    
    const [newForm, setForm] = useState({
        id:"",
        quantity:"",
        priority:"",
        brand:"",
        categories:"",
        images:[{sizes:[{url:""}]}]
    })
    
    
    return(
        <form>
            <input input="number"></input>
            <select>
                <option></option>
                <option></option>
            </select>
            <input></input>
            <input></input>
            <input type="submit"></input>
        </form>
    )
}
export default PantryForm