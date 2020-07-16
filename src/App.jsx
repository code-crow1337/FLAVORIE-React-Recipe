import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import SingleRecipe from './Components/SingleRecipe';
import Recipes from './Components/Recipes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Recipes} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipe" component={SingleRecipe} />
      </div>
    </Router>
  );
}

export default App;
