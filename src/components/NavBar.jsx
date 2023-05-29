import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning ">
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse d-flex justify-content-center fw-bolder " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5 border-start border-bottom border-dark">
                                <NavLink to={"/category/electricas"} className="nav-link text-dark">Herramientas electricas</NavLink>
                            </li>
                            <li className="nav-item mx-5 border-start border-bottom border-dark">
                                <NavLink to={"/category/inalambricas"} className="nav-link text-dark ">Herramientas inalambricas</NavLink>
                            </li>
                            <li className="nav-item mx-5 border-start border-bottom border-dark">
                                <NavLink to={"/category/manuales"} className="nav-link text-dark">Herramientas manuales</NavLink>
                            </li>
                            <li className="nav-item mx-5 border-start border-bottom border-dark">
                                <NavLink to={"/category/accesorios"} className="nav-link text-dark">Accesorios</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar; 