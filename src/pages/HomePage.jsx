import Button from "../components/Button"
import Card from "../components/Card"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import SearchModal from "../components/SearchModal"

const HomePage = () => {

    const { fetchProperties, properties, isSearching } = useGlobalContext()

    useEffect(() => {
        fetchProperties()
    }, [])

    return (
        <>
            {isSearching && <SearchModal />}
            <div className="container">

                <h1 className="text-center py-3">Immobili in evidenza</h1>

                <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3 ">
                    {properties.map((property) => (
                        <div className="col" key={property.id}>
                            <Card name={property.title} indirizzo={property.address} details={false}
                                stelline={property.average_vote} cuori={property.likes} arrayImg={property.images}
                                coverImg={property.cover_img} id={property.id} />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default HomePage