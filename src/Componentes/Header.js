import { Link } from "react-router-dom";
import NavBar from './NavBar'

const Header = () => {
    return (
    <header id="main-header">
        <Link to="/">
            <h1>Tienda de Libros</h1>
        </Link>
        <NavBar/>
    </header>
    )}
export default Header