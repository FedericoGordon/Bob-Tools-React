import LogoCarrito from "./images/bag-dash.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-center">
            {(cartTotal() > 0) ? <Link type="button" className=" btn btn-warning position-relative" to={"/cart"}>
                    <img src={LogoCarrito} alt={"Logo de carrito"} width={20} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartTotal()}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </Link> : ""}
        </div>
    )
}

export default CartWidget;