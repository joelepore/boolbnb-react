import React from 'react'

const Stars = ({ vote }) => {
    console.log(vote)
    const value = vote * 2 * 10
    return (
        <div>
            <div className="position-relative star-bottom">
                <i className="bi bi-star text-warning "></i>
                <i className="bi bi-star text-warning"></i>
                <i className="bi bi-star text-warning"></i>
                <i className="bi bi-star text-warning"></i>
                <i className="bi bi-star text-warning"></i>
                {/* <div className="position-absolute top-0 end-0 star-middle" style={{ width: negativeValue + '%' }} ></div> */}
                <div className="position-absolute top-0 start-0 star-top" style={{ width: value + '%' }}>
                    <i className="bi bi-star-fill "></i>
                    <i className="bi bi-star-fill "></i>
                    <i className="bi bi-star-fill "></i>
                    <i className="bi bi-star-fill "></i>
                    <i className="bi bi-star-fill "></i>
                </div>

            </div>
        </div>
    )

}

export default Stars