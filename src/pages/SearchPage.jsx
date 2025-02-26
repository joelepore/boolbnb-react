import SearchModal from "../components/SearchModal"
import { useGlobalContext } from "../context/GlobalContext"
import Card from "../components/Card"

const SearchPage = () => {
    const { isSearching, filteredProperties } = useGlobalContext();

    return (
        <>

            {isSearching && <SearchModal />}
            <div className="container">

                {filteredProperties.length > 0 ? <h1 className="text-center py-3">Risultati della ricerca</h1> : <h1 className="text-center py-3">Nessun risultato trovato</h1>}

                <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3 ">
                    {filteredProperties.map((property) => (
                        <div className="col" key={property.id}>
                            <Card name={property.title} indirizzo={property.address} details={true}
                                stelline={property.average_vote} cuori={property.likes} arrayImg={property.images}
                                coverImg={property.cover_img} stanze={property.rooms} letti={property.beds} metri={property.sqm} />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default SearchPage