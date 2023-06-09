import React from 'react';
import { useParams, Link } from "react-router-dom";

function Color() {
    const { color } = useParams();
    document.documentElement.style.backgroundColor = color;
    return (

        <div style={{
            margin: '500px'
        }}>
            <Link to='/colors'>
                <button>
                    Go Back
                </button>
            </Link>
        </div>

    )

}

export default Color;