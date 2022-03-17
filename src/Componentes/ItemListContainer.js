import ItemList from "./ItemList"
import { useState, useEffect } from "react"

export let items =[
    {
        id: 1,
        nombre: "Libro 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Libro 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Libro 3",
        precio: 300
    },
]
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{

    const promesa= new Promise ((res, rej) => {
        setTimeout(() => {
            res(items)
        }, 3000)
    })
    console.log(promesa);
    promesa
    .then((res) => {
        setProducts(items)
    })
    .catch((errorApi) => {
        console.log("Error al cargar los datos");
    })
    .finally(()=>{
        setLoading(false)
    })
},[])
    console.log(products);
    return(
        <div className="container">
            <p>{loading ? "Cargando..." : "Aquí tienes los productos"}</p>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer

