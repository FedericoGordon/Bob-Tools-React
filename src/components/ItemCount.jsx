import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdd(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container d-flex justify-content-center">
            <div className="row m-3">
                <div className="col-5">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-primary">{items}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
                <div className="col-6">
                    { itemAdd ? <Link to={"/cart"} className="btn btn-primary"> Finalizar compra </Link> : <button type="button" className="btn btn-primary" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>

        </div>
    )
}

export default ItemCount;