import React from 'react'

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="item">
                <div className="image">
                    <img src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg" alt="Super shoe 1" />
                </div>

                <div className="info">
                    <span className="name">Super shoe 1</span>
                    <span className="oldPrice">U$ 299.00</span>
                    <span className="price">U$ 199.00</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel