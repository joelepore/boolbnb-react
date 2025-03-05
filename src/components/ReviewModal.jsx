import ReviewCard from "./ReviewCard"

const ReviewModal = ({ review, onClick }) => {
    return (
        <div>
            <div className='search-modal-overlay' onClick={onClick}>

                <ReviewCard review={review} />
            </div>

        </div>
    )
}

export default ReviewModal