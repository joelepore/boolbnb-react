

const Card = ({ name, indirizzo, details, stanze, bagni, metri }) => {
    return (
        <div className="card">
            {/* componente swiper */}
            {/* componente heart btn */}
            <img src="x"
                alt="Immagine appartamento"
                className="img-fluid rounded-top" />
            <div className="card-body w-50 pt-3">
                <h4 className="card-title py-1">{name}</h4>
                <p className="card-text text-muted">
                    <i className="fa-solid fa-map-marker-alt"></i> {indirizzo}
                </p>
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