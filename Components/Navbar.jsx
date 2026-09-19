import { Link } from "react-router-dom"; 

export default function Navbar() {
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink to='/contact'>Products</NavLink>
                <NavLink to='/explore'>Login</NavLink>
                <NavLink to='/explore'>Register</NavLink>
            </nav>
        </div>
    );
}