import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"



const NavBar = () => {
    return(
      <nav>
        <Link to = "cat/1">De 0 a 2 años</Link>
        <Link to = "cat/2">De 3 a 6 años</Link>
        <Link to = "cat/3">De 7 a 10 años</Link>
        <div>
          <Link to = "Carrito"><CartWidget/></Link> 
        </div>
      </nav>
    )
}
export default NavBar

