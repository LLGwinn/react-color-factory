import React from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import './Color.css';

function Color( {colors} ) {
    const {color} = useParams();
    const history = useHistory();

    const isUserColor = () => {
        const testColor = `#${color}`;
        return colors.find( (userColor) => testColor === userColor)
    }

    if (!isUserColor()) {
        alert('Color shown in URL is not in your palette.')
        history.push('/colors');
    }
    
    return (
        <div>
            <h3>COLOR: #{color}</h3>
            <div className='Color-sample' style={{backgroundColor:`#${color}`}}></div>
            <Link to='/colors'>
                <button>Main Page</button>
            </Link>
        </div>
    )
}

export default Color;