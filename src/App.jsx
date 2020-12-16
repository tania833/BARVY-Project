import React from 'react';
import './normalize.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Artists from './pages/Artists/Artists';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Techniques from './pages/Techniques/Techniques';
import Footer from './components/Footer';
import { Contacts } from './pages/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Artists} path="/artists" />
          <Route component={Techniques} path="/techniques" />
          <Route component={Events} path="/events" />
          <Route component={About} path="/about" />
          <Route component={Contacts} path="/contacts" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
