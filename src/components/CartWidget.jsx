import LogoCarrito from "./images/bag-dash.svg";

const CartWidget = () => {
    return (<div className="d-flex justify-content-center">
        <button type="button" className=" btn btn-primary position-relative ">
            <img src={LogoCarrito} alt={"Logo de carrito"} width={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    </div>
    )
}

export default CartWidget;