import LikesButton from "./LikesButton"


const Card = ({ name, indirizzo, details, stanze, bagni, metri, stelline, cuori }) => {
    return (
        <div className="card">
            <div className="swiper-likes-section position-relative">
                <img src="https://placehold.co/150x150"
                    alt="Immagine appartamento"
                    className="card-img" />
                {/* componente swiper */}
                <LikesButton />
            </div>



            <div className="row card-body">
                <div className="col-9 d-flex flex-column gap-3">
                    <h4 className="card-title text-truncate">{name}</h4>
                    <p className="card-text text-muted">
                        <i className="fa-solid fa-map-marker-alt"></i> {indirizzo}
                    </p>
                </div>
                <div className="col-3 d-flex flex-column gap-3">
                    <span><i class="text-warning fa-solid fa-star"></i>{stelline}</span>
                    <span><i class="text-danger fa-solid fa-heart"></i>{cuori}</span>
                </div>
            </div>

            <div className="card-details pt-4">
                {details && (
                    <div className="d-flex">
                        <span className=""><i className="fa-solid fa-door-open"></i> {stanze} </span>
                        <span className="px-3"><i className="fa-solid fa-bath"></i> {bagni} </span>
                        <span className=""> <strong>SQM:</strong> {metri} </span>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Card