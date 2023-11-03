import { useRef } from 'react';
import './Carousel.css';

const Carousel = ({ data }) => {

    const carousel = useRef(null);
    const btnLeft = useRef(null);
    const btnRight = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        waitBtnClick();
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        waitBtnClick();
    }

    const waitBtnClick = () => {
        btnLeft.current.setAttribute('disabled', true);
        btnRight.current.setAttribute('disabled', true);
        setTimeout(() => {
            btnLeft.current.removeAttribute('disabled');
            btnRight.current.removeAttribute('disabled');
        }, 500);
    }

    return (
        <>
            <div className="carousel" ref={carousel}>
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
            <div className='buttons'>
                <button onClick={handleLeftClick} ref={btnLeft}>
                    <img src="/static/images/right_chevron.png" alt="Scroll left" />
                </button>
                <button onClick={handleRightClick} ref={btnRight}>
                    <img src="/static/images/right_chevron.png" alt="Scroll right" />
                </button>
            </div>
        </>
    )
}

export default Carousel