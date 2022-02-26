import React from 'react';
import {Link} from 'react-router-dom';
import './ColorsList.css';

function ColorsList( {colors} ) {

    const reverseColors = colors.slice().reverse();

    return (
        <>
        <h1>Welcome to the Color Factory!</h1>
        <div className='ColorsList'>
            <h3>Your color palette:</h3>
            {
            reverseColors.map( color => {
                const newColor = color.slice(1)
                return (
                    <Link 
                        className='ColorsList-link'
                        to={`/colors/${newColor}`}
                        key={color}>{color}
                    </Link>
                )
            })
            }
        </div>
        <Link to="/colors/new">Add a color to your palette</Link>
        </>
    )
}

export default ColorsList;