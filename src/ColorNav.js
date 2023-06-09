import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function ColorNav({ colors }) {
    return (
        <nav className='nav-colors'>
            <h1>
                Welcome to the Color Factory
            </h1>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to='/colors/new' >
                        Add Color
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default ColorNav;