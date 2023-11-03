import './Carousel.css';

const Carousel = ({ data }) => {
    return (
        <div className="carousel">
            {data.map((item) => (

                <div key={item.id} className="item">
                    <div className="image">
                        <img src={item.image} alt={item.name} />
                    </div>

                    <div className="info">
                        <span className="name">{item.name}</span>
                        <span className="oldPrice">U$ {item.oldPrice}</span>
                        <span className="price">U$ {item.price}</span>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Carousel