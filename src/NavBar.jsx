import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar(){
    return(
        <div className="navBar">
            <h1>Packer</h1>
            <NavLink to={"/"} exact>
                Home
            </NavLink>
            <NavLink to={"/pantry"} exact>
                Pantry
            </NavLink>
            <NavLink to={"/form"} exact>
                New Item
            </NavLink>
        </div>
    )
}

export default NavBar