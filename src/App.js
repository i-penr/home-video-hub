import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Video from './Video';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <div className='content'>
              <Home />
            </div>
          </Route>
          <Route path="/series">
            <Navbar />
            <div className='content'>

            </div>
          </Route>
          <Route exact path="/peliculas">
            <Navbar />
            <div className='content'>

            </div>
          </Route>
          <Route path="/videos/:id">
            <Video />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
