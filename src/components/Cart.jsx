import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import iconoEliminar from "./images/trash3.svg";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="containerfluid m-3">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning" role="alert">
                            Upps! No se encontraron productos en el carrito!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="contenedor">
            <div className="row">
                <div className="col text-center text-warning">
                    <h1>PRODUCTOS SELECCIONADOS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <table className="table text-center">
                        <tbody>
                            <tr className="fs-5">
                                <td></td>
                                <td>Marca</td>
                                <td>Descripcion</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td className="text-end"><button className="btn btn-outline-danger" onClick={() => { clear() }} title="Vaciar carrito"> Vaciar carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id} className="align-middle text-center">
                                    <td><img src={item.imagen} alt={item.marca} width={90} /></td>
                                    <td>{item.marca}</td>
                                    <td>{item.descripcion}</td>
                                    <td>$ {item.precio}</td>
                                    <td>{item.quantity}</td>
                                    <td className="fw-bold">$ {item.quantity * item.precio}</td>
                                    <td><button className="btn btn-warning" onClick={() => { removeItem(item.id) }}><img src={iconoEliminar} alt={"Logo de tarro de basura para eliminar un producto"} width={28} /></button></td>
                                </tr>))}
                            <tr className="fs-5">
                                <td colSpan={3}>TOTAL DE ARTICULOS: {cartTotal()}</td>
                                <td className="fw-bold">TOTAL $ {sumTotal()}</td>
                                <td></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-success"> Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col">
                        <div className="text-end m-2">
                            <Link to={"/"} className="btn btn-secondary"> Volver </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
