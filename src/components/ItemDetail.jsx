import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({prod}) => {
    const [item, setItem] = useState({});
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
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;