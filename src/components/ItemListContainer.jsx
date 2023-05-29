import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from "../components/Json/Productos.json";

const ItenListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <ItemList prod ={items} />
            </div>
        </div>

    )
}

export default ItenListContainer;
