import ImgSlider from "./ImgSlider"
import Button from "./Button"
const CardSummary = ({ property }) => {
    const gallery = property.gallery.map((image, index) => ({ id: index, path: URL.createObjectURL(image) }));
    return (
        <>
            <div className="container details-container bg-white p-3 mb-2 shadow">
                <div className="row align-items-center">
                    <div className="col-lg-10 col-12">
                        <h1 className="">{property.title}</h1>
                    </div>
                </div>
            </div>

            <div className="container details-container bg-white shadow">
                <div className="row py-3">
                    <div className="col-lg-7 col-12 sezione-img-dettagli">
                        <ImgSlider arrayImg={gallery} coverImg={URL.createObjectURL(property.cover_img)} />
                    </div>
                    <div className="col-lg-5 col-12 d-flex flex-column">
                        <div className="d-flex flex-column">
                            <h2 className="text-truncate pb-1 pt-2">{property?.address}</h2>
                            <h3 className="pt-4">Descrizione: </h3>
                            <p className="fs-5 pb-4 italic">{property.description}</p>
                            <h3 className="mt-2">Dettagli:</h3>
                            <p className="pt-2" >{property.sqm} - m²</p>
                            <p className="pt-1"><i className="fa-solid fa-door-open"></i> {property.rooms} - Stanze</p>
                            <p className="pt-1"><i className="fa-solid fa-bed"></i> {property.beds} - Letti</p>
                            <p className="pt-1"><i className="fa-solid fa-bath"></i> {property.bathrooms} - Bagni</p>
                        </div>
                        <div className="py-3 mt-auto">
                            <p className="text-muted mb-1"><strong>Proprietario:</strong> {property?.owner_fullname}</p>
                            <p className="text-muted mb-3"><strong>Email:</strong> {property?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardSummary