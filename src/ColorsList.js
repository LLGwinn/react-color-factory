import React from 'react';
import {Link} from 'react-router-dom';

function ColorsList( {colors}) {
    return (
        <div>
            {
            colors.map( color => {
                const newColor = color.slice(1)
                return (
                    <Link to={`/colors/${newColor}`} key={color}>{color}</Link>
                )
            })
            }
        </div>
    )
}

export default ColorsList;