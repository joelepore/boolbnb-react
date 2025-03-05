import { useState } from "react"
import axios from "axios"
import Button from "./Button"
import AddStarsReview from "./AddStarsReview"
import { useGlobalContext } from "../context/GlobalContext"


const AddReview = ({ id }) => {

    const { fetchProperty } = useGlobalContext()

    const api_url = import.meta.env.VITE_API_URL

    const initialReviewData = {
        author: "",
        text: "",
        date: new Date().toISOString().split("T")[0],
        days: 1,
        vote: 1
    }

    const [reviewData, setReviewData] = useState(initialReviewData)

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log("Recensione inviata");
        axios.post(`${api_url}/properties/${id}/review`, reviewData)
            .then(res => {
                console.log(res.data)
                setReviewData(initialReviewData)
                fetchProperty(id)
            })
            .catch(err => {
                console.error(err)
            })



    }

    const starsHandler = (e) => {
        setReviewData((prev) => ({ ...prev, vote: e.target.defaultValue }))
    }


    const setFieldValue = (e) => {
        const { name, value } = e.target;

        if (name === "days") {
            const arrivalDate = new Date(reviewData.date);
            const today = new Date();
            const maxDays = Math.ceil((today - arrivalDate) / (1000 * 60 * 60 * 24)); // Giorni massimi possibili

            if (value > maxDays) return; // Impedisce di superare il limite
        }

        setReviewData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <form onSubmit={handlerSubmit} className="">

                <div className="mb-3 pt-3">
                    <label className="form-label">Autore</label>
                    <br />
                    <input
                        placeholder="Inserisci il tuo nome"
                        type="text"
                        className="input-reviews"
                        value={reviewData.author}
                        name="author"
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s-]/g, "");
                            setFieldValue({ target: { name: "author", value } });
                        }}
                        pattern="^[A-Za-zÀ-ÿ\s-]+$"
                        required
                    />
                </div>

                <div className="row">
                    <div className="mb-3 mt-3">
                        <label className="form-label">Data di arrivo</label>
                        <br />
                        <input
                            type="date"
                            className="input-reviews"
                            value={reviewData.date}
                            name="date"
                            onChange={setFieldValue}
                            max={new Date().toISOString().split("T")[0]}
                            required
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="mb-3 mt-3">
                        <label className="form-label">Giorni di permanenza</label>
                        <br />
                        <input
                            type="number"
                            className="input-reviews"
                            value={reviewData.days}
                            name="days"
                            onChange={setFieldValue}
                            min="1"
                            required
                        />
                    </div>

                    <div className="d-flex mt-3 mb-3 flex-column align-items-start">
                        <label className="pb-2"> Voto </label>
                        <AddStarsReview onChange={starsHandler} />
                    </div>

                    <div className="mb-3 pt-3">
                        <label className="form-label">Recensione</label>
                        <br />
                        <textarea
                            placeholder="Inserisci un testo di almeno 10 caratteri"
                            className="input-reviews"
                            rows="3"
                            value={reviewData.text}
                            name="text"
                            onChange={setFieldValue}
                            maxLength="1000"
                            required
                        />
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="button w-25" onClick={handlerSubmit}>
                        Invia Recensione
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AddReview