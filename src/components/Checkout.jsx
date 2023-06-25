import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [order, setOrder] = useState("");
    const [orderId, setOrderId] = useState("");
    const {clear, cart, sumTotal, cartTotal } = useContext(CartContext);

    const generarOrden = () => {
        const buyer = { name: nombre, phone: telefono, email: email }
        const items = cart.map(item => ({ id: item.id, title:item.descripcion, price: item.precio, quantity:item.quantity }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };
        console.log(order);

        const db = getFirestore();
        const OrdersCollection = collection(db, "ordenes");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
            .catch(resultado => {
                console.log("no se completo la compra")
            })
        clear();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="text-center">
                        <h3>TU COMPRA</h3>
                    </div>
                    <table className="table text-center">
                        <tbody>
                            <tr className="fs-5">
                                <td></td>
                                <td>Producto</td>
                                <td >Cantidad</td>
                                <td >Precio</td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id} className="align-middle text-center">
                                    <td><img src={item.imagen} alt={item.marca} width={80} /></td>
                                    <td>{item.marca} {item.descripcion}</td>
                                    <td >{item.quantity}</td>
                                    <td colspan="2" className="fw-bold">$ {item.precio}</td>
                                    <td>$ {item.quantity * item.precio}</td>
                                </tr>))}
                            <tr>
                                <td>Cantidad de articulos: </td>
                                <td>{cartTotal()}</td>
                                <td className="fw-bold">TOTAL </td>
                                <td colspan="2" className="fw-bold ">$ {sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="texto" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="texto" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="text-center m-3">
                            <button type="button" onClick={generarOrden} className="btn btn-primary">Enviar datos</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? 
                        <Navigate to={"/confirmation/" + orderId} /> 
                    : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;