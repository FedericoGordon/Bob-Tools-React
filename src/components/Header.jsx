import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import BobLogo from "./images/bob-1.jpg";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light p-3">
                <div className=" col-md-3">
                    <img src={BobLogo} alt={"Logo de bob el constructor"} width={50}/>
                </div>
                <div className="col-md-6">
                    <h1 className="text-dark text-center">
                        BOB TOOLS
                    </h1>
                </div>
                <div className="col-md-3">
                    <CartWidget/> 
                </div>
            </div>
            <div className="row p-3">
                <NavBar/>
            </div>
        </div>
    )
}

export default Header; 

