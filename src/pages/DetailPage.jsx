import Stars from "../components/Stars"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import LikesButton from "../components/LikesButton"
import Button from "../components/Button"
import ReviewSlider from "../components/ReviewSlider"
import AddReview from "../components/AddReview"

const DetailPage = () => {

    const { id } = useParams();
    const { fetchProperty, property } = useGlobalContext();

    useEffect(() => {
        fetchProperty(id)

    }, [])

    const navigate = useNavigate()

    const totalVotes = property.reviews.reduce((sum, review) => sum + review.vote, 0);
    const averageVote = (totalVotes / property.reviews.length).toFixed(2);


    return (
        <>
            <div className="container details-container bg-white p-3 shadow">
                <div className="row align-items-center">
                    <div className="col-10">
                        <h1 className="">{property.title}</h1>
                    </div>

                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <h1 className="m-0 position-relative">
                            <LikesButton id={id} callback={() => fetchProperty(id)} /> {property.likes}
                        </h1>
                    </div>
                </div>

                <div className="details-container-img d-flex justify-content-center mt-4 py-3 bg-body-secondary">
                    <img src={property?.cover_img} alt="property.img" className="details-img" />
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
                        {averageVote && <Stars vote={averageVote} />}
                        <p><i className="fa-solid fa-heart text-danger px-2"></i>{property.likes}</p>
                        <Button onClick={() => window.location.href = `mailto:${property.email}?subject=BoolB&B:%20Richiesta%20Informazioni&body=Salve%20${property.owner_fullname},%20vorrei%20informazioni%20sull'immobile%20${property.title}`}
                            text={"Contatta proprietario"} />

                    </div>

                </div>
                <div className="col-12 mt-5">{property.description}</div>
            </div>

            <div className="container bg-white my-3 p-3 pb-4 shadow">
                <h1 className="mt-2 mb-3">Recensioni</h1>
                {property.reviews.length > 0 ? <ReviewSlider review={property.reviews} /> :
                    <div>
                        <h2 className="text-center py-3 ">Nessuna recensione trovata</h2>
                        <h4 className="text-center py-3 ">Hai soggiornato qui? Inserisci la prima recensione per questo immobile e raccontaci la tua esperienza!</h4>
                    </div>
                }

            </div>

            <div className="container bg-white my-3 p-3 pb-4 shadow">
                <h1 className="mt-2 mb-3"> Aggiungi una recensione </h1>
                <AddReview id={property.id} />
            </div>
        </>

    )
}

export default DetailPage
{/* Img di copertina con gallery affiancata CLICCANDO LE IMG APRE UN VISUALIZZATORE DI IMG */ }
{/* Form di recensione */ }