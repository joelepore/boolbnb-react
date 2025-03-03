import Stars from "./Stars";

const ReviewCard = ({ review }) => {

    const { author, text, date, days, create_date, vote } = review

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const formattedArrivalDate = formatDate(date)
    const formattedRewiewDate = formatDate(create_date)


    return (
        <div className="d-flex card rev-card">
            <div className="col-5">
                <h2>{author}</h2>
                <div className="stars-review mb-3"><Stars className='fs-7' vote={vote} /></div>
                <p><i className="fa-solid fa-bed mb-1 me-2"> </i><small>{days}</small> notti</p>
                <p><i className="fa-regular fa-calendar me-2"></i><small>{formattedArrivalDate}</small></p>
            </div>

            <div className="col-7 d-flex flex-column justify-content-between">
                <p><i className="fa-solid fa-quote-left mt-2 "></i> {text} <i className="fa-solid fa-quote-right"></i></p>
                <p className="text-end "><em><small>Inserita il {formattedRewiewDate}</small></em></p>
            </div>
        </div>
    )
}

export default ReviewCard