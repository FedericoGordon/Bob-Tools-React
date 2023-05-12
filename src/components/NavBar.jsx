const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning ">
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5 border-start border-bottom border-dark">
                                <a className="nav-link text-dark border-start border-bottom border-dark" href="#">Productos</a>
                            </li>
                            <li className="nav-item mx-5 text-dark border-start border-bottom border-dark">
                                <a className="nav-link" href="#">Pagos y envios</a>
                            </li>
                            <li className="nav-item mx-5 text-dark border-start border-bottom border-dark">
                                <a className="nav-link" href="#">Preguntas frecuentes</a>
                            </li>
                            <li className="nav-item mx-5 text-dark border-start border-bottom border-dark">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar; 