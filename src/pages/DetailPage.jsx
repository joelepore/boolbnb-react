import Stars from "../components/Stars"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"

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
        <div>
            <h1 className='text-center'>Detail Page</h1>
            {averageVote && <Stars vote={averageVote} />}
            {/* <h1>{property.title}</h1> */}
            {/* Img di copertina con gallery affiancata CLICCANDO LE IMG APRE UN VISUALIZZATORE DI IMG */}
            {/* div dei dettagli che al suo interno ha le info dell'immobile e i COMPONENTI delle stelline e il cuore */}
            {/* componente slider rewiev che contiene il componente di rewievcard */}
            {/* pulsante per contattare il proprietario (Apre il componente del modal di contatto) */}
            {/* Form di recensione */}
        </div>
    )
}

export default DetailPage