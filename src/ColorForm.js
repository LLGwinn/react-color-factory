import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './ColorForm.css';

function ColorForm( {add} ) {
    const [chosenColor, setChosenColor] = useState('#FFFFFF');
    const history = useHistory();

    function handleChange(evt) {
        setChosenColor(evt.target.value);
    }

    function handleClick(evt) {
        evt.preventDefault();
        add(chosenColor);
        history.push('/colors');
    }

    return (
        <form className='ColorForm'>
            <h3>Please choose a color to add to your personal palette.</h3>
            <input type='color' 
                   name='color' 
                   placeholder='color' 
                   value={chosenColor} 
                   onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>

        </form>
    )
}

export default ColorForm;