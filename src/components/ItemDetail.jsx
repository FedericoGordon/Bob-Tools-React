import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ prod }) => {
    const { addItem } = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(prod);
    }, [prod]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={item.imagen} alt={item.marca} className="img-fluid" />
                </div>
                <div className="col-6">
                    <h1 className="text-center">{item.marca}</h1>
                    <h4>{item.descripcion}</h4>
                    <p className="fw-bolder text-center fs-1">$ {item.precio}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
                <div className="text-end m-2">
                    <Link to={"/"} className="btn btn-secondary"> Volver </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;