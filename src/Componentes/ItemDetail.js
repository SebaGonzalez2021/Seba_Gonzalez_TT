const ItemDetail = ({products}) => {

    return (

    <div>
        <h2>{products.nombre}</h2>
        <p>${products.precio}</p>
        <div>
            <button>Agregar al Carrito</button>
        </div>
    </div>
    
)
}

export default ItemDetail
