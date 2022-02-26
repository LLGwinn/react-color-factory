import React from 'react';
import {useParams, Link, Redirect, useHistory} from 'react-router-dom';
import './Color.css';

function Color() {
    const { color } = useParams();
    const history = useHistory();

    const allColors = JSON.parse(localStorage.getItem('colorPalette'));

    function isUserColor() {
        const testColor = `#${color}`;
        return allColors.includes(testColor);
    }

    if (!isUserColor(color)) {
        history.push('/colors')
    }

    return ( 
        <div>
            <h2>COLOR: #{color}</h2>
            <div className='Color-sample' style={{backgroundColor:`#${color}`}}></div>
            <Link to='/colors'>
                <button>Main Page</button>
            </Link>
        </div>
    ) 

    
}

export default Color;