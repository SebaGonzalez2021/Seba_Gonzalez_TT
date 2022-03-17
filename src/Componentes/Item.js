import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
      <article>
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
        <button>
          <Link to="detalle/id">Ver Más</Link>
        </button>
      </article>
  )
}
export default Item

