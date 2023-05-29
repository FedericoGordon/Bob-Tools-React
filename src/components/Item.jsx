import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    return (
        <div className="col-md-3 my-2">
            <div className="card">
                <Link to={"/item/" + prod.id} className="text-dark text-decoration-none">
                    <img src={prod.imagen} className="card-img-top" height="250" alt={prod.marca} />
                    <div className="card-body text-center bg-success-subtle">
                        <h4>{prod.marca}</h4>
                        <p className="card-text" >{prod.descripcion}</p>
                        <p className="card-text fw-bolder">$ {prod.precio}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;