import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './Nav.css';


const Nav = ({onSearch}) => {
    return (
        <div className="navContainer"> 
            <SearchBar onSearch={onSearch}/>

            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}


export default Nav;