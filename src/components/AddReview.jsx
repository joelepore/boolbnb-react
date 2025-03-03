import { useState } from "react"
import axios from "axios"
import Button from "./Button"


const AddReview = ({ id }) => {

    const initialReviewData = {
        author: "",
        text: "",
        date: 0,
        days: 1,
        create_date: 0,
        vote: 1
    }

    const [reviewData, setReviewData] = useState(initialReviewData)

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log("Recensione inviata");
        setReviewData(initialReviewData)
        console.log(api_url)


    }

    const setFieldValue = (e) => {
        const { value, name } = e.target
        setReviewData((prev => ({ ...prev, [name]: value })))

    }


    return (
        <div className="container">
            <form onSubmit={handlerSubmit} className="">

                <div className="mb-3 pt-3">
                    <label className="form-label">Autore</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        value={reviewData.author}
                        name="author"
                        onChange={setFieldValue}
                        required
                    />
                </div>

                <div className="mb-3 pt-3">
                    <label className="form-label">Recensione</label>
                    <br />
                    <textarea
                        className="form-control"
                        rows="3"
                        value={reviewData.text}
                        name="text"
                        onChange={setFieldValue}
                        required
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 mt-3">
                        <label className="form-label">Data</label>
                        <br />
                        <input
                            type="date"
                            className="form-control"
                            value={reviewData.date}
                            name="date"
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3  mt-3">
                        <label className="form-label">Data Creazione</label>
                        <br />
                        <input
                            type="date"
                            className="form-control"
                            value={reviewData.create_date}
                            name="create_date"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3  mt-3">
                        <label className="form-label">Giorni</label>
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            value={reviewData.days}
                            name="days"
                            onChange={setFieldValue}
                            min="1"
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3 mt-3">
                        <label className="form-label">Voto</label>
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            value={reviewData.vote}
                            name="vote"
                            onChange={setFieldValue}
                            min="0"
                            max="5"
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