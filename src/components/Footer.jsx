import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Whatsapp from "./images/whatsapp.svg";
import Youtube from "./images/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary p-2">
            <div className="row">
                <div className=" col-md-4 ">
                    <Link to={"/"} className=" text-dark text-decoration-none fs-4 d-flex align-items-end justify-content-center"> INICIO</Link>
                    <Link to={"/marcas"} className=" text-dark text-decoration-none fs-4 d-flex align-items-end justify-content-center"> MARCAS</Link>
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