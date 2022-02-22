import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import ColorForm from './ColorForm';
import ColorsList from './ColorsList';
import Color from './Color';

function App() {
  const [userColors, setUserColors] = useState([]);

  function addColor(color) {
    setUserColors(userColors => [...userColors, color]);
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path='/colors'>
          <h3>Welcome to the Color Factory!</h3>
          <Link to="/colors/new">Add a color to your palette</Link>
          <ColorsList colors={userColors}/>
        </Route>
        <Route exact path='/colors/new'>
          <ColorForm add={addColor}/>
        </Route>
        <Route exact path='/colors/:color'>
          <Color colors={userColors}/>
        </Route>
        <Redirect exact to='/colors' />
      </Switch>

    </div>
  );
}

export default App;
