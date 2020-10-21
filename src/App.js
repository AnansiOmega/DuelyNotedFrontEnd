import React from 'react';
import './App.css';
import Login from './Containers/Login'
import Home from './Containers/Home'
import NoMatch from './Containers/NoMatch'
import { Switch, Route } from 'react-router-dom'
import NewNote from './Containers/NewNote'
import NavBar from './Components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home}/>
      <Route path='/newnote' component={NewNote}/>
      <Route path='*' component={NoMatch}/>
      </Switch>
    </div>
  );
}

export default App;
