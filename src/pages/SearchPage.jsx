import SearchModal from "../components/SearchModal"
import { useGlobalContext } from "../context/GlobalContext"
import Card from "../components/Card"
import { useEffect } from "react";
import Button from "../components/Button";
import TypeButton from "../components/TypeButton";
import { useNavigate } from "react-router-dom";
import TypesMenu from "../components/TypesMenu"

const SearchPage = () => {
    const { setFilterData, isSearching, setIsSearching, filteredProperties, setCurrentPage, incrementCurrentPageSearchPage, currentPage, totalPages, totalResults, types } = useGlobalContext();

    const navigate = useNavigate();

    const handleButtonFilterClick = () => {
        setIsSearching(true);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [])

    const handleClick = (id) => {
        setFilterData(prev => ({ ...prev, type: id }));
        navigate('/search')
    }

    return (
        <>
            <div className="types-menu d-flex justify-content-center mb-3">
                {types.map(type => (
                    <TypesMenu
                        key={type.id}
                        text={type.name}
                        path={type.icon_path}
                        onClick={() => handleClick(type.id)}
                    />
                ))}
            </div>

            {isSearching && <SearchModal />}
            <div className="container">
                <div className="search-page-heading my-2">
                    <h4 className="total-results">Risultati totali: {totalResults}</h4>
                    {filteredProperties.length > 0 ? <h1 className="text-center py-3 search-page-main-text">Risultati della ricerca</h1> : <h1 className="text-center py-3 search-page-main-text">Nessun risultato trovato</h1>}
                    <button
                        className="button-filter"
                        onClick={handleButtonFilterClick}
                    ><i className="fa-solid fa-sliders"></i> Filtri</button>
                </div>

                <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3 ">
                    {filteredProperties.map((property) => (
                        <div className="col" key={property.id}>
                            <Card name={property.title} indirizzo={property.address} details={true}
                                stelline={property.average_vote} cuori={property.likes} arrayImg={property.images}
                                coverImg={property.cover_img} stanze={property.rooms} letti={property.beds} metri={property.sqm} id={property.id} bagni={property.bathrooms} />
                        </div>
                    ))}

                </div>
                {currentPage < totalPages && (
                    <div className="text-center mt-5">
                        <Button text={"Mostra altri immobili"} onClick={incrementCurrentPageSearchPage} />
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchPage