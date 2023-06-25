import { Link, useParams } from "react-router-dom"


const Confirmation = () => {
    const { orderId } = useParams();

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col text-center alert alert-info">
                    <h1 className="fs-1 text "> Gracias por comprar en Bob Tools</h1>
                    <p>Tu orden de compra es:</p>
                    <p><b>{orderId}</b></p>
                    <p className="fs-4">Recorda guardar este codigo</p>
                </div>
                <div className="text-center">
                    <p><Link to={"/"} className="btn btn-secondary">Volver a inicio</Link></p>
                </div>
            </div>
        </div>
            )
}

export default Confirmation; 