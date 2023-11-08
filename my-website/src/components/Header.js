import React from 'react';
import background from '../images/background.jpg';

function Header() {
    return (
    <>
        <header>
            <img src={background} className='grayscale' alt="" />
        </header>
    </>
    )
}

export default Header;