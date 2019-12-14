import React from 'react';
import './App.css';
import {Home} from './components/Home';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
