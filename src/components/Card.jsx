import LikesButton from "./LikesButton"
import ImgSlider from "./ImgSlider"

const Card = ({ name, indirizzo, details, stanze, letti, metri, stelline, cuori, arrayImg, coverImg, id, bagni }) => {
    return (
        <div className="card">
            <div className="swiper-likes-section position-relative">
                <ImgSlider arrayImg={arrayImg} coverImg={coverImg} />
                <LikesButton id={id} />
            </div>



            <div className="row card-body">
                <div className="col-9 d-flex flex-column gap-3">
                    <h4 className="card-title text-truncate">{name}</h4>
                    <p className="card-text text-muted text-truncate">
                        <i className="fa-solid fa-map-marker-alt text-danger"></i> {indirizzo}
                    </p>
                </div>
                <div className="col-3 d-flex flex-column gap-3">
                    <span><i className="text-warning fa-solid fa-star pe-1"></i> {stelline}</span>
                    <span><i className="text-danger fa-solid fa-heart pe-1"></i> {cuori}</span>
                </div>
            </div>

            <div className="card-details pt-4">
                {details && (
                    <div className="d-flex gap-4">
                        <span className=""><i className="fa-solid fa-door-open"></i> {stanze} </span>
                        <span className=""><i className="fa-solid fa-bed"></i> {letti} </span>
                        <span className=""><i className="fa-solid fa-bath"></i> {bagni} </span>
                        <span className=""> <strong>m²:</strong> {metri} </span>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Card