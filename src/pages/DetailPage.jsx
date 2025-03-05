import Stars from "../components/Stars"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import LikesButton from "../components/LikesButton"
import Button from "../components/Button"
import ReviewSlider from "../components/ReviewSlider"
import AddReview from "../components/AddReview"
import ImgSlider from "../components/ImgSlider"

const DetailPage = () => {

    const { id } = useParams();
    const { fetchProperty, property, properties, setProperty } = useGlobalContext();

    useEffect(() => {
        fetchProperty(id)
        window.scrollTo(0, 0)

    }, [])

    const navigate = useNavigate()

    const totalVotes = property.reviews.reduce((sum, review) => sum + review.vote, 0);
    const averageVote = (totalVotes / property.reviews.length).toFixed(1);


    return (
        <>

            <div className="container details-container bg-white p-3 mb-2 shadow">
                <div className="row align-items-center">
                    <div className="col-lg-10 col-12">
                        <h1 className="">{property.title}</h1>
                    </div>

                    <div className="col-lg-2 col-12 justify-content-lg-end d-flex align-items-center">
                        <h1 className="m-0 position-relative">
                            <LikesButton id={id} callback={() => setProperty(prev => ({ ...prev, likes: prev.likes + 1 }))} /> {property.likes}
                        </h1>
                    </div>
                </div>

                {property.reviews.length > 0 ?
                    (
                        <div className="col-12 pt-2 d-flex justify-content-start">
                            {averageVote && <Stars vote={averageVote} />}
                            <p className="ps-1"><small>{averageVote}</small></p>
                        </div>

                    ) :
                    (<div>
                        <h4>Nessuna recensione rilasciata</h4>
                    </div>)
                }
            </div>

            <div className="container details-container bg-white shadow">

                <div className="row py-3">

                    <div className="col-lg-7 col-12 sezione-img-dettagli">
                        <ImgSlider arrayImg={property.images} coverImg={property.cover_img} />
                    </div>
                    <div className="col-lg-5 col-12 d-flex flex-column">

                        <div className="d-flex flex-column">
                            <h2 className="text-truncate pb-1 pt-2">{property?.address}</h2>

                            <h3 className="pt-4">Descrizione: </h3>

                            <p className="interlinea-c pb-4 italic">{property.description}</p>



                            <h3 className="mt-2">Dettagli:</h3>
                            <p className="pt-2" >{property.sqm} - m²</p>
                            <p className="pt-1"><i className="fa-solid fa-door-open"></i> {property.rooms} - Stanze</p>
                            <p className="pt-1"><i className="fa-solid fa-bed"></i> {property.beds} - Letti</p>
                            <p className="pt-1"><i className="fa-solid fa-bath"></i> {property.bathrooms} - Bagni</p>



                        </div>

                        <div className="py-3 mt-auto">
                            <p className="text-muted mb-1"><strong>Proprietario:</strong> {property?.owner_fullname}</p>
                            <p className="text-muted mb-3"><strong>Email:</strong> {property?.email}</p>
                            <Button
                                onClick={() => window.location.href = `mailto:${property.email}?subject=BoolBnB:%20Richiesta%20Informazioni&body=Salve%20${property.owner_fullname},%20vorrei%20informazioni%20sull'immobile%20${property.title}`}
                                text={"Contatta proprietario"}
                            />
                        </div>


                    </div>

                </div>

            </div>

            <div className="container bg-white mt-5 p-3 shadow">
                {property.reviews.length > 0 ?
                    (<div>
                        <h1 className="mt-2 mb-3">Recensioni</h1>
                        <ReviewSlider review={property.reviews} />
                    </div>) :
                    (<div>
                        <h2 className="text-center py-3 ">Nessuna recensione trovata</h2>
                        <h4 className="text-center py-3 ">Hai soggiornato qui? Inserisci la prima recensione per questo immobile e raccontaci la tua esperienza!</h4>
                    </div>)
                }

            </div>

            <div className="container bg-white mt-2 p-3 pb-4 shadow">
                <h1 className="mt-2 mb-3"> Aggiungi una recensione </h1>
                <AddReview id={property.id} />
            </div>
        </>

    )
}

export default DetailPage