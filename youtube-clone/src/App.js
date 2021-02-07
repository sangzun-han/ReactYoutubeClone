import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM class naming conveertion
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className='app__page'>
              <Sidebar />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
