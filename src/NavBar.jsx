import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar(){
    return(
        <div className="navBar">
            <h1><span className="firstLetter">P</span><span className="nextLetters">rackr</span></h1>
            <NavLink to={"/"} exact>
                <span>Home</span>
            </NavLink>
            <NavLink to={"/pantry"} exact>
                <span>Pantry</span>
            </NavLink>
            <NavLink to={"/groceryLists"}>
                <span>Grocery Lists</span>
            </NavLink>
            <NavLink to={"/form"} exact>
                <span>New Item</span>
            </NavLink>
        </div>
    )
}

export default NavBar