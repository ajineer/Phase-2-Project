import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar(){
    return(
        <div className="flex flex-col ml-[.5rem] mr-[mr-[.5rem] p-[1rem] border-[.5rem] border-black rounded-xl bg-Gray text-white h-fit text-2xl">
            <h1><span className="text-6xl">P</span><span className="text-4xl">rackr</span></h1>
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