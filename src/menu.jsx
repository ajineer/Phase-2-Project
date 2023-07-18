import Home from "./Home"
import Pantry from "./Pantry"
import {Switch, Route} from 'react-router-dom'


function Menu({pantry}){
    return(
        <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/pantry" render={()=> <Pantry pantry={pantry}/>}/>
        </Switch>
    )
}

export default Menu