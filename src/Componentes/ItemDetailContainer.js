import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import ItemDetail from './ItemDetail'
import { items } from './ItemListContainer'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {codigo} = useParams();
    
useEffect(() => {
    setLoading(true);
    const pedido = new Promise((res, rej) => {
        setTimeout(() => {
            res(items);
        }, 3000)
    })
    pedido
        .then((res) => {
           const result = items.find(product => {
               return (product.codigo === codigo);
           }) 
           setProducts(result);
        })
        .catch((errorApi) => {
           console.log("Error al cargar los productos!");
           
        })
        .finally(() => {
            setLoading(false);
        })
}, [])

return(
        <div>
            <p>{loading ? "Cargando el producto" : "Aquí el producto"}</p>
            <ItemDetail products={products}/> 
        </div>
    )
}
export default ItemDetailContainer
