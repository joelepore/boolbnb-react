import LikesButton from "./LikesButton"
import ImgSlider from "./ImgSlider"

const Card = ({ name, indirizzo, details, stanze, letti, metri, stelline, cuori, arrayImg, coverImg }) => {
    return (
        <div className="card">
            <div className="swiper-likes-section position-relative">
                <ImgSlider arrayImg={arrayImg} coverImg={coverImg} />
                <LikesButton />
            </div>



            <div className="row card-body">
                <div className="col-9 d-flex flex-column gap-3">
                    <h4 className="card-title text-truncate">{name}</h4>
                    <p className="card-text text-muted text-truncate">
                        <i className="fa-solid fa-map-marker-alt"></i> {indirizzo}
                    </p>
                </div>
                <div className="col-3 d-flex flex-column gap-3">
                    <span><i className="text-warning fa-solid fa-star pe-1"></i> {stelline}</span>
                    <span><i className="text-danger fa-solid fa-heart pe-1"></i> {cuori}</span>
                </div>
            </div>

            <div className="card-details pt-4">
                {details && (
                    <div className="d-flex">
                        <span className=""><i className="fa-solid fa-door-open"></i> {stanze} </span>
                        <span className="px-3"><i className="fa-solid fa-bed"></i> {letti} </span>
                        <span className=""> <strong>SQM:</strong> {metri} </span>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Card