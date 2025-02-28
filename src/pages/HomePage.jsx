import Button from "../components/Button"
import Card from "../components/Card"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import SearchModal from "../components/SearchModal"
import TypesMenu from "../components/TypesMenu"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const { initialFilterData, setFilterData, fetchProperties, properties, isSearching, incrementCurrentPage, currentPage, setCurrentPage, totalPages, types } = useGlobalContext()

    const navigate = useNavigate();

    useEffect(() => {
        fetchProperties();
        setCurrentPage(1);
        setFilterData(initialFilterData)

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

                <h1 className="text-center py-3">Immobili in evidenza</h1>

                <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3 ">
                    {properties.map((property) => (
                        <div className="col" key={property.id}>
                            <Card name={property.title} indirizzo={property.address} details={false}
                                stelline={property.average_vote} cuori={property.likes} arrayImg={property.images}
                                coverImg={property.cover_img} id={property.id} bagni={property.bathrooms} />
                        </div>
                    ))}

                </div>
                {currentPage < totalPages && (
                    <div className="text-center mt-5">
                        <Button text={"Mostra altri immobili"} onClick={incrementCurrentPage} />
                    </div>
                )}
            </div>
        </>
    )
}

export default HomePage