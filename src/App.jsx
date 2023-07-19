import { useState, useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Pantry from './Pantry'
import NavBar from './NavBar'
import PantryForm from './PantryForm'
import GroceryLists from './GroceryLists'

function App() {

  const [pantry, setPantry] = useState([])
  const [groceryList, setGroceryList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:3000/data`)
      const data = await response.json()
      setPantry(data)
      setIsLoaded(true)
    }
    fetchData()
  },[])

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:3000/Lists`)
      const data = await response.json()
      setGroceryList(data)
    }
    fetchData()
  },[])

  return (
    isLoaded === false ? <span>Loading...</span> :
    <div className='mainContainer'>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/pantry" render={()=> <Pantry pantry={pantry} setPantry={setPantry} groceryList={groceryList} setGroceryList={setGroceryList}/>}/>
        <Route exact path="/form" render={()=> <PantryForm pantry={pantry} setPantry={setPantry}/>}/>
        <Route exact path="/groceryLists" render={()=> <GroceryLists groceryList={groceryList} setGroceryList={setGroceryList}/>}/>
      </Switch>
    </div>
  )
}

export default App
