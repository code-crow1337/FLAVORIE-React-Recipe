import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import { AboutPage, RecipePage, SingleRecipePage } from './Pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={RecipePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipe" component={SingleRecipePage} />
      </div>
    </Router>
  );
}

export default App;
