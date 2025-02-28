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

    return (
        <div>
            <h1 className='text-center'>Detail Page</h1>
            {/* Img di copertina con gallery affiancata CLICCANDO LE IMG APRE UN VISUALIZZATORE DI IMG */}
            {/* div dei dettagli che al suo interno ha le info dell'immobile e i COMPONENTI delle stelline e il cuore */}
            {/* componente slider rewiev che contiene il componente di rewievcard */}
            {/* pulsante per contattare il proprietario (Apre il componente del modal di contatto) */}
            {/* Form di recensione */}
        </div>
    )
}

export default DetailPage