import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItenListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, "productos");
        const q = id ? query(productosCollection, where("categoria", "==", id)) : productosCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            } else {
                console.error("Lo sentimos, no se encontraron los productos");
            }
        });
    }, [id]);


    return (
        <div className="container">
            <div className="row">
                { loading ? <Loading /> : <ItemList prod={items} />} 
            </div>
        </div>

    )


}

export default ItenListContainer;
