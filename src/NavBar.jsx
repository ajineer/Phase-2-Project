import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar(){
    return(
        <div>
            <NavLink to={"/"} exact>
                Home
            </NavLink>
            <NavLink to={"/pantry"} exact>
                Pantry
            </NavLink>
        </div>
    )
}

export default NavBar