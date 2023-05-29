import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
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
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>

        </div>
    )
}

export default ItemCount;