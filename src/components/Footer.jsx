import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Whatsapp from "./images/whatsapp.svg";
import Youtube from "./images/youtube.svg";

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary p-2">
            <div className="row">
                <div className=" col-md-4 ">
                    <ul className="list-group text-center ">
                        <li className="list-group-item bg-secondary border border-0">
                            <a href="#" className="text-decoration-none text-light fw-bold"> TIENDA ONLINE</a>
                        </li>
                        <li className="list-group-item bg-secondary border border-0">
                            <a href="#" className="text-decoration-none text-light"> Venta Empresas</a>
                        </li>
                        <li className="list-group-item bg-secondary border border-0">
                            <a href="#" className="text-decoration-none text-light"> Trabajo con nosotros</a>
                        </li>
                        <li className="list-group-item bg-secondary border border-0">
                            <a href="#" className="text-decoration-none text-light"> Ley 24.240, de Defensa del Consumidor</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-5 fw-bold text-dark d-flex align-items-end justify-content-center">
                    © 2023 por Federico Gordon
                </div>
                <div className=" col-md-3 d-flex justify-content-evenly">
                    <img src={Facebook} alt={"Logo de Facebook"} width={40} />
                    <img src={Instagram} alt={"Logo de Instagram"} width={40} />
                    <img src={Whatsapp} alt={"Logo de Whatsapp"} width={40} />
                    <img src={Youtube} alt={"Logo de Youtube"} width={40} />
                </div>
            </div>
        </div>
    )
}

export default Footer; 