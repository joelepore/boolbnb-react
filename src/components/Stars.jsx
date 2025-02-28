import React from 'react'

const Stars = ({ vote }) => {
    const value = vote * 2 * 10
    return (
        <div>
            <div className="position-relative star-bottom">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <div className="position-absolute top-0 start-0 star-top" style={{ width: value + '%' }} >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

            </div>
        </div>
    )

}

export default Stars