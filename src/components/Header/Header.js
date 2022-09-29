import React from 'react';
import './Header.css'
import img1 from '../images/1.png'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <h1>Fitness Freak</h1>
            </div>

        </div>
    );
};

export default Header;