import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import LikesButton from "../components/LikesButton"
import Button from "../components/Button"


const DetailPage = () => {

    const { id } = useParams();
    const { fetchProperty, property } = useGlobalContext();

    useEffect(() => {
        fetchProperty(id)

    }, [id])

    const navigate = useNavigate()

    return (
        <div className="container details-container bg-white p-3">
            <div className="row align-items-center">
                <div className="col-10">
                    <h1 className="">{property.title}</h1>
                </div>

                <div className="col-2 d-flex justify-content-end align-items-center">
                    <h1 className="m-0 position-relative">
                        <LikesButton id={id} onClick={() => fetchProperty(id)} /> {property.likes}
                    </h1>
                </div>
            </div>

            <div className="details-container-img d-flex justify-content-center mt-4 py-3 bg-body-secondary">
                <img src={property.cover_img} alt="property.img" className="details-img" />
            </div>

            <div className="row mt-5 d-flex">
                <div className="col-9">
                    <h2 className="text-truncate">{property.address}</h2>
                    <p className="text-muted mt-2"><strong>Proprietario:</strong> {property.owner_fullname}</p>
                    <p className="text-muted mt-1"><strong>email:</strong> {property.email}</p>

                    <br />

                    <div className="d-flex gap-4">
                        <h3>Dettagli:</h3>
                        <p>m²: {property.sqm}</p>
                        <p><i className="fa-solid fa-door-open"></i> {property.rooms} </p>
                        <p><i className="fa-solid fa-bed"></i> {property.beds} </p>
                        <p><i className="fa-solid fa-bath"></i> {property.bathrooms} </p>
                    </div>
                </div>
                <div className="col-3 d-flex gap-3 flex-column">
                    <p>INSERIRE STELLINE</p>
                    <p><i className="fa-solid fa-heart text-danger px-2"></i>{property.likes}</p>
                    <Button className="" text={"Contatta proprietario"} />
                </div>

            </div>
            <div className="col-12 mt-5">{property.description}</div>
            <div className="col-12 mt-5">x</div>
        </div>

    )
}

export default DetailPage
{/* Img di copertina con gallery affiancata CLICCANDO LE IMG APRE UN VISUALIZZATORE DI IMG */ }
{/* div dei dettagli che al suo interno ha le info dell'immobile e i COMPONENTI delle stelline e il cuore */ }
{/* componente slider rewiev che contiene il componente di rewievcard */ }
{/* pulsante per contattare il proprietario (Apre il componente del modal di contatto) */ }
{/* Form di recensione */ }