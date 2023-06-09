import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function DogNav({ dogs }) {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                {dogs.map((dog, idx) => {
                    return (
                        <li className='nav-item' key={idx}>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                                {dog.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

    );
}

export default DogNav;