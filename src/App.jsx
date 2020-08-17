import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch, 
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Theme from './Styles/Theme';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import { AboutPage, RecipePage, SingleRecipePage } from './Pages';

function App() {
  return (
    <Theme>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Container maxWidth="xl">
                <Switch>
                  <Route exact path="/" component={RecipePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/recipe:uri" component={SingleRecipePage} />
                </Switch>
          </Container>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
