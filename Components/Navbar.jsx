import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
    const {state,dispatch} = useContext(ThemeContext);
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink to='/contact'>Products</NavLink>
                <NavLink to='/explore'>Login</NavLink>
                <NavLink to='/explore'>Register</NavLink>
                <button onClick={() => dispatch({type:"toggle"})}>
                    {state ==="light"? "dark" : "light"}
                     </button>
            </nav>
        </div>
    );
}