import { useState, useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Pantry from './Pantry'
import NavBar from './NavBar'
import PantryForm from './PantryForm'
import GroceryLists from './GroceryLists'
import useStore from './store'

function App() {

  const { pantry, setPantry, groceryList, setGroceryList} = useStore()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentList, setCurrentList] = useState(groceryList[0])
  
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
      setCurrentList(data[0])
    }
    fetchData()
  },[])

  return (
    isLoaded === false ? <span>Loading...</span> :
    <div className='flex w-full h-full mt-[5rem] p-[1rem] bg-Aqua font-appFont'>
      <NavBar />
      <div className='ml-auto mr-auto w-[80%] h-[85vh] border-[.5rem] border-black rounded-xl bg-Gray'>
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/pantry" render={()=> <Pantry/>}/>
          <Route exact path="/form" render={()=> <PantryForm/>}/>
          <Route exact path="/groceryLists" render={()=> <GroceryLists/>}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
