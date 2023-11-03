import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="logo">
                    <img src="/static/images/super-shoes.png" alt="Super shoes logo" />
                </div>
                <div className='button-wrapper'>
                    <button className='btn-signin'>Sign Up</button>
                    <button className='btn-login'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Header