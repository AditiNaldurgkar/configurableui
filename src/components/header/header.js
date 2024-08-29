import { Link } from "react-router-dom";
import "./header.css"
import logo from "./logo.png"
function Header(){
    return <div className="header">
        <img  className="logo" src={logo}/>
        <h4>Hometown</h4>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

        </div>
    </div>
}
export default Header;