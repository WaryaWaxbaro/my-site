import React from 'react';
import Nav from './components/Nav';
import Container from './components/Container';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={['/', '/:name']} render={(routeProps) => <Container {...routeProps} />}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
