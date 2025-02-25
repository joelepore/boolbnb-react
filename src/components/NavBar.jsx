import { Link, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";

const NavBar = () => {
    const navigate = useNavigate();
    const { setIsSearching } = useGlobalContext();

    const handleSearchClick = () => {
        navigate('/search');
        setIsSearching(true);
    }

    return (
        <nav >
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-sm-3 d-flex align-items-center my-3">

                        <Link to="/" className="d-flex align-items-center logo-brand">
                            <img className="logo" src="Logo_prova.png" alt="Logo" />
                            <h1 className="logo-brand">BoolB&B</h1>
                        </Link>
                    </div>


                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center order-2 order-sm-1 my-3">
                        <button className="row searchbar" onClick={handleSearchClick}>
                            <div className="col-2"></div>
                            <div className="col-8 text-center">Cerca destinazione</div>
                            <div className="col-2 text-end"><i className="fa-solid fa-sliders"></i></div>
                        </button>
                    </div>


                    <div className="col-6 col-sm-3 d-flex justify-content-end align-items-center order-1 order-sm-3 my-3">
                        <button className="button">Aggiungi immobile</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar