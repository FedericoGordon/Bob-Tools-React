import Sitio from "./images/sitio-construccion.jpg";

const ItenListContainer = ({ greeting, saludo }) => {
    return (
        <div className="bg-light">
            <h1 className="d-flex justify-content-center m-3">
                {greeting}
            </h1>
            <div className="d-flex justify-content-center m-3">
                <img  width={500} src={Sitio} alt={"Imagen de herramientas que dice sitio en construccion"} />
            </div>
            <h4 className="d-flex justify-content-center m-3">
                {saludo}
            </h4>
        </div>

    )
}

export default ItenListContainer;
