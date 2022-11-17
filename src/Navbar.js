import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (      
    <nav className="Navbar">
        <h1>Notflix</h1>
        <div className="rightNav">
            <Link to="/">Inicio</Link>
            <Link to="/series">Series</Link>
            <Link to="/peliculas">Películas</Link>
        </div>
    </nav> 
    );
}
 
export default Navbar;