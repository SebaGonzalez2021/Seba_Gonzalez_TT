/* import {useState} from "react"
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const ItemCount = (props) => {

    let stock = (props.stock)

    const [contador, setContador] = useState(props.inicial)

    const btnAumentar = () => {
        console.log("Aumento en consola")
        setContador(contador + 1)
    } 
    const btnRestar = () => {
        console.log("Resto en consola")
        setContador(contador - 1) 
    } 
    const btnOnAdd = () => {
        console.log("Agregar al carrito en consola")
        
    } 
    
    return (
        <>
            <p>Stock: {stock}</p>
            <p>Mi contador actual: {contador}</p>
            <button onClick={btnRestar} disabled={contador < 1}><FaMinusSquare /></button>
            <button onClick={btnOnAdd}>Agregar al Carrito</button>
            <button onClick={btnAumentar} disabled={contador === stock}><FaPlusSquare /></button>
        </>
    )

}

export default ItemCount */