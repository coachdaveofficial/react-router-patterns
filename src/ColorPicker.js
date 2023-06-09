import React from 'react';
import { Link } from 'react-router-dom';
import ColorNav from './ColorNav';


function ColorPicker({colors}) {
    document.documentElement.style.backgroundColor = 'white';

    return (
        <>
            <ColorNav colors={colors} />
            <ul>

                {colors.map((c, idx) => {
                   return (
                        <li key={idx}>
                            <Link to={c.name}>
                                {c.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ColorPicker;