import { Link, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Button";

const NavBar = () => {
    const { setIsSearching, filterData, setFilterData, fetchFilteredProperties } = useGlobalContext();
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setFilterData(prev => ({ ...prev, search: e.target.value }))
    }

    const clearSearch = () => {
        setFilterData(prev => ({ ...prev, search: "" }));
    };

    return (
        <nav >
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-md-3 d-flex align-items-center ">

                        <Link to="/" className="d-flex align-items-center logo-brand">
                            <img className="logo" src="/Logo_prova.png" alt="Logo" />
                            <h1 className="logo-brand">BoolB&B</h1>
                        </Link>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-2 order-md-2 my-3">

                        <div className="search-container col-12 d-flex justify-content-center align-items-center my-3 px-2">
                            <input
                                type="text"
                                placeholder="Cerca destinazione o immobile"
                                className="form-control col-12 text-center py-2 searchbar"
                                value={filterData?.search || ""}
                                onChange={handleSearchChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' && filterData.search.length > 0) {
                                        navigate('/search');
                                        fetchFilteredProperties();
                                    }
                                    if (e.key === 'Enter' && filterData.search.length === 0) {
                                        navigate('/');
                                    }
                                }}
                            />
                            {filterData.search.length > 0 && <i
                                className="close-icon fa-solid fa-x px-2"
                                onClick={clearSearch}></i>}
                        </div>
                        <div><i
                            className="lente-ricerca fa-solid fa-magnifying-glass px-2"
                            onClick={() => {
                                if (filterData.search.length > 0) {
                                    navigate('/search');
                                    fetchFilteredProperties();
                                }
                            }} ></i></div>
                    </div>


                    <div className="col-6 col-md-3 d-flex justify-content-end align-items-center order-1 order-md-3 my-3">
                        <Button text={"Aggiungi immobile"} onClick={() => navigate('/property/add')} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
