import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorForm from './ColorForm';
import Color from './Color';

function Routes() {
    const [userColors, setUserColors] = useState([]);

    useEffect(
        () => localStorage.setItem("colorPalette", JSON.stringify(userColors)),
        [userColors]
      );

    function addColor(color) {
        setUserColors(userColors => [...userColors, color]);
    }

    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorsList colors={userColors}/>
            </Route>
            <Route exact path='/colors/new'>
                <ColorForm add={addColor} />
            </Route>
            <Route exact path='/colors/:color' >
                <Color />
            </Route>
            <Redirect exact to='/colors' />
        </Switch>
    )
}

export default Routes;