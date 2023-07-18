import { useState, useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Pantry from './Pantry'
import NavBar from './NavBar'
import PantryForm from './PantryForm'

function App() {

  const [pantry, setPantry] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:3000/data`)
      const data = await response.json()
      setPantry(data)
    }
    fetchData()
  },[])

  

  return (
    <div className='mainContainer'>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/pantry" render={()=> <Pantry pantry={pantry} setPantry={setPantry}/>}/>
        <Route exaxt path="/form" render={()=> <PantryForm pantry={pantry} setPantry={setPantry}/>}/>
      </Switch>
    </div>
  )
}

export default App
