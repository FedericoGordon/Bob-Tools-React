import Imagen from "../components/images/error404.jpg";

const Error404 = () => {
    return (
        <div className=" text-center">
            <img src={Imagen} alt="Error 404" height="400"/>
            <h4>La pagina que estas buscando no existe!</h4>
        </div>
    )
}

export default Error404;