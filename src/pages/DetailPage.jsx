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

            <div className="container details-container bg-white p-3 mb-2 shadow">
                <div className="row align-items-center">
                    <div className="col-lg-10 col-12">
                        <h1 className="">{property.title}</h1>
                    </div>

                    <div className="col-lg-2 col-12 justify-content-lg-end d-flex align-items-center">
                        <h1 className="m-0 position-relative">
                            <LikesButton id={id} callback={() => fetchProperty(id)} /> {property.likes}
                        </h1>
                    </div>
                </div>
                <div className="col-12 pt-2"><span>{averageVote && <Stars vote={averageVote} />}</span></div>
            </div>

            <div className="container details-container bg-white shadow">

                <div className="row py-3">

                    <div className="col-lg-7 col-12">
                        <img src={property?.cover_img} alt="cover_img" className="w-100" />
                    </div>
                    <div className="col-lg-5 col-12 d-flex flex-column">

                        <div className="d-flex flex-column">
                            <h2 className="text-truncate pb-1 pt-2">{property?.address}</h2>

                            <p className="py-4">
                                <strong>Descrizione:</strong> <br /> {property.description}
                            </p>


                            <h3 className="mt-2">Dettagli:</h3>
                            <p>{property.sqm} - m²</p>
                            <p><i className="fa-solid fa-door-open"></i> {property.rooms} - Stanze</p>
                            <p><i className="fa-solid fa-bed"></i> {property.beds} - Letti</p>
                            <p><i className="fa-solid fa-bath"></i> {property.bathrooms} - Bagni</p>



                        </div>

                        <div className="py-2 mt-auto">
                            <p className="text-muted mb-1"><strong>Proprietario:</strong> {property?.owner_fullname}</p>
                            <p className="text-muted mb-3"><strong>Email:</strong> {property?.email}</p>
                            <Button
                                onClick={() => window.location.href = `mailto:${property.email}?subject=BoolB&B:%20Richiesta%20Informazioni&body=Salve%20${property.owner_fullname},%20vorrei%20informazioni%20sull'immobile%20${property.title}`}
                                text={"Contatta proprietario"}
                            />
                        </div>


                    </div>

                </div>

            </div>

            <div className="container bg-white mt-5 p-3 shadow">
                <h1 className="mt-2 mb-3">Recensioni</h1>
                <ReviewSlider review={property.reviews} />
            </div>

            <div className="container bg-white mt-2 p-3 pb-4 shadow">
                <h1 className="mt-2 mb-3"> Aggiungi una recensione </h1>
                <AddReview id={property.id} />
            </div>
        </>

    )
}

export default DetailPage