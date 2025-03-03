import React from 'react'

const Stars = ({ vote }) => {
    const value = vote * 2 * 10
    return (
        <div className='w-100'>
            <div className="position-relative star-bottom">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <div className="position-absolute top-0 start-0 star-top" style={{ width: value + '%' }} >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>

            </div>
        </div>
    )

}

export default Stars